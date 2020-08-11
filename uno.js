/*
1)De 5  personas que ingresan al hospital se deben tomar y 
validar los siguientes datos.
nombre ,peso, sexo y edad.
a)informar la cantidad de mujeres.
b)la edad promedio en total.
c)el hombre mas pesado.
pedir datos por prompt y mostrar por document.write o console.log
*/
function mostrar()
{
	let nombre;
	let peso;
	let sexo;
	let edad;
	let acumuladorMujeres = 0;
	let acumuladorEdad = 0;
	let edadPromedioTotal;
	let mayorPeso = 0;
	let nomHombreMayorPeso;

	for(let i = 0; i < 5; i++  ){

		nombre = prompt("Ingrese nombre: ");
		peso = parseInt(prompt("Ingrese peso en KG: "));

		edad = parseInt(prompt("Ingrese edad: "));

		sexo = prompt("Ingrese sexo 'F' o 'M': ").toLowerCase();
		while(!(sexo == "m" || sexo == 'f')){
			sexo = prompt("ERROR! Ingrese sexo 'F' o 'M': ");
		}

		if(sexo == "f"){
			acumuladorMujeres++;
		}

		if(sexo == "m" && mayorPeso < peso){
			nomHombreMayorPeso = nombre;
		}

		acumuladorEdad += edad;
	}

	edadPromedioTotal = acumuladorEdad / 5;

	console.log("La cantidad de mujeres es: " + acumuladorMujeres);
	console.log("La edad promedio es: " + edadPromedioTotal);
	console.log("El hombre con mayor peso es: " + nomHombreMayorPeso);


}
