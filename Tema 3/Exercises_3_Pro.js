// Ejercicio k) del Tema 1
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

// a) Vamos a complicarlo un poco... El número random debería generarse en otra función separada del padre. Retorna a la funcion padre y concaténalo en el return padre.
function random(num) {
    return Math.ceil((Math.random() * num));
}

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
    var x = myName(param1);
    if (param1 != 'IRONMAN') {
        return `The first function returns: '${x}'`;
    }
    var y = myAge(random(param2));
    return `The first function returns: '${x}', The second function returns: '${y}'`;
}
myInfo('Hulk', 40);

// b) Refactorizemos nuestro código dejando todas las funciones separadas del padre, éste último se encargará de llamarlas todas y mostrar sus resultados.
function random(num) {
    return Math.ceil((Math.random() * num));
}

function myName(name) {
    if (name != 'IRONMAN') {
        return name + "... You're not IRONMAN!";
    }
    return 'Tony Stark...aka ' + name;
}

function myAge(age) {
    return age + "...Sure you're Tony Stark?";
}

function myInfo(param1, param2){
    var x = myName(param1);
    if (param1 != 'IRONMAN') {
        return `The first function returns: '${x}'`;
    }
    var y = myAge(random(param2));
    return `The first function returns: '${x}', The second function returns: '${y}'`;
}
myInfo('Hulk', 40);

// c) Intenta hacer push de todos los resultados de las funciones a una array declarada en el padre, muestra los resultados de esta array como siempre.
function random(num) {
    return Math.ceil((Math.random() * num));
}

function myName(name) {
    if (name != 'IRONMAN') {
        return name + "... You're not IRONMAN!";
    }
    return 'Tony Stark...aka ' + name;
}

function myAge(age) {
    return age + "...Sure you're Tony Stark?";
}

function myInfo(param1, param2){
    let arr = [];
    arr.push(myName(param1));
    if (param1 != 'IRONMAN') {
        return `The first function returns: '${arr[0]}'`;
    }
    arr.push(myAge(random(param2)));
    return `The first function returns: '${arr[0]}', The second function returns: '${arr[1]}'`;
}
myInfo('Hulk', 40);

// d) Crea una funcion que llame a nuestra funcion father(), ésta, a parte de llamarla, deberá hacer otro push "hello from the dark side..." a la array que crea father(). Muestra toda la array completa.
function random(num) {
    return Math.ceil((Math.random() * num));
}

function myName(name) {
    if (name != 'IRONMAN') {
        return name + "... You're not IRONMAN!";
    }
    return 'Tony Stark...aka ' + name;
}

function myAge(age) {
    return age + "...Sure you're Tony Stark?";
}

function myInfo(param1, param2){
    let arr = [];
    arr.push(myName(param1));
    arr.push(myAge(random(param2)));
    return arr;
}

function grandFather(param1, param2) {
    let result = myInfo(param1, param2);
    result.push("hello from the dark side...");
    return result.join(', ');
}

grandFather('Hulk', 40);

// e) Llama a ésta nueva función dos veces, muestra sus resultados por pantalla y compara sus randomNums, mostrando un mensaje indicando cual es mayor. El nombre pasado por parámetro también deberá ser random entre una array de nombres, con lo cual, también deberás refactorizar las funciones hijas.
function random(num) {
    return Math.ceil((Math.random() * num));
}

function myName(name) {
    let num = Math.ceil((Math.random() * name.length-1));
    return name[num];
}

function myAge(age) {
    return age;
}

function myInfo(param1, param2){
    let arr = [];
    arr.push(myName(param1));
    arr.push(myAge(random(param2)));
    return arr;
}

function grandFather(param1, param2) {
    var selectedName = myInfo(param1, param2);
    var selectedName2 = myInfo(param1, param2);
    if(selectedName[1] > selectedName2[1])
        return 'El randomNum de ' + selectedName[0] + ' es mayor que el de ' + selectedName2[0];
    else if(selectedName[1] < selectedName2[1]) {
        return 'El randomNum de ' + selectedName2[0] + ' es mayor que el de ' + selectedName[0];
    } else {
        return 'El randomNum de ' + selectedName[0] + ' y ' + selectedName2[0] + ' son iguales';
    }
}
let names = ['hulk', 'ironMan', 'spiderman', 'thor', 'vision', 'CaptainAmerica'];
grandFather(names, 40);

// e1) En lugar de retornar los valores como una array, prepara tus funciones para que devuelvan los resultados como OBJECTS. Muestra por pantalla los objetos sin estilizar el output.
function random(num) {
    return Math.ceil((Math.random() * num));
}

function myName(name) {
    let num = Math.ceil((Math.random() * name.length-1));
    return name[num];
}

function myAge(age) {
    return age;
}

function myInfo(param1, param2){
    let result = {name: myName(param1), age: myAge(random(param2))};
    return result;
}

function grandFather(param1, param2) {
    var selectedName = myInfo(param1, param2);
    var selectedName2 = myInfo(param1, param2);
    if(selectedName.age > selectedName2.age)
        return 'El randomNum de ' + selectedName.name + ' es mayor que el de ' + selectedName2.name;
    else if(selectedName.age < selectedName2.age) {
        return 'El randomNum de ' + selectedName2.name + ' es mayor que el de ' + selectedName.name;
    } else {
        return 'El randomNum de ' + selectedName.name + ' y ' + selectedName2.name + ' son iguales';
    }
}
let names = ['hulk', 'ironMan', 'spiderman', 'thor', 'vision', 'CaptainAmerica'];
grandFather(names, 40);


// f) Muestra los resultados de los OBJECTS recorriéndolos y mostrando los valores de una forma amigable.
function random(num) {
    return Math.ceil((Math.random() * num));
}

function myName(name) {
    let num = Math.ceil((Math.random() * name.length-1));
    return name[num];
}

function myAge(age) {
    return age;
}

function myInfo(param1, param2){
    let result = {name: myName(param1), age: myAge(random(param2))};
    return result;
}

function grandFather(param1, param2) {
    var selectedName = myInfo(param1, param2);
    var selectedName2 = myInfo(param1, param2);
    if(selectedName.age > selectedName2.age)
        console.log('El randomNum de ' + selectedName.name + ' es mayor que el de ' + selectedName2.name);
    else if(selectedName.age < selectedName2.age) {
        console.log('El randomNum de ' + selectedName2.name + ' es mayor que el de ' + selectedName.name);
    } else {
        console.log('El randomNum de ' + selectedName.name + ' y ' + selectedName2.name + ' son iguales');
    }
    let arr = [];
    let result = '';
    arr.push(selectedName);
    arr.push(selectedName2);
    arr.forEach(elem => result += elem.name + ' => ' + elem.age + '\n');
    return result;
    
}
let names = ['hulk', 'ironMan', 'spiderman', 'thor', 'vision', 'CaptainAmerica'];
grandFather(names, 40);