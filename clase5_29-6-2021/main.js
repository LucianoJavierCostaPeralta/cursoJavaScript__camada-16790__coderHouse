//Declarando constantes
const VALOR_NUMERO_RANDOM = 1000000000,
arrayProductos = [];

// Declarando lets
let arrayOrdenarProductoPorPrecio = [] ,
nombre , apellido ;

//Clase Producto
class Producto {

  //Metodo Constructor
  constructor(nombre, precio) {
    //Atributos

    this._idProducto = Math.floor((Math.random() * VALOR_NUMERO_RANDOM));


    this._nombre = nombre;

    this._precio = precio;
  }

  //Metodos GETER

  get idProducto() {
    return this._idProducto;
  }

  get nombre() {
    return this._nombre;
  }

  get precio() {
    return this._precio;
  }

  //Metodos SETERS

  set nombre(nombre) {
    this._nombre = nombre;
  }

  set precio(_precio) {
    this._precio = precio;
  }

  //Metodo toString

  toString() {
    return `idProducto : ${this._idProducto}
nombre : ${this._nombre} 
precio : $ ${this._precio} \n`;
  }
}

// Utilización del metodo push , para agregar objetos al array ' productos '

arrayProductos.push(new Producto("Corona", 2500));
arrayProductos.push(new Producto("Mantel", 2000));
arrayProductos.push(new Producto("Plato de sitio", 3000));
arrayProductos.push(new Producto("Vela", 500));
arrayProductos.push(new Producto("Mate + Bombilla", 1800));

//Seccion de funciones 

//Imprecion del contenido del array
const impresionDelArrayProductos = () => {
  console.log(`Imprimiendo el array`);
  
  for (let index = 0; index < arrayProductos.length; index++) {
    console.log(` ${arrayProductos[index].toString()} `);
  }
};


// impresionDelArrayProductos() ; 

const ordenarPorPrecio = () => {

  arrayOrdenarProductoPorPrecio = arrayProductos.map(elemento => elemento);

  arrayOrdenarProductoPorPrecio.sort(
    function (a, b) {
      return a.precio - b.precio;


    }
  );

  console.log(`imprimiendo el array , pero segun su precio `);
  

  for (let index = 0; index < arrayOrdenarProductoPorPrecio.length; index++) {
    console.log(`${arrayOrdenarProductoPorPrecio[index].toString()}  `);

  }
}

// Funcion ingreso e imprecion de datos del usuario

const user = (nombre , apellido) => {
  nombre = prompt(`Ingrese nombre`);
  apellido = prompt(`Ingrese apellido`);

  alert(`Hola ${nombre} ${apellido}`);
}

// Pidiendo datos al usuario
user();

//imprimiendo array
impresionDelArrayProductos();

//Ordenando el array del precio menor al mas caro 
ordenarPorPrecio() ;