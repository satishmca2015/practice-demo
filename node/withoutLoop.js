function oneToHundred(num) {

    if(num < 1){
        return false;
    }
    console.log(num);
    oneToHundred(num-1);
}

oneToHundred(100);