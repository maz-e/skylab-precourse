// a) Escribe una funcion en la que, declarando una array con los numeros del 1 al 9, muestres por pantalla los numeros unidos por parejas (1-2, 2-3, 3-4...), además, cada elemento de la pareja deberá estar multiplicada por 2:

function showNums(){
    var nums = [1,2,3,4,5,6,7,8,9];
    for(var i = 0; i < nums.length-1; i++){
        console.log(i+1 + 'ª pareja => ' + nums[i]*2 + ' - ' + nums[i+1]*2);
    }
}

// output =>
//1ª pareja 2 - 4
//2ª pareja 4 - 6
//3ª pareja 6 - 8
//4ª pareja 8 - 10
//5ª pareja 10 - 12
//6ª pareja 12 - 14
//7ª pareja 14 - 16
//8ª pareja 16 - 18
// Hint: Métodos útiles => push() - join() - map()

// a1) La funcion debería aceptar la array a tratar como argumento:
let nums = [1,2,3,4,5,6,7,8,9];
function showNums(){
    let nums = arguments;
    for(var i = 0; i < nums.length-1; i++){
        console.log(i+1 + 'ª pareja => ' + nums[i]*2 + ' - ' + nums[i+1]*2);
    }
}
showNums(...nums);

// a2) Pasa también el numero a multiplicar a la función como argumento:

let nums = [1,2,3,4,5,6,7,8,9,12]; //<= el último número de arguments lo podemos tratar como el numero multiplicador...
function showNums() {
    let mult = arguments[arguments.length-1];
    let nums = arguments;
    console.log('El numero escogido es: ' + mult);
    for(var i = 0; i < nums.length-1; i++){
        console.log(i+1 + 'ª pareja => ' + nums[i]*mult + ' - ' + nums[i+1]*mult);
    }
}
showNums(...nums);
// output =>
// El numero escogido es: 12
// 1ª pareja 12 - 24
// 2ª pareja 24 - 36
// 3ª pareja 36 - 48
// 4ª pareja 48 - 60
// 5ª pareja 60 - 72
// ...

// a3) La función debería ser capaz de recibir el numero de parejas que queremos devolver del total:
let nums = [1,2,3,4,5,6,7,8,9,12]; // <= ahora, el último numero lo podriamos tomar como el delimitador...
function showNums() {
    let index = arguments[arguments.length-1];
    let mult = arguments[arguments.length-2];
    let nums = arguments;
    console.log('El numero escogido es: ' + mult);
    console.log('Se quieren mostrar las ' + index + ' primeras parejas');
    for(var i = 0; i < index; i++){
        console.log(i+1 + 'ª pareja => ' + nums[i]*mult + ' - ' + nums[i+1]*mult);
    }
}
showNums(...nums);
// output =>
// El numero escogido es: 12
// Se quieren mostrar las 3 primeras parejas
// 1ª pareja 12 - 24
// 2ª pareja 24 - 36
// 3ª pareja 36 - 48