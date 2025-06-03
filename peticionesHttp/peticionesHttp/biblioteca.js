
function obtenerDatos(){
  const divResp = document.getElementById("respuesta");
    
  fetch("/datos.xml")
    .then( response => response.text() )  // ( function callback )
    .then(data => divResp.innerHTML = data);
}




/*

.then( procesaDatos(response) )

//  response => response.text()    //arrow function ó función flecha

function procesaDatos(response){
      return response.text();
}



.then( muestraDatos(data) )

//data => console.log(data)

function muestraDatos(data){
  console.log(data); 

}

*/