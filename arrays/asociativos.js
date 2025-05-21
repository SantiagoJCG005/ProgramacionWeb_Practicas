function crearTradicional(){
	let primos = new Array(11);
	primos[0] = 1;
	primos[1] = 2,
	primos[2] = 3;
	primos[3] = 5,
	primos[4] = 7;
	primos[5] = 11;
	
	//[1, 2, 3, 5, 7, 11, 13, 17, 23, 29, 31];

	//uso de función DOM
	const divRespuestaHtml = document.getElementById("respuestaHtml");

	if (divRespuestaHtml){ //innerHTML   innerText  textContent
		divRespuestaHtml.innerHTML = "<h1>Arreglo de primos: </h1>" + primos;
	}

	const divRespuestaInnerText = document.getElementById("respuestaInnerText");

	if (divRespuestaInnerText){ //innerHTML   innerText  textContent
		divRespuestaInnerText.innerText = "<h1>Arreglo de primos: </h1>" + primos;
	}

	const divRespuestaTextContent = document.getElementById("respuestaTextContent");

	if (divRespuestaTextContent){ //innerHTML   innerText  textContent
		divRespuestaTextContent.textContent = "<h1>Arreglo de primos: </h1>" + primos;
	}
}



function creaAsociativo(){
	let temperaturas = new Object();   //new Array();
	temperaturas.primavera = 29;
	temperaturas['verano'] = 35;
	temperaturas['otonio'] = 24;
	temperaturas['invierno'] = 22;
	
	document.write("<hr>\
		<p>Arreglo asociativo: </p>" 
	+ "<ul>"
	   + "<li>" + temperaturas['primavera'] + "</li>" 
	   + "<li>" + temperaturas['verano'] + "</li>"
	   + "<li>" + temperaturas['otonio'] + "</li>" 
	   + "<li>" + temperaturas['invierno'] + "</li></ul>");

	document.write("<p>Arreglo asociativo como objeto: </p>" 
	+ "<ul>"
	   + "<li>" + temperaturas.primavera + "</li>" 
	   + "<li>" + temperaturas.verano + "</li>"
	   + "<li>" + temperaturas.otonio + "</li>" 
	   + "<li>" + temperaturas.invierno + "</li></ul>");
}


function crearObjetos()	{
	const alumno = new Object();
	alumno.numControl = "21390001";
	alumno.nombre = "Pedro Pérez";
	alumno.carrera = "ITIC";
	alumno.semestre = 6;
	alumno.regular = true;

	//Creado con notación JSON
	const alumnoNuevo = {
		numControl: "21390001",
		nombre: "Pedro Pérez",
		carrera: "ITIC",
		semestre: 6,
		regular: true
	};

	const cadenaJSonAlumno = JSON.stringify(alumno);

 	const divObjetos = document.getElementById("mensajesObjetos");

 	if (divObjetos) {
 		divObjetos.innerHTML = "Objeto alumno: " + JSON.stringify(alumno)
 		+ "<br />Objeto alumnoNuevo: " + JSON.stringify(alumnoNuevo)
 		+ "<br />Objeto cadena JSon de alumno: " + cadenaJSonAlumno;
 	}


 	//Almacenar en cadena JSON para guardar en archivo, para enviar por internet a Php, Python, ruby, etc.
    const cadenaJSon = '{ \
		"numControl": "21390001", \
		"nombre": "Pedro Pérez", \
		"carrera": "ITIC", \
		"semestre": 6, \
		"regular": true \
	}';

	const objNuevoAlumno = JSON.parse(cadenaJSon);

	if (divObjetos) {
 		divObjetos.innerHTML += "<br /><br />Cadena JSON alumno: " + cadenaJSon
 			+ "<br />Objeto alumnoNuevo: " + objNuevoAlumno.toString();
 	}
}






















