//EJERCICIO 1 - FUNCION PIRAMIDE DE NUMEROS

let numero = parseInt(prompt("Ingrese un Numero: "));        //------Solicito a Usuario que ingrese un Nro. y Parseo el dato ingresado para convertirlo a Num. y poder enviarlo a la Funcion-----

piramide(numero);                                           //------Llamo a la Funcion, enviandole el Numero ingresado por el Usuario------

function piramide(numero) {                                //-----Creo la Funcion que dara como resultado una piramide de Numeros-----
  
  //For para recorrer las Filas  
  for (let i = 1; i <= numero; i++){
    
    let resultado_concatenado = '';
    
    //For para recorrer las Columnas
    for (let j = 1; j <= i; j++) {
      
        resultado_concatenado += j + ' ';
    }
    
    console.log(resultado_concatenado);
  }
}


//EJERCICIO 2 - FUNCION ARRAY DE IGUALES

function elementosIguales(Array1, Array2){              //-----Creo la Funcion que comparara 2 Arrays enviados como Parametros-----

    //---Defino una Vble tipo Array para guardar el Resultado
    let resultado = [];

    //---Recorro el Array 1 p/verificar si se cumple la condicion del If
    for (let i = 0; i < Array1.length; i++) {
        
        //---Pregunto si el valor del 1er Array del indice actual esta incluido en el 2do Array----
        if (Array2.includes(Array1[i])) {
            
            //---Si el valor del indice actual cumple la condicion, entonces a ese valor lo agrego al Array Resultado
            resultado.push(Array1[i])
        }        
    }
    return resultado;
}

// ---Defino 2 Arrays

//const Array1 = [2,5,89,6,4,7];
//const Array2 = [89,35,2,7,4,2];
//const Array1 = ['rojo', 'azul', 'amarillo'];
//const Array2 = ['blanco', 'negro', 'rojo'];        
const Array1 = [4, 3, true, 'manzana'];
const Array2 = ['pera', 3, false, true, 3, true];

//----Llamo a la funcion, enviandole los 2 Arrays previamente definidos
console.log(elementosIguales(Array1, Array2));



//EJERCICIO 3 - CARRITO DE COMPRAS CON FUNCIONES

class Carritos{                                                                      //PUNTO 3.1 - Creacion de Clase "Carritos"
  productos = [];
  montoTotal = 0;
  cantidadProductos = 0;

  constructor(nombreProducto, precioUnitario, unidades) {
    this.productos.push({ nombre: nombreProducto, precio: precioUnitario, cantidad: unidades });
    this.montoTotal = precioUnitario;
    this.cantidadProductos = unidades;
  }

  agregarProducto(producto, precio, unidades){                                      //PUNTO 3.2 - Creacion de Metodo para agregar productos al carrito
      
    if (this.productos.some(p => p.nombre === producto)) {                          //PUNTO 3.3 - Validacion de Productos repetidos en el Carrito de Compras
      
      console.log(`El producto ${producto} ya está en el carrito`);
    
    } else {
      
      this.productos.push({ nombre: producto, precio, cantidad: unidades });
      this.cantidadProductos += unidades;
      this.montoTotal += precio * unidades;

    }
  }
}

const CarritoDeCompras = new Carritos("Leche", 10, 1);              //--- Se crea un Objeto "CarritoDeCompras" con clase Carritos

CarritoDeCompras.agregarProducto("Azucar", 5, 2);                   //--- Agrego productos al Carrito de Compras
CarritoDeCompras.agregarProducto("Cafe", 50, 1);
CarritoDeCompras.agregarProducto("Pan", 50, 3);
CarritoDeCompras.agregarProducto("Azucar", 50, 3);

console.log(CarritoDeCompras);                                    //--- Muestro el contenido del Objeto (Carrito de Compras)