<?php 

function factorial($n)  
{  

    echo $n."\n";
  if($n <= 1) {  
    return 1;  
  }  
  else{  
    return $n * factorial($n - 1);  
  }  
}  

/* Define a variable and assign a value to it to find the factorial.*/
$n = 5;  
echo "Factorial of $n is " .factorial($n); /*Call the Function */ 



?>