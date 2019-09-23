// a) Puedes contar cuantas letras tiene tu nombre?:
let myName = 'Tony';
console.log('My name has ' + myName.length + ' letters'); //My Name has 4 letters 

// b) Añade tu apellido e indica en que posición del string empieza (prueba a buscar el espacio entre el nombre y el apellido):
let myString = 'Tony Stark';
let position = myString.indexOf(' ') + 1;
console.log('Your last name starts on position ' + position); //Your last name starts on position 5
console.log('Your last name starts on position ' + myString.indexOf('Stark')); 

// c) Ahora, con tu apellido y nombre en la misma variable, muestra solo el nombre (lo que haya antes del espacio):
let myString = 'Tony Stark';
console.log('My name is ' + myString.slice(0, myString.indexOf(' '))) //My Name is Tony 
let myArray = myString.split(' ');
console.log('My name is ' + myArray[0]);

// d) Ahora, solo tu apellido:
let myString = 'Tony Stark';
let myArray = myString.split(' ');
console.log('My lastname is ' + myString.slice(myString.indexOf(' ')+1, myString.length));
console.log('My lastname is ' + myArray[1]); //My lastname is Stark

// d1) Iguala el resultado a una variable nueva e imprímela por pantalla:
let myFirstString = 'Tony Stark';
let myNewString = myFirstString.substring(0, myFirstString.indexOf(' '));
console.log(myFirstString +", " + myNewString) //Tony Stark, Stark

// e) Ahora, reemplaza tu nombre por "Mr/Ms" y vuelve a mostrar la variable con los cambios:
let myFirstString = 'Tony Stark';
let myNewString = myFirstString.replace('Tony', 'Hello, Mr.');
console.log(myNewString) //Hello, Mr. Stark 

// f) Selecciona tu apellido y transfórmalo a MAYÚSCULAS:
let myString = 'Tony Stark';
let mySelection = myString.slice(myString.indexOf(' ')+1, myString.length);
console.log('My lastname is ' + mySelection.toUpperCase()) //My lastname is STARK

// g) Ahora declara una variable nueva e igualala a la anterior variable sumándole, además, un mensaje:
let myFirstString = 'Tony';
let something = myFirstString + " is awesome"
console.log(something) //"Tony is awesome"

// h) Ahora, puedes seleccionar la inicial de tu nombre y apellido y mostrarlas por pantalla?:
let myString = 'Tony Stark';
let myArray = myString.split(' ');
let myFirstLastnameLetters = myArray[0].charAt(0) + '.' + myArray[1].charAt(0);
console.log(myFirstLastnameLetters) // T.S