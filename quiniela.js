function reiniciarColores() {
    precio = 0;
    document.getElementById('totalPrecio').innerText = "0";
    var celdas = document.querySelectorAll("#tablaPartidos td");
    celdas.forEach(function (celda) {
        celda.style.backgroundColor = '';
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

function calcularPrecio() {
    precio = 0;
    precio1 = 0;
    precio2 = 0;
    precio3 = 0;
    precio4 = 0;
    precio5 = 0;
    precio6 = 0;
    precio7 = 0;
    precio8 = 0;
    precio9 = 0;
    precio10 = 0;
    precio11 = 0;
    precio12 = 0;
    cantidadesCeldasRojo = {};

    var filas = document.querySelectorAll('#tablaPartidos tbody tr');

    filas.forEach(function (fila) {
        var celdasFila = fila.querySelectorAll('td[data-tipo="local"], td[data-tipo="visitante"], td[data-tipo="empate"]');

        var countCeldasRojo = 0;
        celdasFila.forEach(function (celda) {
            if (celda.style.backgroundColor === 'red') {
                countCeldasRojo++;
            }
        });

        cantidadesCeldasRojo[fila.id] = countCeldasRojo;
    });

    if (cantidadesCeldasRojo['tr1'] === 1) {
        precio1 = 10;
    } else if (cantidadesCeldasRojo['tr1'] === 2) {
        precio1 = 20;
    } else if (cantidadesCeldasRojo['tr1'] === 3) {
        precio1 = 30;
    }

    if (cantidadesCeldasRojo['tr2'] === 1) {
        precio2 = 10;
    } else if (cantidadesCeldasRojo['tr2'] === 2) {
        precio2 = 20;
    } else if (cantidadesCeldasRojo['tr2'] === 3) {
        precio2 = 30;
    }
    
    if (cantidadesCeldasRojo['tr3'] === 1) {
        precio3 = 10;
    } else if (cantidadesCeldasRojo['tr3'] === 2) {
        precio3 = 20;
    } else if (cantidadesCeldasRojo['tr3'] === 3) {
        precio3 = 30;
    }

    if (cantidadesCeldasRojo['tr4'] === 1) {
        precio4 = 10;
    } else if (cantidadesCeldasRojo['tr4'] === 2) {
        precio4 = 20;
    } else if (cantidadesCeldasRojo['tr4'] === 3) {
        precio4 = 30;
    }


    if (cantidadesCeldasRojo['tr1'] === 1 && cantidadesCeldasRojo['tr2'] === 1 && cantidadesCeldasRojo['tr3'] === 1 && cantidadesCeldasRojo['tr4']=== 1) {
        precio = 10;
    }else if (cantidadesCeldasRojo['tr1'] === 0 && cantidadesCeldasRojo['tr2'] === 0 && cantidadesCeldasRojo['tr3'] === 0 && cantidadesCeldasRojo['tr4']=== 0){
        precio = 0;
    } else {
        precio = precio1 + precio2 + precio3 + precio4 + precio5 + precio6 + precio7 + precio8 + precio9 + precio10 + precio11 + precio12
        precio = precio - 30;
    }

    document.getElementById('totalPrecio').innerText = precio;
}


function mostrarSeleccionados() {
    nombreQuiniela = lblQuiniela.value;
    console.log(nombreQuiniela)
    if (nombreQuiniela === '') {
        window.alert('¡Debe de ingresar el nombre de la quiniela!');
        return;
    }

    calcularPrecio();

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

    // Obtén el contenedor de alertas
    var contenedorAlertas = document.getElementById('contenedorAlertas');

    var nuevaAlerta = document.createElement('div');
    nuevaAlerta.classList.add('alert', 'alert-primary', 'alert-dismissible', 'fade', 'show');

    nuevaAlerta.innerHTML = '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>';

    var textoAlerta = document.createElement('p');
    textoAlerta.classList.add('mb-0');
    textoAlerta.textContent = Object.values(letrasPorFila).join(', ') + ' - ' +nombreQuiniela + ' $' + precio;

    nuevaAlerta.appendChild(textoAlerta);

    contenedorAlertas.appendChild(nuevaAlerta);
}


function enviar() {
    var alertas = document.querySelectorAll('.alert');

    var textosAlertas = [];

    alertas.forEach(function (alerta) {
        var textoAlerta = alerta.textContent.trim();
        textosAlertas.push(textoAlerta);
    });

    var mensaje = '¡Hola esta es mi quiniela!\n\n' + textosAlertas.join('\n');

    var numeroTelefono = '528991692609';

    var enlaceWhatsApp = 'https://wa.me/' + numeroTelefono + '?text=' + encodeURIComponent(mensaje);

    window.open(enlaceWhatsApp);
}