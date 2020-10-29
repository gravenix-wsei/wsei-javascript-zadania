// zadanie 1
var car = {
    kola: 4,
    drzwi: 2,
    kolor: 'czerwony',
    nazwa: 'Ford Mustang',
};

console.log(car);
// wypisywanie konkretnej wartości
console.log(car.kolor);

// zadanie 2
console.log(car.nazwa);
car.zmienNazwe = (nowaNazwa) => car.nazwa = nowaNazwa;
car.zmienNazwe('Fiat Multipla');
console.log(car.nazwa);

// zadanie 3
function Sumator(array) {
    this.tablica = array;
    this.sumuj = () => 
        this.sum = array.reduce((cur, val) => cur+val, 0);
    this.sum = null;
}
var test = new Sumator([1,2,3,4,5]);
test.sumuj();
console.log(test.sum);

// zadanie 4
var car = {
    name: 'BMW',
    age: '12',
    gears: '5',
    transmission: 'manual',
    leds: false,
    sunroof: false,
}
Object.keys(car).forEach(
    (prop) => console.log(prop + ': ' + car[prop])
);

// zadanie 5
console.log("ZADANIE 5");
car.fotele = {
    skorzane: false,
    podgrzewane: false,
    pakiet: 'brak',
}

Object.keys(car.fotele).forEach(
    (prop) => console.log('car.fotele.' + prop + ': ' + car.fotele[prop])
);

// zadanie 6
car.maxSpeed = 177;
// jesli chodzilo o atrybut `prototype` dla obiektow to moge poprawic
car.hello = () => console.log('Hello');
car.hello(); 
