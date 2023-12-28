<?php

$data = [10,20,10,30,20,30,40,50];

$temp = [];

for($i=0;$i<count($data);$i++)
{
    // echo $data[$i]."\n";
    if(isset($temp[$data[$i]])){
        $temp[$data[$i]] =  $temp[$data[$i]] + 1;
        echo $data[$i]."\n";
    }
    else{
        $temp[$data[$i]] = 1;
    }
}

print_r($temp);


