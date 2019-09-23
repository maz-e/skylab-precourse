// a) Declara tu nombre y muéstralo por consola:
let name = 'Miguel';
console.log(name);

// b) Declara tu edad y muéstralo por consola:
let age = 36;
console.log(age);

/* c) Declara tu nombre, tu apellido y tu edad 
en un array en diferentes posiciones y muéstrala por consola: */
let info = ['Miguel Angel', 'Zapatero', 36];
console.log(info);

// d) Declara tu nombre y tu edad dentro de un objeto y muéstralo por consola:
let data = {
    name: 'Miguel Angel',
    age: 36
};
console.log(data);

/* e) Ahora utiliza el array que has creado anteriormente 
para recorrerlo y mostrar una a una todas las posiciones del array: */
for (let i = 0; i < info.length; i++) {
    console.log(info[i]);
}

// f) Crea una estructura condicional que imprima el número mayor entre dos números:
let a = 25;
let b = 12;
if (a > b) {
    console.log(a);
}

/* f1) Crea otra condicion else if para contemplar 
la posibilidad de que los dos números sean iguales: */
let a = 25;
let b = 25;
if (a > b) {
    console.log(a);
} else if (a === b) {
    console.log('The numbers are equal');
}

/* g) Recorre un array de 5 números y cuando llegues 
a la mitad muestra el siguiente mensaje: 'We are in the middle of loop': */
let arrNum = [12,23,8,1735,9.2];
for (let i = 0; i < arrNum.length; i++) {
    if (i > (arrNum.length/2)) {
        console.log('We are in the middle of loop');
        break;
    }
}

/* g1) Declara tu nombre y tu edad en dos variables
y crea un condicional para, en caso de no coincidir con tus datos, mostrar un error: */
let myName = 'Miguel';
var myAge = 36;
if (myName !== 'Miguel' || myAge !== 36) {
    console.log("This is not you!");
} else {
    console.log("Hi!! Glad to see u again!");
}

// Otra manera de resolver
if (myName === 'Miguel' && myAge === 36) {
    console.log("Hi!! Glad to see u again!");
} else {
    console.log("This is not you!");
}

/* h) Declara tu nombre y DNI en dos variables 
y crea un condicional para, en caso de que coincida uno de los dos datos, muestre un mensaje: */
let myName = 'Miguel Angel';
let myId = '00000000Z';
if (myName == 'Miguel Angel' || myId == '00000000Z') {
    console.log("Permission granted");
} else {
    console.log("Try again.");
}

/* i) Crea un array, introduce los datos anteriores y unos cuantos más 
de forma que al recorrer el array muestre un mensaje cuando encuentre tus datos: */
let myData = ['Miguel', '00000000Z', 36, 1.70]
for (let i = 0; i < myData.length; i++) {
    if (myData[i] == 'Miguel' || myData[i] == '00000000Z' || myData[i] == 36 || myData[i] == 1.70) {
        console.log("We find your data! " + myData[i]);
        // break;
    }
}

// Otra manera de resolver¿?¿?
for (let i = 0; i < myData.length; i++) {
    switch (myData[i]) {
        case 'Miguel':
            console.log("We find your data! " + myData[i]);
            break;
        case '00000000Z':
            console.log("We find your data! " + myData[i]);
            break;
        case 36:
            console.log("We find your data! " + myData[i]);
            break;
        case 1.70:
            console.log("We find your data! " + myData[i]);
            break;
        default:
            console.log("Data not found!");
            break;
    }
}

/* j) Crea un array de strings y recorre cada una de esos valores. 
Imprime cada caracter en una línea distinta: */
let arr = ["hello","world","Skylab"];
for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j] + '\n');
    }
}