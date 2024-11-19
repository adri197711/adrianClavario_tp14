let electrodomesticos = ["televisor", "heladera", "lavarropas","licuadora","cafetera","ventilador"];


//a-
console.log(electrodomesticos[0]);
console.log(electrodomesticos[1]);
console.log(electrodomesticos[2]);
console.log(electrodomesticos[3]);
console.log(electrodomesticos[4]);
console.log(electrodomesticos[5]);

//b-
let eliminado = electrodomesticos.shift();
console.log(eliminado);
console.log(electrodomesticos);
electrodomesticos.push(eliminado);
console.log(electrodomesticos);

//c-
electrodomesticos.push('tostadora', 'afeitadora');
console.log(electrodomesticos);

//d-
console.log(`
  El array tiene ${electrodomesticos.length} elementos.
  `);
  
//e-
const electrodomestico = "licuadora";
electrodomesticos.includes(electrodomestico) ? console.log('Producto encontrado :' + electrodomestico) : console.log('El producto buscado no existe');

//f-
 
let string = electrodomesticos.join(", ")
console.log(string);


//g-
console.log('La cantidad de elementos en la cadena de texto es: ', string.length);

//h-
let nuevo = string.replace("cafetera","secador de pelo");
console.log(nuevo);

//i-
let nuevoArray = nuevo.split(",");
console.log(nuevoArray);
