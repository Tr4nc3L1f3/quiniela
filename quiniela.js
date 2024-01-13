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

    lblCondicion()

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
    textoAlerta.textContent = Object.values(letrasPorFila).join(', ') + ' - ' + nombreQuiniela + ' $' + totalPrecio.textContent;

    nuevaAlerta.appendChild(textoAlerta);

    contenedorAlertas.appendChild(nuevaAlerta);
}


function enviar(res) {
    nombreQuiniela = lblQuiniela.value;

    lblCondicion()

    var numItems = $('.id').children('div').length;
    
    if (numItems === 0) {
        window.alert('¡Debe de crear al menos una quiniela!')
        return;
    }

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


function lblCondicion() {
    if (nombreQuiniela === '') {
        window.alert('¡Debe de ingresar el nombre de la quiniela!');
        $("#lblQuiniela").focus();
        return;
    }
}