//const
const CANTIDAD_DE_REPETICIONES = 10 ;

//let 
let numero ,
acumulador = 0 ; 

// <!-- sumaIterativa() --> 
const sumaIterativa = () => {

    // ciclo for 
    for (let index = 0; index < CANTIDAD_DE_REPETICIONES ; index++) {
        
        numero = parseInt(prompt("Ingrese un numero "));

        acumulador += numero ; 
        
    };

    //Imprimiendo el resultado del acumulador 
    document.write(`El valor del acumulador es ${acumulador} `); 
};
// <!-- / sumaIterativa() -- > 

// <!-- Llamada de la funcion -->
sumaIterativa();
// <!-- / Llamada de la funcion -->
