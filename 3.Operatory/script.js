// zadanie 1
// nie w konsoli, ale efekt będzie ten sam ;)
var a = false, b = true;
console.log(b === a); // false

// zadanie 2
var liczba = 6, liczba2 = 32, moduloResult = 0;
moduloResult = liczba2 % liczba;
console.log(moduloResult);

// zadanie 3
var str = "jakis tekst", str2 = "hello world", stringResult = "";
stringResult = str + str2;
console.log(stringResult);

// zadanie 4
var someNumber = 425;
var someString = "425";

console.log(someNumber == someString); // true
console.log(someString === someNumber); // false
/* Róznica
 * operator '==' porównuje czy zmienne są równe, nie zwracając uwagi na typ
 * operator '===' porównuje tez typ zmiennych 
 */

// zadanie 5
var counter = 30;
console.log(counter);
console.log(++counter);
console.log(--counter);

// zadanie 6
var x=12, y=34, result=null;
result = x > y;
console.log(result);