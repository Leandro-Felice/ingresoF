/*
2)De una compra debes ingresar una cantidad indeterminada de productos,
 validando los siguientes datos:
marca, precio, peso en kilogramos, tipo(sólido o líquido)
a)informar el peso total de la compra.
b)la marca del más caro de los líquidos
c)la marca del más barato de los sólidos
*/function mostrar()
{

  let peso;
  let pesoTotal = 0;
  let MarcaMasCaraLi;
  let MarcaMasbarataSol;
  let marca;
  let precio;
  let precioSolidos = 0;
  let precioLiquidos = 0;
  let tipo;
  let seguir = "s";
  let flag = 0;
  
  do{

      marca = prompt("Ingrese marca del producto: ").toLowerCase();
      tipo = prompt("Ingrese 'SOLIDO' o 'LIQUIDO': ").toLowerCase();
      precio = parseInt(prompt("Ingrese precio del procuto: "));
      peso = parseInt(prompt("Ingrese peso en KG: "));
    
      while(!(tipo == "solido" || tipo == "liquido")){
        tipo = prompt("ERROR! Ingrese 'SOLIDO' o 'LIQUIDO': ").toLowerCase();
      }

      if(tipo == "liquido" && precioLiquidos < precio){
          MarcaMasCaraLi = marca;
          precioLiquidos = precio;
      }

      if(flag == 0 || (tipo == "solido" && precioSolidos > precio)){
        MarcaMasbarataSol = marca;
        precioSolidos = precio;
        flag = 1;
    }

    pesoTotal += peso;

    seguir = prompt("presione 'S' para cargar mas productos o presione cualquier tecla para continuar");

  } while(seguir == "s");

  console.log("El peso total de la compra es: " + pesoTotal);
  console.log("La marca mas cara de los productos liquidos es: " + MarcaMasCaraLi);
  console.log("La marca mas barata de los productos solido es: " + MarcaMasbarataSol);

}
