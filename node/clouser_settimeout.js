function fun() {
    for (let i = 1; i <= 5; i++) {
        /* function inner(i) {
            setTimeout(function() {
                console.log(i);
            }, i * 1000);
        }

        inner(i); */
        // console.log(i);
        setTimeout(function() {
            console.log(i);
        }, i * 1000);

    }
}



fun();