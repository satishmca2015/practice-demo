<?php
require_once '/usr/local/apache/htdocs/v2/common_function/common_functions.php';
require_once '/usr/local/apache/htdocs/v2/vendor/autoload.php';
require_once '/usr/local/apache/htdocs/v2/config/rabbitmq_config.php';
require_once '/usr/local/apache/htdocs/v2/common_function/update_userbase.php';

use PhpAmqpLib\Connection\AMQPStreamConnection;
use PhpAmqpLib\Message\AMQPMessage;

date_default_timezone_set('Asia/Calcutta');

$sTableName = 'mtn_afghanistan_subscription';
$sQueueName = 'MTN_Afghan_Renewal';
$sDatabase = 'sngmpg';

$rConnection = new AMQPStreamConnection(RQUEUE_130_HOST, RQUEUE_130_PORT, RQUEUE_130_USER_RENEW, RQUEUE_130_PASSWORD_RENEW, RQUEUE_130_VHOST_RENEW);
$rChannel = $rConnection->channel();
$rChannel->queue_declare($sQueueName, false, true, false, false);
$dbObj = new database();

set_time_limit(0);

$aOperations = getopt("t:");

$iStatus = 2;
$sQuery = '';
$iSuccessCount = 0;
$iErrorCount = 0;

$sLogPath = '/usr/local/apache/logs/billing/';
$sOperator = 'mtn_afghanistan';
$sLogFile = "mtn_afghanistan_renewal_" . date("Ymd") . ".log";
$sMysqlFileName = "mtn_afghanistan_renew_db_" . date("YmdHis") . ".txt";

log_write("\nInfo :|MTN Afghan Renewal Start : " . date('Y-m-d H:i:s'), $sLogPath, $sOperator, $sLogFile);
$sPurgeCount = $rChannel->queue_purge($sQueueName);
sleep(20);

$sAlertMessage = "RabbitMQ Alert\n" . $sQueueName . "\nPurge = " . $sPurgeCount . "\n";
log_write("\nInfo :|Purge Count : " . $sPurgeCount, $sLogPath, $sOperator, $sLogFile);

if ($sPurgeCount) {
    $sResponse = sendPurgeMail($sOperator, RQUEUE_138_HOST, $sQueueName, $sPurgeCount, $sLogPath, $sLogFile);
    log_write("\nInfo :|Mail Response : " . $sResponse, $sLogPath, $sOperator, $sLogFile);
}

$sMysqlDumpFile = "/tmp/" . $sMysqlFileName;
$sDestinationMysqlFile = $sLogPath . date("Y") . "/" . date("m") . "/" . $sOperator . "/";
log_write("\nInfo :|Status = " . $iStatus . '; Input Parameters = ' . json_encode($aOperations) . "|" . $sQueueName, $sLogPath, $sOperator, $sLogFile);

if (sizeof($aOperations) && $aOperations['t'] && strtolower($aOperations['t']) == 'active') {
    
    $sQuery = "SELECT msisdn, event_id , pricepoint_id, rate, operator_id, merchant_id, client_type, status, type_name, id INTO OUTFILE '$sMysqlDumpFile' FIELDS TERMINATED BY '|'  LINES TERMINATED BY '\n'  FROM " . $sDatabase . '.' . $sTableName . ' where status IN (2,3,5) and expiry_date BETWEEN DATE_SUB(NOW(), INTERVAL 45 DAY) AND NOW() AND event_id in ("9053130","9053129") ORDER BY status ASC ,charge_count desc'; 

} else if (sizeof($aOperations) && $aOperations['t'] && strtolower($aOperations['t']) == 'retry') {

}

log_write("\nInfo :|Query = " . $sQuery . "|" . $sQueueName, $sLogPath, $sOperator, $sLogFile);
#exit;
if ($sQuery) {
    $iResourceId = mysqli_connect(HOSTNAME, USERNAME, PASSWORD) or die(mysqli_connect_error());

    if ($iResourceId) {
        $rSelectCount = mysqli_query($iResourceId,$sQuery);
        if (mysqli_connect_errno()) {
            log_write("\nError :|Mysql Error = " . mysqli_connect_errno() . '; Mysql Error Text = ' . mysqli_error($iResourceId) . "|" . $sQueueName, $sLogPath, $sOperator, $sLogFile);
            $sAlertMessage .= "Mysql Error = " . mysqli_error($iResourceId);
        } else {
            log_write("\n\nInfo :|sshpass -pnoc123 scp -o StrictHostKeyChecking=no noc@192.168.10.187:" . $sMysqlDumpFile . ' ' . $sDestinationMysqlFile . "|" . $sQueueName, $sLogPath, $sOperator, $sLogFile);
            $sFile = shell_exec("/usr/bin/sshpass -pnoc123 /usr/bin/scp -o StrictHostKeyChecking=no noc@192.168.10.187:" . $sMysqlDumpFile . ' ' . $sDestinationMysqlFile);
            $sFileToOpen = $sDestinationMysqlFile . $sMysqlFileName;

            if (is_file($sFileToOpen)) {

                $rFileResource = fopen($sFileToOpen, "r");
                $sStartTimeRabbitMQ = microtime_float();
                $iSuccessCount = 0;
                $iErrorCount = 0;
                while(!feof($rFileResource)) {
                    $sMessage = fgets($rFileResource);
                    if(strlen(trim($sMessage)) > 0) {
                        if (publishMessage($sQueueName, trim($sMessage), $rChannel)) {
                            $iSuccessCount++;
                        } else {
                            $iErrorCount++;
                        }
                    }
                }


                $sEndTimeRabbitMQ = microtime_float();

                $sTotalTimeRabbitMQ = $sEndTimeRabbitMQ - $sStartTimeRabbitMQ;
                $sResultString = $iSuccessCount . "|" . $iErrorCount . "|" . $sTotalTimeRabbitMQ . "\n";
                $sFileInfoStr = "\nError :|File Uploaded Resutl = " . $sResultString;
                log_write($sFileInfoStr, $sLogPath, $sOperator, $sLogFile);
                $sAlertMessage .= "Success = " . $iSuccessCount . "\nError = " . $iErrorCount;
            } else {
                $sAlertMessage .= 'Mysql Dump File Not Created File (' . $sFileToOpen . ')';
                log_write("\nError :|File (" . $sFileToOpen . ") Not Created" . "|" . $sQueueName, $sLogPath, $sOperator, $sLogFile);
            }
        }
        mysqli_close($iResourceId);
    } else {
        log_write("\nError :|Mysql Unable Connect" . "|" . $sQueueName, $sLogPath, $sOperator, $sLogFile);
        $sAlertMessage .= 'Mysql Unable To Connect';
    }
} else {
    log_write("\nInfo :|Query Not Found" . "|" . $sQueueName, $sLogPath, $sOperator, $sLogFile);
    $sAlertMessage .= 'Query Not Found';
}
if ($sPurgeCount || $iErrorCount) {
    sendAlert($sAlertMessage);
}
//For Saving Renewal Cron Log
$cronLogParameters = array();
$cronLogParameters['operator_name'] = $sOperator;
$cronLogParameters['queue_name'] = $sQueueName;
$cronLogParameters['operation_type'] = $aOperations['t'];
$Result = $dbObj->insertRenewalCronLog($cronLogParameters);
log_write("\n" . date("Y-m-d H:i:s") . "|Renewal :| insertRenewalCronLog = " . $Result, $sLogPath, $sOperator, $sLogFile);
$dbObj->closeConnection();
exit;


function publishMessage($sQueueName, $sQueueMessage, $rChannel) {
    global $sLogPath,$sOperator,$sLogFile;
    $sStartTime = microtime_float();
    try {
        $sMessage = new AMQPMessage($sQueueMessage, array('delivery_mode' => 2)); #Make Messages Persistance
        $rChannel->basic_publish($sMessage, '', $sQueueName);
        $sEndTime = microtime_float();
        $sTotalTime = $sEndTime - $sStartTime;
        log_write("\nSuccess :|Producer|" . date("Y-m-d H:i:s") . "|" . $sTotalTime . "|" . $sQueueMessage . "|" . $sQueueName . "\n",$sLogPath,$sOperator,$sLogFile );
        return true;
    } catch (Exception $e) {
        $sEndTime = microtime_float();
        $sTotalTime = $sEndTime - $sStartTime;
        log_write("\nError :|Producer|" . date("Y-m-d H:i:s") . "|" . $sTotalTime . "|" . $sQueueMessage . "|" . $sQueueName . "|" . $e->getMessage() . "\n",$sLogPath,$sOperator,$sLogFile );
        return false;
    }
}

function microtime_float() {
    list($usec, $sec) = explode(" ", microtime());
    return ((float) $usec + (float) $sec);
}


?>