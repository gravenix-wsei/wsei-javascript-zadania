// zadanie 1
function zadanie1() {
    console.log("Udało się");
}
zadanie1();

// zadanie 2
function zadanie2(param) {
    console.log(param);
}
zadanie2("Hello World1");

// zadanie 3
function zadanie3(array) {
    return array;
}
console.log(zadanie3([1, 2, 3]));

// zadanie 4
/**
 * @param {string} str 
 */
function zadanie4(str) {
    var times = 0;
    var counterId = setInterval(function(){
        console.log(str);
        if (times++ >= 4) {
            clearInterval(counterId);
            console.log("Koniec");
        }
    }, 3000);
}
zadanie4('testowy string');