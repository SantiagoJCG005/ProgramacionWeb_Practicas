function crearTradicional(){

	let primos =[1,2,3,4,5,6,7,8,9]
	//uso de la funcion DOM
	const elemnt = document.getElementById("respuesta");
	const elemnt2 = document.getElementById("respuestaInnerText");
	const elemnt3 = document.getElementById("respuestaTextContent");

	if(elemnt){ //innerHTML  innerText textContent
		elemnt.innerText= "Arreglo de primos:\t"+primos;
	}

	if(elemnt2){ //innerHTML  innerText textContent
		elemnt2.innerHTML= "<h1>Arreglo de primos2</h1>:\t"+primos;
	}

	if(elemnt3){ //innerHTML  innerText textContent
		elemnt3.textContent= "Arreglo de primos3:\t"+primos;
	}
}

function crearAsociativo(){
	let Temperaturas = new Array()
	Temperaturas['primavera']=29;
	Temperaturas['verano']=35;
	Temperaturas['otonio']=24;
	Temperaturas['Invierno']=22;

	document.write("<p>Arreglo asociativo:</p>"+
		+"<ul>"+"<li>"+Temperaturas["primavera"]+"</li></ul>")

}