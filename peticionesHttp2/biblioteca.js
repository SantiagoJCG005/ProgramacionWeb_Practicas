console.log("biblioteca.js cargado santiago");

var READY_STATE_COMPLETE=4;
var peticion_http = null;

function inicializa_xhr() { 
  if(window.XMLHttpRequest) {
        return new XMLHttpRequest();
  }
  else
      if (window.ActiveXObject) {
        return new ActiveXObject("Microsoft.XMLHTTP");
      } 
}

function crea_query_string() {
  var fecha = document.getElementById("fecha_nacimiento");
  var cp = document.getElementById("codigo_postal");
  var telefono = document.getElementById("telefono");
  return "fecha_nacimiento=" + encodeURIComponent(fecha.value) 
      + "&codigo_postal=" + encodeURIComponent(cp.value) 
      + "&telefono=" + encodeURIComponent(telefono.value) 
      + "&nocache=" + Math.random();
}

function valida() {
  peticion_http = inicializa_xhr(); 
  
  if (peticion_http) {
    peticion_http.onreadystatechange = procesaRespuesta;
    peticion_http.open("GET", "datos.xml", true);
    peticion_http.send(null);

    //peticion_http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    //var query_string = crea_query_string();
    //peticion_http.send(query_string);

  } 
}

function procesaRespuesta() { 
  if (peticion_http.readyState == READY_STATE_COMPLETE) {
    if (peticion_http.status == 200){
      let respuestaXhr = peticion_http.responseXML;

      //Procesar datos de los clientes para mostrar en pantalla
      let root = respuestaXhr.getElementsByTagName("clientes")[0];

      if (root){

        let arrayClientes = root.getElementsByTagName("cliente");
        alert("Número de clientes: " + arrayClientes.length + " " + JSON.stringify(arrayClientes));

        document.getElementById("respuesta").innerHTML = '<ul>';
        for (let i = 0; i < arrayClientes.length; i++) {

            //procesar todos los obj cliente
            let nombre = arrayClientes[i].getElementsByTagName("nombre")[0].textContent; 
            let sector = arrayClientes[i].getElementsByTagName("sector")[0].textContent;
            let notas = arrayClientes[i].getElementsByTagName("notas")[0].textContent;
            /*getElementsByTagName("cliente")[0];
            let nombre = clienteActual.getElementsByTagName("nombre")[0].textContent;
            let sector = clienteActual.getElementsByTagName("sector")[0].textContent;
            let notas = clienteActual.getElementsByTagName("notas")[0].textContent;
            */
            document.getElementById("respuesta").innerHTML += `
              <li>nombre: ${nombre}</li>
              <li>sector: ${sector}</li>
              <li>notas: ${notas}</li>`;
        }

        document.getElementById("respuesta").innerHTML += '              </ul>';
      }


      //document.getElementById("respuesta").innerHTML =respuestaXhr;
      //alert("Respuesta como XML: " + respuestaXhr);

      //alert(respuestaXhr.getElementsByTagName("clientes")[0]);

      //let respuestaJson = peticion_http.responseXML.getElementsByTagName("Clientes")[0];
      //let respuestaJson = peticion_http.responseXML.getElementsByTagName("Clientes")[0];
      
      //document.getElementById("respuesta").innerHTML = 
      //alert(JSON.stringify(respuestaJson));
    }
  }
}

function obtenerDatos(){
  const divResp = document.getElementById("respuesta");
  
  if (divResp){  
    fetch("datos.xml")
      .then(response=>{
        if (response.ok){
          return response.text();
        }
        else {
              throw new Error("Error al obtener datos");
        }
      })
      .then(data => {
        divResp.innerHTML = data
      });
  }
}


document.addEventListener("DOMContentLoaded", function () {
const boton = document.getElementById("btnValidar");
  if (boton) {
      boton.addEventListener("click", valida);
  }
});