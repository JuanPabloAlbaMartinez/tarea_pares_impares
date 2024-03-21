const numeros = Array.from({ length: 200 }, (_, i) => i + 1);
let posiciones = numeros.map((_, i) => i + 1); // Lista de posiciones de 1 a 200

const listaPares = document.getElementById('numeros');
const opciones = document.getElementById('opciones');
const numero = document.getElementById('numero');
const boton = document.getElementById('boton');
const btnLimpiar = document.getElementById('btnLimpiar');

boton.addEventListener('click', () => {
    const opcion = opciones.value;
    const filtro = Number(numero.value);
    let numerosFiltrados = [];
    let posicionesFiltradas = [];

    if (opcion === 'todos') {
        numerosFiltrados = numeros;
        posicionesFiltradas = posiciones;
    } else if (opcion === 'pares') {
        numerosFiltrados = numeros.filter(num => num % 2 === 0);
        posicionesFiltradas = numerosFiltrados.map(num => posiciones[num - 1]);
    } else if (opcion === 'impares') {
        numerosFiltrados = numeros.filter(num => num % 2 !== 0);
        posicionesFiltradas = numerosFiltrados.map(num => posiciones[num - 1]);
    } else if (opcion === 'paresMayores') {
        numerosFiltrados = numeros.filter(num => num > filtro && num % 2 === 0);
        posicionesFiltradas = numerosFiltrados.map(num => posiciones[num - 1]);
    } else if (opcion === 'imparesMayores') {
        numerosFiltrados = numeros.filter(num => num > filtro && num % 2 !== 0);
        posicionesFiltradas = numerosFiltrados.map(num => posiciones[num - 1]);
    }

    mostrarNumeros(listaPares, numerosFiltrados, posicionesFiltradas);
});

btnLimpiar.addEventListener('click', () => {
    listaPares.innerHTML = '';
});
//Se muestra la posicion general de todos los numeros
function mostrarNumeros(lista, numeros, posiciones) {
    lista.innerHTML = '';
    numeros.forEach((numero, index) => {
        const li = document.createElement('li');
        li.textContent = `Número: ${numero}, Posición: ${posiciones[index]}`;
        lista.appendChild(li);
    });
}

//Esta muestra la poscion desde 1 en cada una 
/**function mostrarNumeros(lista, numeros) {
    lista.innerHTML = '';
    numeros.forEach((numero, index) => {
        const posicion = numeros.indexOf(numero) + 1;
        const li = document.createElement('li');
        li.textContent = `Número: ${numero}, Posición: ${posicion}`;
        lista.appendChild(li);
    }) 
}
*/
