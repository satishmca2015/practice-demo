<?php

$a = 'satish';
$b = 'amol';


// list($a,$b) = array($b,$a);

// echo "a=".$a." b= ".$b;



//--------------------------------------


$x = 10;
$y = 5;
 
    // Code to swap 'x' and 'y'
$x = $x + $y; // x now becomes 15
$y = $x - $y; // y becomes 10
$x = $x - $y; // x becomes 5

echo $x;
echo $y;

//-----------------------------------------------------




//using Strlen 
$a = $a.$b;
$b = substr($a,0,(strlen($a) - strlen($b)));
$a = substr($a,strlen($b));

echo $a;
echo $b;




