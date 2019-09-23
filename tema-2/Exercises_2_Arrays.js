// a) Declara tu nombre completo en una array y muéstralo por pantalla separando cada letra por "/":
let myName = ['Tony', 'Stark'];
console.log(myName.join('').split('').join('/').toUpperCase()); // T/O/N/Y/S/T/A/R/K

// ---> Otra manera
let myName = ['Tony Stark'];
console.log(myName.toString().replace(' ', '').split('').join('/').toUpperCase()); 

// b) Ahora solo selecciona tu apellido y muestra cada letra separada por "|":
let myName = ['Tony', 'Stark'];
console.log(myName[1].toString().split('').join('|').toUpperCase()); // S|T|A|R|K

// ---> Otra manera
let myName = ['Tony Stark'];
let myNameStr = myName.toString().toUpperCase();
let position = myNameStr.indexOf(' ');
console.log(myNameStr.slice(position+1, myNameStr.length).split('').join('|'));


// c) Ahora muestra cada letra de tu nombre con su posición (necesitarás un bucle for):
let myName = ['Tony', 'Stark'];
let myString = '';
let myArr = myName[0].toString().toUpperCase().split('');
for (let i = 0; i < myArr.length; i++) {
    myString += (i+1);
    myString += 'º ';
    myString += myArr[i];
    if (i < myArr.length-1) {
        myString += ', ';
    }
}
console.log(myString); // 1º T, 2º O, 3º N, 4º Y

// d)Como en el ejercicio anterior, pero seleccionando tu apellido:
let myName = ['Tony', 'Stark'];
let myString = '';
let myArr = myName[1].toString().toUpperCase().split('');
myArr.forEach(function(elem, i){
    myString += (i+1);
    myString += 'º ';
    myString += myArr[i];
    if (i < myArr.length-1) {
        myString += ', ';
    }
});
console.log(myString); // 5º S, 6º T, 7º A, 8º R, 9º K

// e) Puedes indicarme las iniciales de tu nombre y apellido? Como en el ejercicio h de la sección de strings:
let myName = ['Tony', 'Stark'];
let myInitials = myName[0].toString().charAt(0) + '.' + myName[1].toString().charAt(0);
console.log(myInitials); // T.S

// f) Ahora, reformula la array, introduciendo tu nombre en primera posición, tu apellido en segunda, y además añade en otra posicion tu edad. Muestra por pantalla solo tu nombre y tu edad en un solo mensaje:
let myArr = ['Tony', 'Stark', 40];
let mySelector = "My Name is " + myArr[0].toUpperCase() + " and i'm " + myArr[2] + " years old";
console.log(mySelector); // My name is TONY and i'm 40 years old

// g) Prepara una función para añadir tu City a la array, muestra un mensaje mostrando el contenido de toda la array, así aseguraremos los cambios:
let myArr = ['Tony', 'Stark', 40];
function myCityAdd(city) {
    myArr.push(city);
    return 'City added to array! => ' + myArr.join(', ');
}
console.log(myCityAdd('New York')); // City added to array! => Tony, Stark, 40, New York

// h) Crea ahora, una funcion para eliminar la variable City y asegura los cambios.:
function myCityDelete() {
    myArr.pop();
    return 'City deleted! => ' + myArr.join(', ');
} 
console.log(myCityDelete()); // City deleted! => Tony, Stark, 40

// j) Ahora, elimina el nombre y asegura los cambios: https://www.w3schools.com/jsref/jsref_shift.asp
function myNameDelete() {
    myArr.shift();
    return 'Name deleted! => ' + myArr.join(', ');
}
console.log(myNameDelete()); //Name deleted! => Stark, 40

// k) Quiero volver a introducir mi nombre pero si lo introduzco utilizando push() estará en la última posición, como podria hacer para introducirlo en la primera posición?:
function myNameAdd(name) {
    myArr.unshift(name);
    return 'Name added to array! => ' + myArr.join(', ');
}
console.log(myNameAdd('Tony')); // Name added to array! => Tony, Stark, 40, New York

// l) Ahora, declara una array con los números del 0 a 10 y muestra cada número multiplicado por dos:
let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let multByTwo = numbers.map(function(num){
    return num * 2;
});
console.log(multByTwo); //0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

// l1) Reformula la función para que puedas especificar por cual número debería multiplicar cada elemento de la array:
let num = 3; // cada número se multiplicará por 3
function multByNum(num){
    var arrayMult = numbers.map(function (x){
        return x * num;
    });
    return arrayMult;
}
console.log(multByNum(num));

// m) Podrías mostrarlos en el orden inverso?:
let num = 5;
console.log(multByNum(num).reverse());

// n) Puedes indicarme que letras se repiten de tu nombre y cuantas veces?:
let myName = 'Tony Stark';
function repeatLetters(str) {
    
    function showRepeatLetters(letters) {
        letters.forEach((letter) => console.log(`${str}, the letter '${letter[0]}': ${letter.length} times.`));
    }

    let arr = str.toUpperCase().split('').sort().join('').match(/(.)\1+/g);
    return showRepeatLetters(arr);
}
repeatLetters(myName); // Tony Stark, the letter 'T' => 2 times.

// ---> Otra Manera
let myName = 'Tony Stark';
function repeatLetters(str) {
    function showRepeatLetters(letters) {
        letters.forEach((letter) => console.log(`${str}, the letter '${letter[0]}': ${letter.length} times.`));
    }
    
    let arr = str.toUpperCase().replace(' ', '').split('').sort();
    let result = [];
    for (i = 0; i < arr.length; i++) {
        let repeat = [];
        let acc = 0;
        for (j = i; j < arr.length; j++) {
            if(arr[i] == arr[j]) {
                repeat.push(arr[i]);    
                acc++;
            } else {
                i = j-1;
                break;
            }
        }
        if (acc > 1) {
            result.push(repeat);
        }
    }
    return showRepeatLetters(result);
}
repeatLetters(myName); // Tony Stark, the letter 'T' => 2 times.

// n1) Ahora muestra por consola que letras NO se repiten y muestra tu nombre sin esas letras:
let myName = 'Tony Stark';
function repeatLetters(str) {
    function showRepeatLetters(arr) {
        let msg = arr.join('').match(/\S/g).join(', ');
        return `${str}, the letters => ${msg} are not repeated, the name is => ` + arr.join('');
    }    
    
    let arr = str.toLowerCase().split('');
    let result = [];
    arr.forEach(function(elem){
        let acc = 0;
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == elem) {
                acc++;
            }
        }
        if(acc == 1) {
            result.push(elem);
        }
    });

    return showRepeatLetters(result);
}
console.log(repeatLetters(myName)); // Tony Stark, the letters => o, n, y, s, a, r, k are not repeated, the name is => Ony Sark