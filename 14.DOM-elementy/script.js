// zadanie 1
function zadanie1(list) {
    if (!Array.isArray(list)) {
        list = Array.from(list);
    }
    return list.map((el) => el.tagName);
}
console.log(zadanie1(document.querySelectorAll('.more-divs')));

// zadanie 2
function zadanie2(shortList) {
    console.log(shortList.innerHTML);
    console.log(shortList.outerHTML);
    console.log(shortList.className);
    console.log(shortList.classList);
    console.log(shortList.dataset);
}
zadanie2(document.querySelector('.short-list'));

// zadanie 3
function zadanie3(liczby) {
    return Object.values(liczby).reduce((sum, val) =>
        sum + (isNaN(val) ? 0 : parseInt(val)), 0);
}
console.log(zadanie3(document.getElementById('datasetCheck').dataset));

// zadanie 4
document.getElementById('spanText').innerHTML = 'dowolny';

// zadanie 5
document.getElementById('spanText').className = 'dowolną';

// zadanie 6
function zadanie6(listaKlas) {
    console.log(listaKlas);
    listaKlas.forEach(klasa => console.log(klasa));
    console.log(Object.values(listaKlas).join(' + '));
}
zadanie6(document.getElementById('classes').classList);

// zadanie 7
function zadanie7(list) {
    console.log(list);
    list.forEach((el) => !el.dataset.text && (el.dataset.text = 'text'));
}
zadanie7(longList.querySelectorAll('#longList li'));

// zadanie 8
function zadanie8(className) {
    let obj = {newClass: className};
    zadanie8_1(obj);
}

function zadanie8_1(obj) {
    let zmienna = obj.newClass;
    document.getElementById('myDiv').className = zmienna;
}

zadanie8('string_z_parametru');

// zadanie 9
function zadanie9(rand) {
    document.getElementById('numbers').className = rand%2===0 ? 'even' : 'odd';
}
zadanie9(parseInt(Math.random()*11));

// zadanie 10
function zadanie10(element) {
    return Object.values(element.querySelectorAll('li')).map((li) => li.innerHTML);
}
console.log(zadanie10(document.getElementById('longList')));

// zadanie 11
function zadanie11(lis) {
    Object.values(lis).forEach((li) => li.innerHTML = parseInt(Math.random()*11));
}
zadanie11(document.getElementById('longList').children);