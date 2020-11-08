var body = document.body;
var create = (tag, inner='') => {
    let el = document.createElement(tag);
    el.innerHTML = inner;
    return el;
}
var addBr = () => body.append(create('br'));
// zadanie 1
var zad1 = create('div', 'To jest nowy element');
body.append(zad1);

// zadanie 2
var owoce = ['mango', 'jabłko', 'ananas', 'brzoskwinia', 'pomarańcza', 'gruszka'];
var zad2 = create('ul');
owoce.forEach((el) => {
    zad2.append(create('li', el));
});
body.append(zad2);

// zadanie 3
// nie wiem jaki event więc stworze button
var btn = create('button', 'usuń co drugi z listy');
btn.onclick = () => document.querySelectorAll('ul > li:nth-of-type(even)').forEach((li) => li.remove());
body.append(btn);

// zadanie 4
var btn2 = create('button', 'znikne');
btn2.onclick = (evt) => evt.currentTarget.remove();
body.append(btn2);

// zadanie 5
var max = Math.random()*11;
for (let i=0; i<max; i++) {
    let div = create('div', `To jest div numer ${i+1}`);
    body.append(div);
}

// zadanie 6
var div1 = create('div', 'to jest div');
var span1 = create('span', 'to jest span');
var div2 = create('div');
var div3 = create('div', 'to jest div');
var span2 = create('span', 'to jest span');

div2.append(div3);
body.append(div1);
body.append(span1);
body.append(div2);
body.append(span2);

// zadanie 7
var lista1 = create('ul'), lista2 = create('ul');
owoce.forEach((el) => {
    lista1.append(create('li', el));
});
var btn_zad_7 = create('button', 'przerzuć element z listy');
btn_zad_7.onclick = (e) => {
    lista2.append(lista1.querySelector('li:last-child'));
    if (lista1.childElementCount === 0) e.currentTarget.disabled = true;
}

body.append(lista1);
addBr();
body.append(lista2);
addBr();
body.append(btn_zad_7);
addBr();

// zadanie 8
var createField = (id, placeholder='', type='text') => {
    let el = create('input');
    el.placeholder = placeholder;
    el.type = type;
    el.id = id;
    return el;
}
body.append(createField('tag', 'Podaj tag...'));
addBr()
body.append(createField('text', 'Podaj tekst...'));
addBr()
body.append(createField('color', 'Podaj kolor...'));
addBr()
body.append(createField('count', 'Ile razy?', 'number'));
addBr()

var btn = create('button', 'Utwórz');
var getFieldVal = (id) => document.getElementById(id).value; 
btn.onclick = () => {
    let count = getFieldVal('count');
    for (let i=0; i<count; i++) {
        let el = create(getFieldVal('tag'), getFieldVal('text'));
        el.style.color = getFieldVal('color');
        body.append(el);
    }
}
body.append(btn);

// zadanie 9
var zad9_container = create('div');
zad9_container.id = 'ex9';
var zad9_form_count = 0;
var zad9_form = () => {
    let container = create('div');
    container.append(create('h2', `Osoba ${zad9_form_count+1}`));
    container.append(createField(`imie${zad9_form_count}`, 'Podaj imie...'));
    container.append(createField(`nazwisko${zad9_form_count}`, 'Podaj nazwisko...'));
    container.append(createField(`wiek${zad9_form_count}`, 'Wiek...', 'number'));
    container.append(createField(`dzieci${zad9_form_count}`, 'Ilość dzieci...', 'number'));
    zad9_container.append(container);
    zad9_form_count++;
}
zad9_form();
body.append(zad9_container);

var zad9_more = create('button', 'Więcej');
zad9_more.onclick = () => zad9_form();
body.append(zad9_more);
var zad9_create = create('button', 'Utwórz');
zad9_create.onclick = () => {
    zadanie10(); // funkcja z zad10
    let elements = document.querySelectorAll('#ex9 > div');
    Object.keys(elements).forEach((el) => {
        let tr = create('tr');
        let inputs = elements[el].querySelectorAll('input');
        Object.values(inputs).forEach((input) => tr.append(create('td', input.value)));
        let btn = create('button', 'usuń');
        btn.onclick = (e) => e.currentTarget.parentNode.remove();
        tr.append(btn);
        table.append(tr);
    });
}
body.append(zad9_create);

var table = create('table');
body.append(table);
let trHead = create('tr', '<th>Imię</th><th>Nazwisko</th><th>Wiek</th><th>Ilość dzieci</th><th>Usuń</th');
table.append(trHead);

// zadanie 10
function capitalize(str) {
    if (str.length < 1) return str;
    str = str.charAt(0).toUpperCase() + str.slice(1);
    return str;
}
function zadanie10() {
    document.querySelectorAll('#ex9 input').forEach((el) => el.value = capitalize(el.value));
}

// zadanie 11
function zadanie11(str) {
    let regExp = /\d+/g;
    let iloczyn = null;
    while(liczba = regExp.exec(str)) {
        if (iloczyn === null) iloczyn = parseInt(liczba[0]);
        else iloczyn *= parseInt(liczba[0]);
    }
    for (let i=0; i<iloczyn; i++) {
        body.append(create('div', str));
    }
}
zadanie11('jaki2es 1liter23y');

// zadanie 12
function zadanie12(str) {
    let obj = Object.create(null);
    obj.string = str;
    obj.searchAla = () => 
        body.append(create('div', /Ala/.test(obj.string) ? 
            obj.string = obj.string.replaceAll('Ala', 'Ola')
            : 'Slowo Ala nie wystepuje w tekście'));
    return obj;
}
zadanie12('Ala była bardzo zmęczona').searchAla();
zadanie12('Tomek olał zajęcia').searchAla();

// zadanie 13
function zadanie13_a(strings) {
    return strings.map((string) => string.length);
}
function zadanie13_b(liczby) {
    return liczby.reduce((sum, val) => sum += val, 0);
}
function zadanie13_c(liczby) {
    return zadanie13_b(liczby) / liczby.length;
}
let zad13_var = zadanie13_a(['tessst', 'test2', 'długi tekst']);
console.log(zad13_var);
console.log(zadanie13_b(zad13_var));
console.log(zadanie13_c(zad13_var));


// zadanie 14
var zadanie14 = {
    name: '',
    surname: '',
    age: ''
};

function zad14() {
    var orig = Object.assign({}, zadanie14);
    zadanie14.name = 'Jan';
    zadanie14.surname = 'Kowalski';
    zadanie14.age = 21;
    Object.keys(zadanie14).forEach((key) => {
        zadanie14[key + '_length'] = zadanie14[key].length;
        if (zadanie14[key + '_length'] > 5) {
            let btn = create('button', 'resetuj zadanie 14');
            btn.onclick = () => zadanie14 = orig;
            body.append(btn);
        }
    });
}
zad14();
