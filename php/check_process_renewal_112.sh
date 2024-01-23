#!/bin/bash

check_process(){
	status=`ps -efww | grep "$1" | grep -v -E  "grep|vim" | wc -l`
	no_of_process=$(($2 - $status))
	if [ $no_of_process -gt 0 ]; then
	 	for i in `seq 1 $no_of_process`
		do
		command=`nohup php -q $1 > /dev/null &`
		echo "[`date`] : $1 : Process was not running. Restarted process. Loop Id " $i 
		done
	else
		if [ $no_of_process -lt 0 ]; then
        	no_of_process_to_kill=$((-1 * $no_of_process))
	        command=`ps aux | grep "$1" | grep -v grep | awk '{print $2}' |tail -n$no_of_process_to_kill`
	        kill_command=`kill -9 $command`
	        echo "[`date`] : $1 : of $no_of_process_to_kill  Processes are killed"
        	fi
	fi
	if [ $no_of_process -eq 0 ]; then
        	echo "[`date`] : $1 : Process is proper"

	fi
	}

#Mobilink Pakistan
#check_process "/usr/local/apache/htdocs/v2/cron/mobilink_pakistan/mobilink_pakistan_renewal_process.php" "75"

