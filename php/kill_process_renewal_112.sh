
kill_process() {
    process_name=$1
    status=`ps -efww | grep "$process_name" | grep -v -E  "grep|vim" | wc -l`
    echo "Process Name = $process_name and no of process = $stataus"
    if [ $status -gt 0 ]; then
        command=`ps aux | grep "$process_name" | grep -v grep | awk '{print $2}'`
        kill_command=`kill -9 $command`
        #echo "Process Id $kill_command of $process_name killed successfully"
        #for pid in $(ps -ef | awk '/'$process_name'/ {print $2}');
        #do
        #        kill -9 $pid;
        #        echo "Process Id ($pid) of $process_name killed successfully"
        #done
    else
        echo "Process Was Not Running " $process_name
    fi
}

#Mobilink Pakistan
kill_process "/usr/local/apache/htdocs/v2/cron/mobilink_pakistan/mobilink_pakistan_renewal_process.php"
