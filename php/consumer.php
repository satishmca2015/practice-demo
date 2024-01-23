<?php
error_reporting(E_ALL);
ini_set('error_reporting', E_ALL);

require_once '/usr/local/apache/htdocs/v2/vendor/autoload.php';
require_once '/usr/local/apache/htdocs/v2/common_function/update_userbase.php';
require_once '/usr/local/apache/htdocs/v2/config/rabbitmq_config.php';
// require_once '/usr/local/apache/htdocs/v2/consumer_store/mpg_common_call.php';
require_once '/usr/local/apache/htdocs/v2/consumer_store/microbilling_class/MTN_Afghanistan_Micro_Billing.php';

use PhpAmqpLib\Connection\AMQPStreamConnection;
use PhpAmqpLib\Message\AMQPMessage;

$sQueueName = 'MTN_Afghan_Renewal';

$rConnection = new AMQPStreamConnection(RQUEUE_130_HOST, RQUEUE_130_PORT, RQUEUE_130_USER_RENEW, RQUEUE_130_PASSWORD_RENEW, RQUEUE_130_VHOST_RENEW);
$rChannel = $rConnection->channel();
$rChannel->queue_declare($sQueueName, false, true, false, false);

date_default_timezone_set('Asia/Calcutta');

echo ' [*] Waiting for messages. To exit press CTRL+C', "\n";
$callback = function($msg) {

    global $sQueueName;
    $sLogPath = '/usr/local/apache/logs/billing/';
    $sOperator = 'mtn_afghanistan';
    $sLogFile = "mtn_afghanistan_renewal_process_" . date("Ymd") . ".log";

    try {
        $sQueueMessagae = $msg->body;
        log_write("\nInfo :|Consumer|" . date("Y-m-d H:i:s") . "|QueueMessage = " . $sQueueMessagae . "|" . $sQueueName, $sLogPath, $sOperator, $sLogFile);
        processCallback($sQueueMessagae, $sLogPath, $sOperator, $sLogFile);
        $msg->delivery_info['channel']->basic_ack($msg->delivery_info['delivery_tag']);
    } catch (Exception $e) {
        log_write("\nError :|Consumer|" . date("Y-m-d H:i:s") . "|" . $sQueueName . "|" . $e->getMessage(), $sLogPath, $sOperator, $sLogFile);
    }
};

$rChannel->basic_qos(null, 1, null);
$rChannel->basic_consume($sQueueName, '', false, false, false, false, $callback);

while (count($rChannel->callbacks)) {
    $rChannel->wait();
}

function processCallback($sQueueMessagae, $sLogPath, $sOperator, $sLogFile) {
    global $sQueueName;
    $dbObj = new database();
    
    $sResponse = '';
    list($iMsisdn, $sEventId, $sPricePointId, $iRate, $iOperatorId, $sMerchantId, $sClientType, $sStatus, $sTypeName, $sSubscriptionId) = explode("|", $sQueueMessagae);
    
    $aSelect = $dbObj->selectDetails('sngmpg.mtn_afghanistan_subscription', 'id, status', array('msisdn' => " = '" . $iMsisdn . "'", 'event_id' => " = '" . $sEventId . "'"));
    log_write("\nInfo :|Consumer|" . date("Y-m-d H:i:s") . "|select Response = " . json_encode($aSelect), $sLogPath, $sOperator, $sLogFile);
    
    if ($aSelect['status'] == 'success' && !empty($aSelect['data']) && $aSelect['data']['status'] && $aSelect['data']['status'] == 6) {

        log_write("\nInfo :|Consumer|" . date("Y-m-d H:i:s") . "|" . $iMsisdn . "|Micro Billing Response = User Is In Inactive state so not chraging", $sLogPath, $sOperator, $sLogFile);
        $sStatusCode = 'H102';
        $sResponseMsg = 'Already Unsubscribed';
        $sResponseStatus = 'FAIL';
        $sResponseTransId = '';
    
    } else {
        
        $sTransactionId = $iMsisdn . date('Ymdhis');
        /* $sResponse = micro_billing($iMsisdn, $iRate, 36, $sMerchantId, '', '', $sEventId, 'RENEW', 'n-72', 'renewal for ' . $sEventId, $sEventId, 0, $sTransactionId, 'renew', $iOperatorId, 30, 0, '', 'no consent url', 'no image', 'ACR', '', 'system'); */

       
        $aParam['msisdn'] = $iMsisdn;
        $aParam['event_id'] = $sEventId;
        $aParam['action'] = "renew";
        $aParam['rate'] = $iRate;
        $aParam['operator'] = "MTN_AFGHANISTAN";
        $aParam['operator_id'] = $iOperatorId;
        $aParam['circle'] = 'Other';
        $aParam['circle_id'] = '30';
        $aParam['other1'] = 'ACR';
        $aParam['other2'] = '';
        $aParam['transid'] = $sTransactionId;
        $aParam['dbObj']=$dbObj;
        $oMicroBilling=new MTN_Afghanistan_Micro_Billing();
        $sResponse = $oMicroBilling->charge($aParam);

        $aJsonDecode = json_decode($sResponse, true);
        log_write("\nInfo :|Consumer|" . date("Y-m-d H:i:s") . "|Micro Billing Response = " . $sResponse, $sLogPath, $sOperator, $sLogFile);
        if (sizeof($aJsonDecode)) {
            $sStatusCode = $aJsonDecode['result']['code'];
            $sResponseMsg = $aJsonDecode['result']['message'];
            $sResponseStatus = $aJsonDecode['result']['status'];
            $sResponseTransId = $aJsonDecode['trans_id'];
            $sChargedRate = $aJsonDecode['amount'];
            $sRenewType = 'renew';
        } else {
            $sStatusCode = 'H200';
            $sResponseMsg = 'Invalid Response';
            $sResponseStatus = 'FAIL';
            $sResponseTransId = '';
            $sChargedRate = $aJsonDecode['amount'];
        }
        log_write("\nInfo :|Consumer|" . date("Y-m-d H:i:s") . '|Final Response = ' . $sStatusCode . '|' . $sResponseStatus . '|' . $sResponseMsg . '|' . $sResponseTransId . '|' . $sClientType . '|' . $iMsisdn . '|' . $sPricePointId . '|' . $sEventId . '|' . $sChargedRate, $sLogPath, $sOperator, $sLogFile);
        if ($sStatusCode == 'H000') {
            log_write("\nSuccess :|Consumer|" . date("Y-m-d H:i:s") . "|" . $sTotalTime . "|" . $sQueueMessagae . "|" . $sResponse . "|" . $sStatusCode . "|" . $sResponseMsg . "|" . $sQueueName, $sLogPath, $sOperator, $sLogFile);
        } else {
            log_write("\nError :|Consumer|" . date("Y-m-d H:i:s") . "|" . $sTotalTime . "|" . $sQueueMessagae . "|" . $sResponse . "|" . $sStatusCode . "|" . $sResponseMsg . "|" . $sQueueName, $sLogPath, $sOperator, $sLogFile);
        }
    }
    unset($sResponse, $iMsisdn, $sEventId, $sPricePointId, $iRate, $iOperatorId, $sMerchantId, $sClientType, $sStatus, $sQueueMessagae, $sStartTime, $aJsonDecode, $sEndTime, $sTotalTime, $sStatusCode, $sResponseMsg, $sResponseStatus, $sResponseTransId, $sNotifyUrlResponse);
}

?>
