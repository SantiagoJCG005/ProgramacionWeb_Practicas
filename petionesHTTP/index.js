function obtenerDatos(){
	fetch("/robots.txt")
	.then(response => response.text())
	.then(data => console.log(data))
}


//response => response.text() //arrow function o funcion flecha

