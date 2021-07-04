alert("Bienvenido/a a verdulería Pepito");
//Declaro la funcion
const menuPrincipal = () => {
    //Declaro la variable
    let producto = prompt(`Ingrese el nombre de la fruta que desea llevar 
Menu : 
* Naranjas
* Manzanas
* Platanos
* Cerezas
* Mangos
* Papayas`);

    switch (producto) {
        case "Naranjas":
            alert(
                "El kilogramo de naranjas cuesta $80." + "\n Gracias por su compra "
            ); //instrucciones

            break; //fin de la instruccion
        case "Manzanas":
            alert(
                "El kilogramo de manzanas cuesta $60." + "\n Gracias por su compra "
            ); //instrucciones

            break; //fin de la instruccion
        case "Platanos":
            alert(
                "El kilogramo de platanos cuesta $70." + "\n Gracias por su compra "
            ); //instrucciones

            break;
        case "Cerezas":
            alert(
                "El kilogramo de cerezas cuesta $120." + "\n Gracias por su compra "
            );

            break;
        case "Mangos":
            alert("El kilogramo de mangos cuesta $83." + "\n Gracias por su compra ");

            break;
        case "Papayas":
            alert(
                "El kilogramo de mangos y papayas cuesta $500." +
                "\n Gracias por su compra "
            );

            break;
        default:
            alert("Lo lamentamos, por el momento no disponemos de " + producto + ".");
            break;
    }
};

menuPrincipal();