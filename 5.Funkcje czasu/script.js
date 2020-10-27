// zadanie 1
var times = 0, counterId;
function intervalFunc() {
    console.log("Cześć po raz " + ++times);
    if (times >= 15) {
        clearInterval(counterId);
    }
}

counterId = setInterval(intervalFunc, 3000);

// zadanie 2
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

setTimeout(function() {
    console.log(arr.join(', '));
    var arrayInterval = setInterval(function() {
        if (arr.length == 0) {
            clearInterval(arrayInterval);
            return;
        }
        console.log(arr.shift());
    }, 3000);
}, 2000);