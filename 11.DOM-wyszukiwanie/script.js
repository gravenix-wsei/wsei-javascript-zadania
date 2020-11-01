// zadanie 1
var list = document.querySelectorAll('.list');
console.log(list);

// zadanie 2
function getTag(tag) {
    return document.getElementsByTagName(tag);
}
var li = getTag('div');
console.log(li);

// zadanie 3
var idList = document.getElementById('list');
console.log(idList);

// zadanie 4
function wyswietlWKonsoli(param) {
    param.forEach(element => console.log(element));
}
wyswietlWKonsoli(document.querySelectorAll('li'));
wyswietlWKonsoli(document.querySelectorAll('ul'));
wyswietlWKonsoli(document.querySelectorAll('span'));
wyswietlWKonsoli(document.querySelectorAll('div.list > span'));
wyswietlWKonsoli(document.querySelectorAll('div#spans > span'));