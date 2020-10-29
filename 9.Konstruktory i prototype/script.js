// zadanie 1

function Person(imie, nazwisko, wiek, kraj, miasto, jezyk) {
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.wiek = wiek;
    this.kraj = kraj;
    this.miasto = miasto;
    this.jezyk = jezyk;
    this.zmienWiek = (nowyWiek) => this.wiek = nowyWiek;
    this.zmienMiasto = (noweMiasto) => this.miasto = noweMiasto;
}

var osoba1 = new Person(
    'Jan',
    'Kowalski',
    19,
    'Polska',
    'Kraków',
    'Polski'
), osoba2 = new Person(
    'Kasia',
    'Petrovic',
    22,
    'Rosja',
    'Petersburg',
    'Rosyjski'
), osoba3 = new Person(
    'Patryk',
    'Nowak',
    23,
    'Niemcy',
    'Warszawa',
    'Polski,Niemiecki'
), osoba4 = new Person(
    'Wojtek',
    'Masulik',
    20,
    'Polska',
    'Limanowa',
    'Polski'
), osoba5 = new Person(
    'Xian',
    'Yo',
    25,
    'Chiny',
    'Hong Kong',
    'Chiński'
);

// wypisanie osoby
console.log(osoba3);
// wypisanie parametru osoby
console.log(osoba5.nazwisko + ' ' + osoba5.imie + ' z ' + osoba5.miasto);
// zmiania miasta
osoba5.zmienMiasto('Pekin');
console.log(osoba5.miasto);
// zmiana wieku
console.log(osoba3.wiek);
osoba3.zmienWiek(osoba3.wiek+1);
console.log(osoba3.wiek);
console.log(osoba2.wiek); // tutaj wiek sie nie zmieni

// zadanie 2
function Kalkulator() {
    this.hisoria = [];
    this.dodaj = (a, b) => {
        this.hisoria.push([a, b, '+', a+b]);
        return a+b;
    };
    this.odejmij = (a, b) => {
        this.hisoria.push([a, b, '-', a-b]);
        return a-b;
    };
    this.pomnoz = (a, b) => {
        this.hisoria.push([a, b, '*', a*b]);
        return a*b;
    };
    this.podziel = (a, b) => {
        this.hisoria.push([a, b, '/', a/b]);
        return a/b;
    }
    this.wyczyscPamiec = () => this.hisoria = [];
    this.wypiszPamiec = () => this.hisoria.forEach((val) => 
        console.log(`${val[0]} ${val[2]} ${val[1]} = ${val[3]}`)
    );
}
var calc = new Kalkulator(), calc2 = new Kalkulator();
calc.dodaj(2, 2);
calc.pomnoz(9, 12);
calc.odejmij(3.2, 12);
calc2.podziel(12, 3);

calc.wypiszPamiec();
calc2.wypiszPamiec();
// wyczysc pamiec w jednym
calc.wyczyscPamiec();
calc.wypiszPamiec();
calc2.wypiszPamiec(); // tutaj dane zostana

// zadanie 3
console.log('GRA');
function Gra() {
    this.losuj = () => Gra.prototype.liczba = parseInt(Math.random()*11 + 1);
    this.wynik = () => Gra.prototype.liczba && console.log(Gra.prototype.liczba);
    this.sprawdzWygrana = () => 
        Gra.prototype.liczba > 5 ? this.wygrana() : this.wynik();
    this.losujCoSekunde = () => 
        Gra.prototype.randomCounterId = setInterval(this.losuj, 1000);
    this.sprawdzajWygrana = () =>
        Gra.prototype.winCounterId = setInterval(this.sprawdzWygrana, 1000);
    this.wygrana = () => {
        clearInterval(Gra.prototype.winCounterId);
        clearInterval(Gra.prototype.randomCounterId);
        console.log('Wygrana');
    };
}

var gra = new Gra(),
    licznik = new Gra();

gra.sprawdzajWygrana();
gra.losujCoSekunde();