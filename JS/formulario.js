//Creacion de la clase para posteriormente establecerle la ruta de la imagen y otros atributos
function Destino(estado,distancia,imagen) {
    this.estado = estado;
    this.distancia = distancia;
    this.imagen = imagen;
}


//obtencion de los elementos mediante el ID esta es la parte disfuncional
const opcion = document.getElementById("opcion");
const boton = document.getElementById("ejecutar");
const imagenEstado = document.getElementById("imagen")

//onclick desde javascript
// boton.onclick = alert("Hola mundo");

//Funcion cotizar la cual es llamada desde el html y 
function Cotizar() {
        var textoSeleccionado = [].filter.call(opcion.options, option => option.selected).map(option => option.text);
        var NumeroSeleccionado = [].filter.call(opcion.options, option => option.selected).map(option => option.value);
        var ImagenSeleccionada = textoSeleccionado + ".jpg"
        var lugar = new Destino(textoSeleccionado,NumeroSeleccionado,ImagenSeleccionada);    
        imagenEstado.src = 'ESTADOS/' + lugar.imagen ;
        alert(lugar.estado + " " + lugar.distancia + "Km");
}