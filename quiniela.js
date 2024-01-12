function reiniciarColores() {
    precio = 0;
    lblQuiniela.value = '';
    
    document.getElementById('totalPrecio').innerText = "0";

    var celdas = document.querySelectorAll("#tablaPartidos td");
    celdas.forEach(function (celda) {
        celda.style.backgroundColor = '';
    });

    var alertas = document.querySelectorAll('#contenedorAlertas .alert');
    alertas.forEach(function (alerta) {
        alerta.parentNode.removeChild(alerta);
    });
}

function toggleSeleccion(celda) {
    var tipo = celda.getAttribute('data-tipo');

    if (celda.style.backgroundColor === 'red') {
        celda.style.backgroundColor = '';
    } else {
        celda.style.backgroundColor = 'red';
    }
}

function cambiarColorAleatorio() {
    precio = 0;

    var filas = document.querySelectorAll('#tablaPartidos tbody tr');

    filas.forEach(function (fila) {
        var celdasFila = fila.querySelectorAll('td[data-tipo="local"], td[data-tipo="visitante"], td[data-tipo="empate"]');

        celdasFila.forEach(function (celda) {
            celda.style.backgroundColor = '';
        });

        var indiceCeldaAleatoria = Math.floor(Math.random() * celdasFila.length);
        celdasFila[indiceCeldaAleatoria].style.backgroundColor = 'red';
    });

    calcularPrecio();
}

var cantidadesCeldasRojo = {};

// function calcularPrecio() {
//     precio = 0;
//     precio1 = 0;
//     precio2 = 0;
//     precio3 = 0;
//     precio4 = 0;
//     precio5 = 0;
//     precio6 = 0;
//     precio7 = 0;
//     precio8 = 0;
//     precio9 = 0;
//     cantidadesCeldasRojo = {};

//     var filas = document.querySelectorAll('#tablaPartidos tbody tr');

//     filas.forEach(function (fila) {
//         var celdasFila = fila.querySelectorAll('td[data-tipo="local"], td[data-tipo="visitante"], td[data-tipo="empate"]');

//         var countCeldasRojo = 0;
//         celdasFila.forEach(function (celda) {
//             if (celda.style.backgroundColor === 'red') {
//                 countCeldasRojo++;
//             }
//         });

//         cantidadesCeldasRojo[fila.id] = countCeldasRojo;
//     });

//     if (cantidadesCeldasRojo['tr1'] === 1) {
//         // precio1 = 10;
//         precio = 10;
//     } else if (cantidadesCeldasRojo['tr1'] === 2) {
//         // precio1 = 20;
//         precio = 20;
//     } else if (cantidadesCeldasRojo['tr1'] === 3) {
//         // precio1 = 30;
//         precio = 30;
//     }

//     if (cantidadesCeldasRojo['tr2'] === 1) {
//         // precio2 = 10;
//         precio = 10;
//     } else if (cantidadesCeldasRojo['tr2'] === 2) {
//         // precio2 = precio1 * 2;
//         precio = precio * 2;
//     } else if (cantidadesCeldasRojo['tr2'] === 3) {
//         precio2 = 30;
//     }
    
//     if (cantidadesCeldasRojo['tr3'] === 1) {
//         // precio3 = 10;
//         precio = 10;
//     } else if (cantidadesCeldasRojo['tr3'] === 2) {
//         precio3 = precio2 * 2;
//     } else if (cantidadesCeldasRojo['tr3'] === 3) {
//         precio3 = 30;
//     }

//     if (cantidadesCeldasRojo['tr4'] === 1) {
//         // precio4 = 10;
//         precio = 10;
//     } else if (cantidadesCeldasRojo['tr4'] === 2) {
//         precio4 = precio3 * 2;
//     } else if (cantidadesCeldasRojo['tr4'] === 3) {
//         precio4 = 30;
//     }

//     if (cantidadesCeldasRojo['tr5'] === 1) {
//         // precio5 = 10;
//         precio = 10;
//     } else if (cantidadesCeldasRojo['tr5'] === 2) {
//         precio5 = precio4 * 2;
//     } else if (cantidadesCeldasRojo['tr5'] === 3) {
//         precio5 = 30;
//     }

//     if (cantidadesCeldasRojo['tr6'] === 1) {
//         // precio6 = 10;
//         precio = 10;
//     } else if (cantidadesCeldasRojo['tr6'] === 2) {
//         precio6 = precio5 * 2;
//     } else if (cantidadesCeldasRojo['tr6'] === 3) {
//         precio6 = 30;
//     }

//     if (cantidadesCeldasRojo['tr7'] === 1) {
//         // precio7 = 10;
//         precio = 10;
//     } else if (cantidadesCeldasRojo['tr7'] === 2) {
//         precio7 = precio6 * 2;
//     } else if (cantidadesCeldasRojo['tr7'] === 3) {
//         precio7 = 30;
//     }

//     if (cantidadesCeldasRojo['tr8'] === 1) {
//         // precio8 = 10;
//         precio = 10;
//     } else if (cantidadesCeldasRojo['tr8'] === 2) {
//         precio8 = precio7 * 2;
//     } else if (cantidadesCeldasRojo['tr8'] === 3) {
//         precio8 = 30;
//     }

//     if (cantidadesCeldasRojo['tr9'] === 1) {
//         // precio9 = 10;
//         precio = 10;
//     } else if (cantidadesCeldasRojo['tr9'] === 2) {
//         precio9 = precio8 * 2;
//     } else if (cantidadesCeldasRojo['tr9'] === 3) {
//         precio9 = 30;
//     }


//     if (cantidadesCeldasRojo['tr1'] === 1 && cantidadesCeldasRojo['tr2'] === 1 && cantidadesCeldasRojo['tr3'] === 1 && cantidadesCeldasRojo['tr4']=== 1 && cantidadesCeldasRojo['tr5']=== 1 && cantidadesCeldasRojo['tr6']=== 1 && cantidadesCeldasRojo['tr7']=== 1 && cantidadesCeldasRojo['tr8']=== 1 && cantidadesCeldasRojo['tr9']=== 1) {
//         precio = 10;
//     }else if (cantidadesCeldasRojo['tr1'] === 0 || cantidadesCeldasRojo['tr2'] === 0 || cantidadesCeldasRojo['tr3'] === 0 || cantidadesCeldasRojo['tr4'] === 0 || cantidadesCeldasRojo['tr5'] === 0 || cantidadesCeldasRojo['tr6'] === 0 || cantidadesCeldasRojo['tr7'] === 0 || cantidadesCeldasRojo['tr8'] === 0 || cantidadesCeldasRojo['tr9'] === 0){
//         precio = 0;
//     } else {
//         // precio = precio1 + precio2 + precio3 + precio4 + precio5 + precio6 + precio7 + precio8 + precio9
//         // precio = precio - 80;
        
//     }

//     document.getElementById('totalPrecio').innerText = precio;
// }


function calcularPrecio() {
    var precio = 10;
    var multiplicador = 1;

    var filas = document.querySelectorAll('#tablaPartidos tbody tr');

    filas.forEach(function (fila) {
        var celdasFila = fila.querySelectorAll('td[data-tipo="local"], td[data-tipo="visitante"], td[data-tipo="empate"]');
        var countCeldasRojo = 0;

        celdasFila.forEach(function (celda) {
            if (celda.style.backgroundColor === 'red') {
                countCeldasRojo++;
            }
        });

        if (countCeldasRojo === 2) {
            multiplicador *= 2;
        } else if (countCeldasRojo === 3) {
            multiplicador *= 3;
        }
    });

    precio *= multiplicador;

    document.getElementById('totalPrecio').innerText = precio;
}


function mostrarSeleccionados() {
    nombreQuiniela = lblQuiniela.value;

    calcularPrecio();


    if (cantidadesCeldasRojo['tr1'] === 0 || cantidadesCeldasRojo['tr2'] === 0 || cantidadesCeldasRojo['tr3'] === 0 || cantidadesCeldasRojo['tr4'] === 0 || cantidadesCeldasRojo['tr5'] === 0 || cantidadesCeldasRojo['tr6'] === 0 || cantidadesCeldasRojo['tr7'] === 0 || cantidadesCeldasRojo['tr8'] === 0 || cantidadesCeldasRojo['tr9'] === 0){
        window.alert('¡Debe seleccionar al menos un resultado por partido!');
        return;
    }

    if (nombreQuiniela === '') {
        window.alert('¡Debe de ingresar el nombre de la quiniela!');
        return;
    }

    var filas = document.querySelectorAll('tr');

    var letrasPorFila = {};

    filas.forEach(function (fila) {
        var celdasRojas = fila.querySelectorAll('td[style="background-color: red;"]');
        if (celdasRojas.length > 0) {
            var letrasFila = Array.from(celdasRojas).map(function (celda) {
                return celda.textContent.trim().charAt(0);
            });

            letrasPorFila[fila.id] = letrasFila.join('');
        }
    });

    var contenedorAlertas = document.getElementById('contenedorAlertas');

    var nuevaAlerta = document.createElement('div');
    nuevaAlerta.classList.add('alert', 'alert-primary', 'alert-dismissible', 'fade', 'show');

    nuevaAlerta.innerHTML = '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

    var textoAlerta = document.createElement('p');
    textoAlerta.classList.add('mb-0');
    textoAlerta.textContent = Object.values(letrasPorFila).join(', ') + ' - ' + nombreQuiniela + ' $' + precio;

    nuevaAlerta.appendChild(textoAlerta);

    contenedorAlertas.appendChild(nuevaAlerta);
}


function enviar(res) {

    var mensaje;
    var numeroTelefono = '528992156235';
    var enlaceWhatsApp;

    if (res === 'informes') {
        mensaje = '¡Hola, necesito informes!';
    }

    if (res === 'enviar') {
        var alertas = document.querySelectorAll('.alert');

        var textosAlertas = [];
    
        alertas.forEach(function (alerta) {
            var textoAlerta = alerta.textContent.trim();
            textosAlertas.push(textoAlerta);
        });
    
        mensaje = '¡Hola esta es mi quiniela!\n\n' + textosAlertas.join('\n');        
    } 
    enlaceWhatsApp = 'https://wa.me/' + numeroTelefono + '?text=' + encodeURIComponent(mensaje);
    
    window.open(enlaceWhatsApp);
}