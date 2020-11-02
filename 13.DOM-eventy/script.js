// zadanie 1
// var test_event = document.getElementById('test-event');
// test_event.onclick = (evt) => console.log(evt);
// window.onmousemove = (evt) => console.log(evt);
// test_event.onmouseenter = (evt) => console.log(evt);
// window.onkeydown = (evt) => console.log(evt);
// window.onscroll = (evt) => console.log(evt);
// document.getElementById('input-test').onchange = (evt) => console.log(evt);

// zadanie 2
document.getElementById('ex2').onclick = (evt) => {
    let span = evt.currentTarget.parentNode.querySelector('span');
    span.innerHTML = evt.currentTarget.getAttribute('data-text');
}

// zadanie 3
var kwadrat = document.getElementById('ex3');
kwadrat.onmouseenter = (e) => e.currentTarget.style.backgroundColor = 'blue';
kwadrat.onmouseleave = (e) => e.currentTarget.style.backgroundColor = 'red';

// zadanie 4
document.getElementById('input-test').onkeyup = (e) => {
    let span = document.getElementById('ex3-err');
    if (/[0-9]/.test(e.currentTarget.value)) {
        span.textContent = 'Nie mozna uzywać cyfr';
    } else {
        span.textContent = '';
    }
}

// zadanie 5
document.getElementById('ex5-button').onclick = (e) => {
    let ex5 = document.getElementById('ex5'),
        val = parseInt(ex5.innerHTML) + 1;
    ex5.innerHTML = val;
    if (val > 9) {
        document.getElementById('ex5-button').onclick = null;
    }
}

// zadanie 6
window.onscroll = (e) => document.body.style.backgroundColor = e.currentTarget.scrollY > 200 ? 'red' : 'white';

// zadanie 7
function Kalkulator(root) {
    this.root = root;
    this.input = root.querySelector('input');
    this.input.value = 0;
    this.result = null;
    this.lastOperator = '+';
    // get numbers
    root.querySelector('div:first-of-type').childNodes.forEach(el => {
        el.addEventListener('click', (e) => {
            if (this.input.value == 0) this.input.value = '';
            this.input.value += e.currentTarget.textContent;
        });
    });
    // handle operations
    root.querySelector('div:last-of-type').childNodes.forEach(el => {
        el.addEventListener('click', (e) => {
            if (this.result === null) {
                this.result = parseInt(this.input.value);
                this.input.value = 0;
            }
            let operator = e.currentTarget.textContent,
                val2 = parseInt(this.input.value);
            if (operator === 'c') {
                this.result = null;
                this.input.value = 0;
            } else if (operator === '=') {
                // wiem ze eval jest zly, ale nie chciało mi się duzo pisać ;)
                this.input.value = eval(`${this.result} ${this.lastOperator} ${val2}`);
                this.result = null;
            } else {
                this.lastOperator = operator;
            }
        })
    });
}
new Kalkulator(document.getElementById('calculator'));
