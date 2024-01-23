<?php 


//Swap two string without using third variable

/* $x = 'satish';
$y = 'amol';

$x = $x.$y;

$y = substr($x,0,strlen($x)-strlen($y));
$x = substr($x,strlen($y));

echo $x."\n";
echo $y; */

// ----------------------------------------------------



$data = 'satish';

for($i=strlen($data); $i>=0; $i--)
{
    echo $data[$i];
}






?>