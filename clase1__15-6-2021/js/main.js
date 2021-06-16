//Const ;
const nombre = prompt(`Ingrese su nombre`);
const apellido = prompt(`Ingrese su apellido`);

//functions

/* saludar() */
const saludar =  () => {

    alert(`Hola ${nombre} ${apellido}`);
};
/* /saludar() */

/* suma() */
const suma = () => {

    let numero1 = parseInt(prompt(`Ingrese un numero`));
    let numero2 = parseInt(prompt(`Ingrese un numero`));
    
    alert(`La suma es ${numero1+numero2}`);
};
/* /suma() */

//llamada de las funciones

//Function saludar
saludar();

//Dunction suma
suma();


