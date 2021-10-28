//Creacion de la clase para posteriormente establecerle la ruta de la imagen y otros atributos
function Destino(estado,distancia,imagen) {
    this.estado = estado;
    this.distancia = distancia;
    this.imagen = imagen;
}


//obtencion de los elementos mediante el ID esta es la parte disfuncional
const prueba = document.getElementById("cambiar");
const boton = document.getElementById("ejecutar");

//onclick desde javascript
// boton.onclick = alert("Hola mundo");

//Funcion cotizar la cual es llamada desde el html y 
function Cotizar() {
    console.log(prueba.textContent);
}