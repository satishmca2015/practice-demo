//====================EVENT LOOP Example=====================

function fun2() {
    setTimeout(() => {
        console.log("This is fun2 with timeout");
    }, 3000)
}



function fun1(params) {
    console.log("fun1 done");
    fun2();
    console.log("fun1 after fun2");
}

fun1();