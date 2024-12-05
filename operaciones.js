// paso 1: declaracion de variables 

let num1,num2;
let operacion;

// paso 2: funcion para realizar operacion

function realizarOperaciones(num1,num2, operacion) { //inicializacion de varibles y funciones
    if (operacion === "suma") { //condicional para la suma
        return num1 + num2 ;  //operacion para sumar
    } else if (operacion === "resta") { // condiconal para la resta
        return num1 - num2; 
    } else if (operacion === "multiplicacion"){ 
        return num1 * num2; 
    } else if (operacion === "division"){
        if (num2 === 0){
         return "error division por cero no permitida";
        }   
        return num1 / num2; 
    } else {
        return "operacion no valida"
    }

}
 //paso 3 bucle para realizar multiples multiplicaciones

 while (true){
    //Solicitar al usuario que ingrese el primer numero 
    num1 = parseFloat(prompt("Ingrese el primer numero (o escriba salir para terminar)"));

    //si la entrada no es un numero termine el buque
    if(isNaN(num1)){
        console.log("Adios");
        break; 
    }
    //solicitar al usuario que ingrese el numero 2 
    num2 = parseInt(prompt("Ingrese el segundo numero"));

    //si el segundo numero no es valido 
    if (isNaN(num2)){
        console.log("por favor ingrese un numero valido");
        continue; //regresar al inicio del bucle
    }

//solicite el usuario que ingrese la operacion deseada
operacion = prompt("ingrese la operacion (suma, resta, division, multiplicacion, salir)");
    if (operacion === "salir"){
        console.log ("Adios.)");
        break;
    }
        const resultado= realizarOperaciones(num1, num2, operacion.toLowerCase());
        console.log(`resultado: ${resultado}`);

}