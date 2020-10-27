// zadanie 1
var a = 12, b = 34;
if (a > b) {
    console.log("a > b");
} else {
    console.log("a <= b");
}

// zadanie 2
var c = 542, d = 132, e = 123;
if (c > d && c > e) {
    console.log("c jest najwieksze");
} else if (d > c && d > e) {
    console.log("d jest najwieksze");
} else {
    console.log("e jest najwieksze");
}

// zadanie 3
for (let i=0; i<10; i++) {
    console.log("Lubię JavaScript");
}

// zadanie 4
var result = 0;
for (let i=1; i<=10; i++) {
    result += i;
}
console.log(result); // jesli potrzeba sprawdzic wynik

// zadanie 5
var n = 5;
for (let i=0; i<n; i++) {
    console.log(i + ' - ' + (i%2 === 0 ? 'parzysta' : 'nieparzysta'));
}

// zadanie 6
for (let i=0; i<10; i++) {
    for (let j=0; j<10; j++) {
        console.log("i=" + i + ", j=" + j);
    }
}

// zadanie 7

for (let i=0; i<101; i++) {
    switch (i%15) {
        case 0:
            console.log('FizzBuzz');
            break;
        case 3:
        case 6:
        case 9:
        case 12:
            console.log('Fizz');
            break;
        case 5:
        case 10:
            console.log('Buzz');
            break;
        default:
            console.log(i);
    }
}

// zadanie 8
// a)
for (let i=0; i<5; i++) {
    console.log('*'.repeat(i+1));
}
// b)
for (let i=0; i<5; i++) {
    console.log(' '.repeat(5-i) + '* '.repeat(i+1));
}
// c)
for (let i=0; i<5; i++) {
    console.log(' '.repeat(5-i) + '*'.repeat((i+1)*2-1));
}
// d)
for (let i=0; i<5; i++) {
    let str = '*'.repeat(i+1);
    for (let j=i+1; j<5; j++) {
        str += j;
    }
    console.log(str);
}
console.log('-----');
for (let i=4; i>=0; i--) {
    let str = '*'.repeat(i+1);
    for (let j=i+1; j<5; j++) {
        str += j;
    }
    console.log(str);
}
// e)
// jestem leniwy, wiec to piramidka z b) z linia strzalki ;)
for (let i=0; i<5; i++) {
    console.log(' '.repeat(5-i) + '* '.repeat(i+1));
}
for (let i=0; i<3; i++) {
    console.log('    *');
}