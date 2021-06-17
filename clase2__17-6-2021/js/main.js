//const
const edad = parseInt(prompt("Ingrese su edad para determinar si puede votar  "));

// <!-- puedoVotar() -->
const puedoVotar = () =>{

    if (edad === 18) {
      document.write(`🎇🎇¡¡Felicidades!! ya eres mayor de edad y puedes votar 🎇🎇`);
    } else if (edad > 18) {
        document.write(`Esta no es tu primera ves 👻 , ya nos estamos haciendo viejos `);
    } else {
        document.write(`Disculpa ☹️ , todavia eres menor de edad 🔞 `);
    }
};
// <!-- / puedoVotar() -->

// <!-- llamada de la funcion -->
puedoVotar();
// <!-- / llamada de la funcion -->