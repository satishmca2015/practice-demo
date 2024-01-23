<?php


$i;$j;$temp;

$data = [10,35,13,15,40,20];


for($i=0; $i < count($data); $i++){
    
    for($j=$i+1; $j<count($data); $j++)
    {
        
        if($data[$j] < $data[$i])
        {
            $temp       = $data[$i];
            $data[$i]   = $data[$j];
            $data[$j]   = $temp;
        }
    }
    
}

print_r($data);

