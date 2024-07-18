//1. Implementa una función que cuente cuántas veces aparece un elemento en una matriz.
function elemMatriz(matriz,elem){
let count = 0 
for(let i = 0 ; i< matriz.length; i++){
    for(let j =0 ; j < matriz[0].length;j++){
        if (matriz[i][j]==elem) {
            count++
        }
    }
}
return count
}

// matriz 1
let matriz=[[1,2,3],
            [4,5,6],
            [7,8,9]]



console.log(elemMatriz(matriz,1))
//2. Crea una matriz de 3x3 con valores numéricos y muestra sus elementos en la consola.
function mostrarval(matriz){
    for(let i = 0 ; i< matriz.length; i++){
        for(let j =0 ; j < matriz[0].length;j++){
                console.log(matriz[i][j])
        }
    }
    
}
mostrarval(matriz)
//3. Multiplica todos los elementos de una matriz por un escalar
function multMatriz(matriz,num){
    let newMatriz=[]
    for(let i = 0 ; i< matriz.length; i++){
        for(let j =0 ; j < matriz[0].length;j++){
                newMatriz.push(matriz[i][j]*num)
        }
    }
    return newMatriz
}
console.log(multMatriz(matriz,2))
//4. Crea dos matrices de 2x2 y calcula la suma de ambas matrices.
function sumarMat(matriz1,matriz2){
    let sum = matriz1
    for(let i = 0 ; i< matriz2.length; i++){
        for(let j =0 ; j < matriz2[0].length;j++){
                sum[i][j]=sum[i][j]+matriz2[i][j]
        }
    }
    return sum
}
//matriz 2
let matriz1=[[2,2,2],
            [3,3,3],
            [4,4,4]]

console.log(sumarMat(matriz,matriz1))
//5. Encuentra el mayor elemento en una matriz
function mayMat(matriz) {
    let num = matriz[0][0];
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (num <= matriz[i][j]) {
                num = matriz[i][j];
            }
        }
    }
    return num;
}
console.log(mayMat(matriz1))
//6. Crea una función que busque un elemento específico en una matriz.
function buscar(matriz, num) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] === num) {
                return true;
            }
        }
    }
    return false;
}
console.log(buscar(matriz1,2))
//7. Elimina un elemento en una posición específica de la matriz.
function Elimina(matriz,po1,po2){
    let newMatriz=matriz
    newMatriz[po1][po2]= NaN
    return newMatriz
}
console.log(Elimina(matriz1,1,1));
// 8. Intenta dividir dos números, captura la excepción si se intenta dividir por cero.
try {
    let x = 10;
    let z = 0;

    if (z === 0) {
        throw new Error("División por cero");
    }

    let result = x / z;
    console.log(result);
} catch (error) {
    console.log(error.message);
}
//9. Accede a una propiedad que no existe en un objeto, captura la excepción.
const objeto = {
    nombre: "Juan",
    edad: 30
};

try {
    let propiedad = "direccion";

    if (!(propiedad in objeto)) {
        throw new Error(`La propiedad '${propiedad}' no existe en el objeto.`);
    }

    console.log(objeto[propiedad]);
} catch (error) {
    console.log(error.message);
}

//10. Crea una función que espera dos argumentos y llámala con solo uno. Captura la excepción.
function suma(a, b) {
    if (a === undefined || b === undefined) {
        throw new Error("Faltan argumentos. Se requieren dos argumentos.");
    }
    return a + b;
}

try {
    let resultado = suma(5); 
    console.log(resultado);
} catch (error) {
    console.log(error.message);
}
//11. Intenta crear un objeto con una propiedad llamada class, captura la excepción.

class Carro {
    constructor(marca, modelo, año) {
        this.marca = marca;
        this.modelo = modelo;
        this.año = año;
    }
}

try {
    let miCarro = new Carro("Toyota", "Corolla", 2020);
    let propiedad = "class";
    if (propiedad === "class") {
        throw new Error("No se puede usar 'class' como nombre de propiedad.");
    }

    miCarro[propiedad] = "Algun valor"; 

    console.log(miCarro);
} catch (error) {
    console.log(error.message);
}
//12. Intenta acceder a un índice que está fuera del rango de un arreglo.

try {
    let arreglo = [1, 2, 3];
    let i = 7;

    if (i >= arreglo.length || i < 0) {
        throw new Error("No se puede acceder al array con un índice mayor que su longitud o menor que 0.");
    }

    console.log(arreglo[i]); 

} catch (error) {
    console.log(error.message);
}
//13. Intenta abrir un archivo que no existe y captura la excepción.
const fs = require('fs');

try {
    let data = fs.readFileSync('archivo_que_no_existe.txt', 'utf8');
    console.log(data);
} catch (error) {
    console.log("Error al intentar leer el archivo:", error.message);
}
//14. Utiliza fetch con una URL inválida y maneja la excepción.

async function fetchData() {
    try {
        const response = await fetch('http//A.com');
        
        if (!response.ok) {
            throw new Error(`pagina no encontrada ${response.status}`);
        }
        
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log("Error al intentar realizar la petición :", error.message);
    }
}

fetchData();
//15 Crea una función que sume todos los elementos de cada fila de una matriz y devuelva un arreglo con los resultados.

function sumafila(matriz){
let suma=[]
for (let i = 0;i < matriz.length;i++) {
    suma[i]=0
    for(let j = 0 ; j < matriz[0].length;j++){
        suma[i]+=matriz[i][j]
    }
    
}
return suma
}

let matriz2=[[2,3,4],
            [5,6,7],
            [8,9,10]]

console.log(sumafila(matriz2))
//16. Encuentra el mayor elemento por columna en una matriz.
function mayColunMat(matriz) {
    let j=0
    let mayorporcolumna = matriz[j]
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[0].length; j++) {
            if (matriz[i][j] > mayorporcolumna[j]) {
                mayorporcolumna[j] = matriz[i][j];
            }
        }
    }
    return mayorporcolumna;
}

console.log(mayColunMat(matriz2)); 
//17. Crea una función que sustituya todos los valores pares de una matriz por el valor -1.
function menosUno(matriz) {
    let newMatriz = [];
    for (let i = 0; i < matriz.length; i++) {
        let newRow = []; 
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] % 2 == 0) {
                newRow.push(-1);
            } else {
                newRow.push(matriz[i][j]);
            }
        }
        newMatriz.push(newRow); 
    }
    return newMatriz;
}
console.log(menosUno(matriz2))
//18. Calcula el promedio de cada fila en una matriz.
function promedio(matriz) {
    let promedios = [];
    for (let i = 0; i < matriz.length; i++) {
        let suma = 0;
        for (let j = 0; j < matriz[i].length; j++) {
            suma += matriz[i][j];
        }
        promedios.push(suma / matriz[i].length);
    }
    return promedios;
}
let matriz3=[[1,2,3],
            [4,5,6],
            [7,8,9]]
console.log(promedio(matriz3))