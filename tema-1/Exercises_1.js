//a) Primero, creamos una función que nos cree un saludo, pasa tu nombre como parámetro y devuélvelo por la consola:
function myName(name){
    console.log('hello ' + name); 
}
myName('Miguel'); //output: 'hello Miguel'

// b) Intenta retornar los valores en lugar de usar console.log:
function myName(name){
    return `hello ${name}`;
}
myName('Miguel'); //output: 'hello Miguel'

// c) Ahora, añade tu edad y concaténala al return:
function info(name, age) {
    return `hello ${name}, you're ${age} years old`;
}
info('Miguel', 36); //output: 'hello Miguel, you're 36 years old.'

// d) Iguala tu función a una variable y ejecútala:
var myFunction = function(name, age) {
    return "hello " + name + ", you're " + age + " years old";
}
var x = myFunction('Miguel', 36); //output: 'hello Miguel, you're 36 years old.'
console.log(x);

// e) Ahora declara otra funcion que devuelva tu edad y asigna su resultado a otra variable, intenta imprimir sus dos resultados concatenados:
function myName(name) {
    return name + ' ';
}
function myAge(age) {
    return age;
}
var x = myName('Ironman');
var y = myAge(40);

console.log(x + y); //output: IronMan 40

// f) Ahora, todas las variables deberían ser pasadas como parámetro a las funciones:
let param1 = 'Ironman';
let param2 = 40;
function myName(name) {
    return name + ' ';
}
function myAge(age) {
    return age;
}
myName(param1) + myAge(param2); //output: IronMan 43

// g) Intenta englobar todas las funciones en una sola funcion padre, el return de dicha función padre deberá ser la llamada a las funciones hijas:
function myInfo(param1, param2){
    function myName(param1) {
        return param1 + ' ';
    }
    function myAge(param2) {
        return param2;
    }
    var x = myName(param1);
    var y = myAge(param2);
    return x + y;
}
myInfo('Ironman', 40); //output: IronMan 40

// g1) Intenta sumarle al resultado de tu segunda funcion, un numero random del 0-10 y conviertelo todo a un solo string.
function myInfo(param1, param2){
    function myName(param1) {
        return param1 + ' ';
    }
    function myAge(param2) {
        return param2;
    }
    var num = Math.round(Math.random()*10);
    var x = myName(param1);
    var y = myAge(param2);
    
    return x + (y + num).toString();
}
myInfo('Ironman', 40); //output: IronMan 45

// h2) Ahora, limita el random de 0 a 50, Muestra un mensaje si el output age es <= 20 y otro si es de 21 - 50 (creo que este ejercicio no está muy bien redactada¿?¿):
function myInfo(param1, param2){
    function myName(name) {
        return name + ' ';
    }
    function myAge(age) {
        if (age <= 20) {
            return age + "...Sure you're Tony Stark";
        } else if(age >= 21 && age <= 50){
            return age;
        }
    }
    var x = myName(param1);
    var y = myAge(param2);
    return x + y;
}
var num = Math.round(Math.random()*50); //Así se límita el random de 0 a 50
myInfo('Ironman', num); //output: IronMan 3...Sure you're Tony Stark?

// h) Haz otra función hija que solo devuelva un número random, ese número random será el argumento que se pasará como parámetro a la función age():
function myInfo(param1, param2){
    function myName(name) {
        return name + ' ';
    }
    function myAge(age) {
        return age;
    }
    function random(num) {
        return Math.ceil((Math.random() * num));
    }
    var x = myName(param1);
    var y = myAge(random(param2));
    return x + y;
}
myInfo('Ironman', 40); //output: IronMan 'num random from 1 to 40'

// i) Al return de la función name(), concaténale otro mensaje
function myInfo(param1, param2){
    function myName(name) {
        return 'Tony Stark...aka ' + name;
    }
    function myAge(age) {
        return age + "...Sure you're Tony Stark?";
    }
    function random(num) {
        return Math.ceil((Math.random() * num));
    }
    var x = myName(param1);
    var y = myAge(random(param2));
    return x + ', ' + y;
}
myInfo('IRONMAN', 40); // output: Tony Stark...aka IRONMAN, 34...Sure you're Tony Stark?

// j) Ahora, modifica el return de la función padre para que devuelva sus datos en un mensaje amigable:
function myInfo(param1, param2){
    function myName(name) {
        return 'Tony Stark...aka ' + name;
    }
    function myAge(age) {
        return age + "...Sure you're Tony Stark?";
    }
    function random(num) {
        return Math.ceil((Math.random() * num));
    }
    var x = myName(param1);
    var y = myAge(random(param2));
    return `The first function returns: '${x}', The second function returns: '${y}'`;
}
myInfo('IRONMAN', 40); // output: The first function returns: 'Tony Stark...aka IRONMAN', The second function returns: '34...Sure you're Tony Stark?' */

// k) Modifica la primera función y la función padre para, si el parámetro introducido no es tu nombre, no siga con la segunda llamada:
function myInfo(param1, param2){
    function myName(name) {
        if (name != 'IRONMAN') {
            return name + "... You're not IRONMAN!";
        }
        return 'Tony Stark...aka ' + name;
    }
    function myAge(age) {
        return age + "...Sure you're Tony Stark?";
    }
    function random(num) {
        return Math.ceil((Math.random() * num));
    }
    var x = myName(param1);
    if (param1 != 'IRONMAN') {
        return `The first function returns: '${x}'`;
    }
    var y = myAge(random(param2));
    return `The first function returns: '${x}', The second function returns: '${y}'`;
}
myInfo('Hulk', 40); // output: "The first function returns: Hulk... You're not IRONMAN!" 