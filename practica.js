let btn = document.getElementById('boton');
    let descripcionTexto = document.getElementById('descripcionTexto');
    let respuestaTexto = document.getElementById('descripcion');

    btn.addEventListener('click', function() {
        let opciones = document.getElementById('opciones').value;
        let n11 = parseInt(document.getElementById('n11').value) || 0;
        let n12 = parseInt(document.getElementById('n12').value) || 0;
        let n13 = parseInt(document.getElementById('n13').value) || 0;
        let n21 = parseInt(document.getElementById('n21').value) || 0;
        let n22 = parseInt(document.getElementById('n22').value) || 0;
        let n23 = parseInt(document.getElementById('n23').value) || 0;
        let n31 = parseInt(document.getElementById('n31').value) || 0;
        let n32 = parseInt(document.getElementById('n32').value) || 0;
        let n33 = parseInt(document.getElementById('n33').value) || 0;

        let matris = [
            [n11, n12, n13],
            [n21, n22, n23],
            [n31, n32, n33]
        ];

        switch (opciones) {
            case 'Suma':
                descripcionTexto.textContent = 'Se suman los elementos de cada fila y se presenta el resultado en un array.';
                break;
            case 'Resta':
                descripcionTexto.textContent = 'Se restan los elementos de cada fila y se presenta el resultado en un array.';
                break;
            case 'Determinante':
                descripcionTexto.textContent = 'Se calcula la determinante de la matriz.';
                break;
            default:
                descripcionTexto.textContent = "Operación no válida.";
                break;
        }

       
        ejecutarOperacion(opciones, matris);
    });

    function ejecutarOperacion(opcion, matris) {
        if (matris.length !== 3 || matris[0].length !== 3) {
            respuestaTexto.textContent = "La matriz debe ser de 3x3.";
            return;
        }

        switch (opcion) {
            case 'Suma':
                respuestaTexto.textContent = sumarfila(matris);
                break;
            case 'Resta':
                respuestaTexto.textContent = restarfila(matris);
                break;
            case 'Determinante':
                respuestaTexto.textContent = determinante(matris);
                break;
            default:
                respuestaTexto.textContent = "Operación no válida.";
                break;
        }
    }

    function sumarfila(matris) {
        let newMatriz = [];
        for (let i = 0; i < matris.length; i++) {
            let suma = 0;
            for (let j = 0; j < matris[i].length; j++) {
                suma += matris[i][j];
            }
            newMatriz.push(suma);
        }
        return newMatriz.join(', ');
    }

    function restarfila(matris) {
        let newMatriz = [];
        for (let i = 0; i < matris.length; i++) {
            let resta = matris[i][0]; 
            for (let j = 1; j < matris[i].length; j++) {
                resta -= matris[i][j];
            }
            newMatriz.push(resta);
        }
        return newMatriz.join(', ');
    }

    function determinante(matris) {
        if (matris.length !== 3 || matris[0].length !== 3) {
            return "La matriz debe ser de 3x3 para calcular la determinante.";
        }

        let a = matris[0][0], b = matris[0][1], c = matris[0][2];
        let d = matris[1][0], e = matris[1][1], f = matris[1][2];
        let g = matris[2][0], h = matris[2][1], i = matris[2][2];

        let determinante = a*e*i + b*f*g + c*d*h - c*e*g - b*d*i - a*f*h;
        return `La determinante de la matriz es ${determinante}`;
    }
