// zadanie 1
console.log(document.getElementById('buz').parentElement);
console.log(document.getElementById('baz').previousSibling.previousSibling);
console.log(document.getElementById('foo').childNodes);
console.log(document.getElementById('foo').parentElement);
console.log(document.getElementById('foo').firstChild);
var foo = document.getElementById('foo');
console.log(foo.childNodes[parseInt(foo.childElementCount/2)]);

// zadanie 2
function zadanie2(ex2) {
    ex2.onclick = function() {
        console.log(this.querySelector('div > div > div > div > div > div > div').textContent)
    }
}
zadanie2(document.getElementById('ex2'));

// zadanie 3
function zadanie3() {
    var ex3 = document.getElementById('ex3');
    ex3.querySelectorAll('button').forEach(button => {
        button.onclick = () => {
            let span = button.parentElement.querySelector('button ~ span');
            span.style.display = span.style.display === 'inline-block' ? 'none' : 'inline-block';
        }
    })
}
zadanie3();

// zadanie 4
function zadanie4() {
    var ex3 = document.getElementById('ex3');
    ex3.querySelectorAll('button').forEach(button => {
        let parentFn = button.onclick;
        button.onclick = () => {
            parentFn();
            let parent = button.parentElement;
            parent.style.backgroundColor = "#" + Math.floor(Math.random()*16777215).toString(16);
        }
    })
}
zadanie4();

// zadanie 5
// TODO: niejasne polecenie
function zadanie5() {
    var ex5 = document.getElementById('ex5');
    ex5.querySelectorAll('div').forEach((div) => {
        div.onmouseover = () => {
            var elements = ex5.querySelectorAll('li:first-of-type');
            // var elements = ex5.querySelectorAll('li:last-of-type');
            // var elements = ex5.querySelectorAll('li:nth-of-type(2n)');
            // var elements = ex5.querySelectorAll('li');
            // var elements = ex5.querySelectorAll('ul');
            elements.forEach(el => el.style.color = div.style.backgroundColor);
        };
    });
}
zadanie5();


// zadanie 6
var ex6 = document.getElementById('ex6');
var zmienna1 = ex6.querySelector(':first-child :first-child :first-child');
console.log(zmienna1);
var zmienna2 = ex6.querySelector(':first-child :first-child'); // uproszczone
console.log(zmienna2);
var zmienna3 = ex6.parentElement.querySelector(':nth-child(2) :first-child :first-child :first-child');
console.log(zmienna3);