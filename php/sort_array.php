<?php

function sortArray($numArray)
{
    $length = count($numArray);
    for($i=0; $i<$length; $i++ ){
        for($j=0; $j<$length-$i-1;$j++){
            if($numArray[$j] > $numArray[$j+1]){
                $temp = $numArray[$j];
                $numArray[$j] = $numArray[$j+1];
                $numArray[$j+1] =$temp;
            }
        }
    }
    return $numArray;
}

$number = [40,20,10];
$result = sortArray($number);
print_r($result);



?>