//Creación de la clase 
function Solicitud(Cliente, telefono, niños, adultos, dias, estado, distancia, imagen) {
    this.Cliente = Cliente;
    this.telefono = telefono;
    this.niños = niños;
    this.adultos = adultos;
    this.dias = dias;
    this.estado = estado;
    this.distancia = distancia;
    this.imagen = imagen;
}

//asignacion de las constantes
const precioPorKilometro = 150;
const precioEstanciaNinos = 50;
const precioEstanciaAdultos = 100;
const opcion = document.getElementById("opcion");
const cuerpo = document.querySelector("body");


//funcion cotizar la cual creara un objeto con todos los detalles de la solicitud, calculara el total y lo mostrara
function Cotizar() {
    var solicitud = new Solicitud(
        document.getElementById("nombreCliente").value,
        document.getElementById("telefonoCliente").value,
        document.getElementById("numeroDeNiños").value,
        document.getElementById("numeroDeAdultos").value,
        document.getElementById("numeroDeDias").value,
        [].filter.call(opcion.options, option => option.selected).map(option => option.text),
        document.getElementById("opcion").value,
        'ESTADOS/' + [].filter.call(opcion.options, option => option.selected).map(option => option.text) + ".jpg"
    );
    cuerpo.textContent = null;
    document.write(
        "<h1>Ticket de compra </h1>",
        "<p>" + "Hola " + solicitud.Cliente +" El costo de transporte sera de $" + (precioPorKilometro * solicitud.distancia) + "</p>",
        "<p>" + "El costo de hospedaje sera de $" + (((solicitud.niños * precioEstanciaNinos) * solicitud.dias) + ((solicitud.adultos * precioEstanciaAdultos) * solicitud.dias)) + "</p>",
        "<p>" + "<img src=''" + "alt='imagen de un estado' id='imagenTicket'></img>" + "</p>",
    );
    document.getElementById("imagenTicket").src = solicitud.imagen;
}