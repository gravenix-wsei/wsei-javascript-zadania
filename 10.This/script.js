// zadanie 1
function Person(imie, nazwisko, wiek, kraj, miasto) {
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.wiek = wiek;
    this.kraj = kraj;
    this.miasto = miasto;
    this.wypisz = () => {
        console.log(`${this.imie} ${this.nazwisko}, lat ${this.wiek}, z ${this.miasto} (${this.kraj})`);
    }
    this.zwiekszWiek = () => this.wiek++;
}
var person = new Person("Jan", "Kowalski", 20, "Polska", "Kraków"),
    person2 = new Person("Khristina", "Blovic", 22, "Rosja", "Moskwa");

person.wypisz();
person2.zwiekszWiek();
person.wypisz();
person2.wypisz();
person.zwiekszWiek();
person2.zwiekszWiek();
person.wypisz();
person2.wypisz();

// zadanie 2
Person.prototype.ulubioneDania = [];
Person.prototype.dodajUlubioneDanie = function(danie) {this.ulubioneDania.push(danie)};
Person.prototype.wypiszUlubioneDania = function() {console.log(this.ulubioneDania.join(', '))};
var person3 = new Person("Roberto", "Mogile", 35, "Włochy", "Rzym");
person3.dodajUlubioneDanie("schabowy");
person3.dodajUlubioneDanie("kebab");
person3.wypiszUlubioneDania();

// zadanie 3
function Kalkulator() {
    this.a;
    this.b;
    this.setA = (a) => this.a = a;
    this.setB = (b) => this.b = b;
    this.dodaj = () => this.a + this.b;
    this.odejmij = () => this.a - this.b;
    this.pomnoz = () => this.a * this.b;
    this.podziel = () => {
        if (this.b === 0) return "Division by 0!";
        return this.a / this.b;
    }
}
var calc = new Kalkulator();
calc.setA(123);
calc.setB(321);
console.log(calc.dodaj());
console.log(calc.odejmij());
console.log(calc.pomnoz());
console.log(calc.podziel());
calc.setB(0);
console.log(calc.podziel());

// zadanie 4
function SymulatorWchodzeniaPoDrabinie(max) {
    this.obecnySzczebel = 0;
    this.maxSzczebel = max;
    this.wGore = () => this.obecnySzczebel < this.maxSzczebel && this.obecnySzczebel++;
    this.wDol = () => this.obecnySzczebel > 0 && this.obecnySzczebel--;
    this.spadnij = () => this.obecnySzczebel = 0;
}

var drabina = new SymulatorWchodzeniaPoDrabinie(10);
drabina.wGore();
drabina.wGore();
drabina.wGore();
drabina.wGore();
drabina.wGore();
drabina.wGore();
drabina.wDol();
drabina.wDol();
console.log(`Patrz! To juz ${drabina.obecnySzczebel} szczebel!`);
drabina.spadnij();
console.log(`...a teraz ${drabina.obecnySzczebel} :/`);