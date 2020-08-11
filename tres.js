/*
3)Nos ingresan una cantidad indeterminada de estadías de  vacaciones, 
validando los datos ingresados. 
sexo del titular ,lugar ( “bariloche”, “cataratas” o “salta”),
temporada(“otoño”,”invierno, “verano,”primavera”),
cantidad de personas que viajan.
informar:
a)el lugar más elegido
b)el sexo de titular que lleva más pasajeros.
c)el promedio de personas por viaje,  que viajan en invierno
*/
function mostrar()
{
	let sexoTitular;
	let lugar;
	let temporada;
	let personas;
	let acumPersonasInv = 0;
	let contPersonasInv = 0;
	let promedioPersonasInv = 0;
	let cantidadPeronas = 0;
	let acumBariloche = 0;
	let acumCataratas = 0;
	let acumSalta = 0;
	let acumPersonasF = 0;
	let acumPersonasM = 0;
	let lugarMasElegido;
	let seguir = "s";


 do{

	personas = parseInt(prompt("Por favor ingrese la cantidad de personas a viajar: "));

	sexoTitular = prompt("Por favor indique el sexo del titular de la compra 'F' o 'M': ").toLowerCase();
		while(!(sexoTitular == "f" || sexoTitular == "m")){
			sexoTitular = prompt("ERROR! Por favor indique el sexo del titular de la compra 'F' o 'M': ").toLowerCase();
		}

	lugar = prompt("indique su destino 'Bariloche' , 'Cataratas' o 'Salta': ").toLowerCase();
		while(!(lugar == "cataratas" || lugar == "bariloche" || lugar == "salta")){
			lugar = prompt("indique su destino 'Bariloche' , 'Cataratas' o 'Salta': ").toLowerCase();
		}
		
	temporada = prompt("Indique la temporada 'Verano' , 'Primavera' , 'Otoño' o 'Invierno' : ").toLowerCase();
		while(!(temporada == "verano" || temporada == "primavera" || temporada == "otoño" || temporada == "invierno")){
			temporada = prompt("ERROR! Indique la temporada 'Verano' , 'Primavera' , 'Otoño' o 'Invierno' : ").toLowerCase();
		}

		
	if(lugar == "bariloche"){
		acumBariloche++;

	} else if(lugar == "cataratas"){
		acumCataratas++;
	  }

	else{
		  acumSalta++;
	}


	
	if(acumBariloche > acumCataratas && acumBariloche > acumSalta){
		lugarMasElegido = "Bariloche";

	} else if(acumCataratas > acumSalta){
		lugarMasElegido = "Cataratas";
	}

	else{
		lugarMasElegido = "Salta";	
	}



	if(sexoTitular == "f"){
	   acumPersonasF += personas;

	} else if(sexoTitular == "m"){
		acumPersonasM += personas;
	}



	if(acumPersonasF > acumPersonasM){
		cantidadPeronas = "El sexo femenino"
	}
	else{
		cantidadPeronas = "El sexo masculino"
	}



	if(temporada == "invierno"){
		acumPersonasInv += personas;
		contPersonasInv++;
	}

	seguir = prompt("presione 'S' para cargar mas personas o presione cualquier tecla para continuar");

} while(seguir == "s")


 promedioPersonasInv = acumPersonasInv / contPersonasInv;
 
 console.log("El lugar mas elegido es: " + lugarMasElegido);
 console.log("El sexo titular que lleva mas pasajeros es: " + cantidadPeronas);
 console.log("El promedio de las personas que viajan en invierno " + promedioPersonasInv);



}
