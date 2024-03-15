/*let numeros = []
for(let i = 1; i<200;i++){
    numeros.push(i)
}
console.log(numeros)*/

let selectedOption = '';

function showPares() {
    selectedOption = 'pares';
}

function showImpares() {
    selectedOption = 'impares';
}

function showParesMayores() {
    document.getElementById('numeroN').style.display = 'block';
    selectedOption = 'pares_mayores';
}

function showImparesMayores() {
    document.getElementById('numeroN').style.display = 'block';
    selectedOption = 'impares_mayores';
}

function showResult() {
    let resultado = '';

    if (selectedOption === 'pares') {
        for (let i = 2; i <= 200; i += 2) {
            resultado += i + ' ';
        }
        document.getElementById('resultado').textContent = 'Pares: ' + resultado;
    } else if (selectedOption === 'impares') {
        for (let i = 1; i <= 199; i += 2) {
            resultado += i + ' ';
        }
        document.getElementById('resultado').textContent = 'Impares: ' + resultado;
    } else if (selectedOption === 'pares_mayores') {
        const n = parseInt(document.getElementById('numeroN').value);
        if (isNaN(n) || n < 1 || n > 198) {
            alert('Ingrese un número válido entre 1 y 198.');
            return;
        }
        for (let i = n + 2; i <= 200; i += 2) {
            resultado += i + ' ';
        }
        document.getElementById('resultado').textContent = 'Pares mayores que ' + n + ': ' + resultado;
    } else if (selectedOption === 'impares_mayores') {
        const n = parseInt(document.getElementById('numeroN').value);
        if (isNaN(n) || n < 1 || n > 198) {
            alert('Ingrese un número válido entre 1 y 198.');
            return;
        }
        for (let i = n + 1; i <= 199; i += 2) {
            resultado += i + ' ';
        }
        document.getElementById('resultado').textContent = 'Impares mayores que ' + n + ': ' + resultado;
    }
}
