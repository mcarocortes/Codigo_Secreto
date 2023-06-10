/*****************A.ANTES DE LA COMPROBACIÓN************/

/*0.1 CREAMOS UN NUMERO SECRETO RANDOM*/
const codigo = []; 
for (let i = 0; i < 5; i++) {
codigo[i] = Math.floor((Math.random() * 10));
}
console.log(codigo);

/*0.1 TENEMOS UN INICIO Y UN MAXIMO NUMERO DE INTENTOS*/
const maxIntento = 9;
var intentos = 0;

/*0.2 NOMBRE DE CASILLAS A EDITAR*/
var casillaMensaje = document.getElementById("info");
var casillaMensajeFondo = document.getElementById ("infoBackground");
var casillaCodigoSecreto = document.getElementsByClassName("cel flex");
let fondo = document.querySelector("body");
let casillaComprobar = document.getElementsByTagName("button");

/******************B. * FUNCION DE COMPROBACION*/
function comprobar() {    

    /* 1.POR CADA CLICK SE MODIFICARA EL CONTADOR DE INTENTOS*/
        intentos++;
         console.log (intentos);
         switch (intentos) {    
             case maxIntento: if (confirm("¡¡Límite de Intentos!!!") == true) {
                location.reload() ; } else {location.reload()}
             case 8: casillaMensaje.innerHTML = "¡Último Intento!"; break;
             case 7: casillaMensaje.innerHTML = "¡Penúltimo Intento!"; break;
             case 6: 
             case 5: 
             case 4: 
             case 3: 
             case 2: 
             case 1: fondo.style.background="url('./img/start.gif')" // SI ES DE 4 HASTA 1 
              casillaMensaje.innerHTML = "¡Sigue Intentando!"; break;
             
           
         }
     /*   if (intentos == maxIntento){             
          if (confirm("¡¡Límite de Intentos!!!") == true) {
            location.reload() ;
        } }*/
        

    /*2. OBTENGO LOS VALORES DEL NUMERO INTRODUCIDO POR EL USUARIO*/
    let numUsuario = document.getElementById("numero");
    let valorNumUsuario = numUsuario.value
    var ingresoNumUsuario = valorNumUsuario
    console.log (ingresoNumUsuario)
    

    /*3. DEBO CORROBORAR QUE LOS VALORES SON INTEGER PARA REALIZAR LA F(X)*/
    var valoresInt = 0 // DEBEN SER 5
    for (i = 0; i < 5; i++) {
     if (valorNumUsuario[i] > -1 && valorNumUsuario.length == 5){ // SI CADA NUMERO ES + QUE 0 Y LA LONGITUD DEL ARRAY ES 5
         valoresInt++}
   //   else { console.log("INGRESA NUMERO VALIDO")
          //alert("¡¡¡INGRESA NUMERO VALIDO!!!")
    //    }
    }
    


    /*4. SI LOS VALORES INGRESADOS SON CORRECTOS = CREACION DE CASILLAS EN CADA CLIC*/
    if (valoresInt == 5){

        // CREO EL DIV EXTERIOR
        var divExterior = document.createElement('div');
        divExterior.className="rowResult w100 flex wrap";

        //AGREGO DIV EXTERIOR A LA SECTION DEL DOM
        var SectionResultados = document.getElementById('Result');
        SectionResultados.appendChild(divExterior); // Lo agrego al section result -1 es abajo

        
        var contadorMismaPosicion = 0  //contador de posiciones acertadas

        //*********** ESTE VA 5 VECES ***********/

        //*4.1 . 1ER FOR : RECORRE LA FILA EN TOTAL DE UNA
        for (i = 0; i < 5; i++) {
        // CREO EL DIV INTERMEDIO
        var divIntermedio = document.createElement('div');
        divIntermedio.className="w20";

         //AGREGO DIV INTERMEDIO A DIV EXTERIOR DEL DOM
        divExterior.appendChild(divIntermedio); // Lo agrego al section result -1 es abajo


        // CREO EL DIV INTERIOR
        var divInterior = document.createElement('div');
        divInterior.className="celResult flex";
        divInterior.innerHTML=ingresoNumUsuario[i];        //RECORRO CASILLA X CASILLA Y LE COLOCO EL VALOR DEL Nº INGRESADO
        //AGREGO DIV INTERIOR A DIV INTERMEDIO DEL DOM
        divIntermedio.appendChild(divInterior); // Lo agrego al section result -1 es abajo

      
        // 4.2 COLOREAR CASILLAS VERDES Y AMARILLA
        if (codigo[i] == ingresoNumUsuario[i]) {                  // SI CADA POSICION Y VALOR SON IGUALES
            contadorMismaPosicion++                                    // AUMENTO EL CONTADOR DE CASILLAS IGUALES     
             divInterior.style.backgroundColor = "#1af0a5";           // PINTO LAS CASILLAS, DE COLOR VERDE
             }
        else if (codigo.includes(parseInt(ingresoNumUsuario[i]))){   //CAMBIAR LA LISTA A ENTEROS CON PARSEiNT
            divInterior.style.backgroundColor = "yellow";            // VER SI LA LISTA DE NUMEROS SE INCLUYE EN EL CODIGO 
        }
        

    } 
    //console.log("contadorMismaposicion: "+contadorMismaPosicion)


    //5.***   EDICION DE CASILLA DE MENSAJE INFORMATIVO DE ACUERDO AL CONTADOR DE POSICIONES IGUALES
    switch (contadorMismaPosicion){
        case 5:                                                      //SI LAS 5 POSICIONES SON ACERTADAS
        casillaMensaje.innerHTML = "Has acertado, ¡Enhorabuena!";   // SE EDITARÁ LA CASILLA DE MENSAJE
        for (i = 0; i < codigo.length; i++) {                      
            casillaCodigoSecreto[i].innerHTML = codigo[i];           // SE EDITARÁ LA CASILLA DE CODIGO SECRETO Y ESCRIBIREMOS EL VALOR
        } 
       
        fondo.style.background="url('./img/winner.gif')"
        casillaComprobar[0].innerHTML = "Recarga Página";     
        casillaComprobar[0].onclick = "location.reload()"  

        break
     
                                               //CIERRO EL JUEGO
        case 4:  fondo.style.background="url('./img/last.gif')" // SI ES DE 4 HASTA 1       
        case 3:
        case 2:
        case 1: 
        case 0: 
            for (i = 0; i < codigo.length; i++) {
                if (valorNumUsuario[i] == codigo[i]) {                       // SI EL CODIGO INGRESADO TIENE ALGUNOS VALORES IGUALES AL NUM SECRETO
                    casillaCodigoSecreto[i].innerHTML = valorNumUsuario[i];  //SE EDITARÁ LA CASILLA DE CODIGO SECRETO Y ESCRIBIREMOS EL VALOR
                }
            }
        

    }

} // LO QUE OCURRIRÁ SI LOS VALORES INGRESADOS, NO SON CORRECTOS
else {
    // EL MENSAJE DE LAS CASILLAS ALERTARÁ
      casillaMensaje.innerHTML = "¡INGRESA UN VALOR VÁLIDO!";
      intentos --
      fondo.style.background="url('./img/looser.gif')" // SI ES DE 4 HASTA 1 
    
      
      }
}





/******************B. * FUNCION DE BOTON EN MOUSEOUT Y MOUSEOVER*/

// MOUSEFUERA
function tornaNormal(){
    casillaComprobar[0].style.backgroundColor = "#1aa1f0";
}

// MOUSESOBRE
function resaltar(){
    casillaComprobar[0].style.backgroundColor = "#1aa1f075";
}


