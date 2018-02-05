var display = document.getElementById('display');

    function addToScreen(x) {

        display.value +=x;

        if(x==='C') {
            display.value = '';
        }
    }

    function result() {
        x = display.value;
        x = eval(x);
        display.value = x;
    }

    function power() {
        x = display.value;
        x = eval(x*x);
        display.value = x;
    }

    function backspace() {
        var num = display.value,
            len = num.length-1,
            newNum = num.substring(0,len);
            display.value = newNum;
    }

console.log(display);
