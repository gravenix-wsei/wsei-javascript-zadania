// zadanie 1
var arr = [1,2,3,4,5,6];
console.log(arr);

// zadanie 2
var arr2 = [1, 2, 3, "4", "5", null, 23.4];
// pierwszy i ostatni
console.log(arr2[0] + ' ' + arr[1]);
// ostatni
console.log(arr2[arr2.length-1]);
// wszystkie
console.log(arr2);
// co drugi
console.log(arr2.reduce(function(prev, cur, index){
    if (index % 2 === 0) {
        prev.push(cur);
    }
    return prev;
}, []));
// wszystkie stringi
arr2.forEach(element => {
    if (typeof element === 'string') {
        console.log(element);
    }
});
// wszystkie numery
arr2.forEach(element => {
    if (typeof element === 'number') {
        console.log(element);
    }
});

// zadanie 3
// arr jest tablicą z samymi numerami
// 1
console.log(arr.reduce((val, el) => val + el, 0));
// 2
console.log(arr.reduce((val, el) => val - el, 0));
// 3
console.log(arr.reduce((val, el) => val+el, 0) / arr.length);
// 4
console.log(arr.filter(val => val%2===0));
// 5
console.log(arr.filter(val => val%2===1));
// 6
console.log(arr.reduce((max, el) => max > el ? max : el));
// 7
console.log(arr.reduce((min, el) => min < el ? min : el));
// 8
console.log(arr.reverse());

// zadanie 4
function sumArray(array) {
    return array.reduce((sum, el) => sum += el, 0);
}
console.log(sumArray([2, 3, 1, 5]));

// zadanie 5
function zadanie5(array) {
    let avg = sumArray(array) / array.length;
    array.map(val => console.log(val*avg));
}
zadanie5([1,2,3]);

// zadanie 6
function zadanie6(array) {
    array = array.filter(val => val%2===0);
    return sumArray(array) / array.length;
}
console.log(zadanie6([2, 4, 5, 6, 7]));

// zadanie 7
function zadanie7(array) {
    return array.sort();
}
console.log(zadanie7([3,2,1]));

// zadanie 8 (nie wiem czy dobrze zrozumiałem "tablica, która będzie sumą indeksów")
function zadanie8(array, array2) {
    return Array.from(array.keys()).concat(Array.from(array2.keys()));
}
console.log(zadanie8([1,2,3], [2,3,4]));

// zadanie 9
function zadanie9(array, elToDel) {
    return array.filter(val => val!==elToDel);
}
console.log(zadanie9([1, 4, 5, "12", 21.3], 4));

// zadanie 10
function zadanie10(array) {
    return array.map(val => val*-1);
}
console.log(zadanie10([1, -2, 4, -3]));