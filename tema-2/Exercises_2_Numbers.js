// a) Que hora es? Declara la hora como número y devuelvela como String:
let myTime = 10.45;
let myNumberStringify = myTime.toString();
let myString = "It's ";
myString += myNumberStringify;
myString += (myTime >= 12) ? ' of afternoon' : ' of morning'
console.log(myString) // I'ts 10.45 of morning

// b) Nono, que hora exactamente? Dime la hora sin minutos!:
let myTime = 10.45;
let myNumberStringify = Math.floor(myTime).toString();
let myString = "It's ";
myString += myNumberStringify;
myString += (myTime >= 12) ? ' of afternoon' : ' of morning'
console.log(myString) // I'ts 10.45 of morning

// c) Ahora, declara tu hora y muéstrala redondeada:
console.log(Math.ceil(10.34)) // 11!

// d) Hagamos una calculadora. Primero, la suma. Crea variables con valores distintos y súmalos:
let a = 7;
let b = 3;
let sum = a + b;
console.log(sum) //10

// d1) Añade la resta...:
let rest = a - b;
console.log(sum + ' and ' + rest) //10 and 4 

// d2) La multiplicación...:
let mult = a * b;
console.log(sum + rest + mult) // 10, 4 and 21

// d3) Y, por ultimo, la división:
let div = a / b;
console.log(sum + rest + mult + div) // 10, 4, 21 and 2.3

// d4) Ahora, intenta multiplicar un número por una string, que devuelve?:
console.log(10*"hour") //Nan

// e) Podemos controlar este error con un condicional if?:
let a = 10;
let b = "hour";
let mult = a * b;
if (isNaN(mult)) {
    console.log("You can't do this operation!");
}