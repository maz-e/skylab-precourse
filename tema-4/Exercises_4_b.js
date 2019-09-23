// b) Volvemos a la numeros... Podrias hacer una funcion que mostrara por pantalla la serie Fibonacci? https://www.mathsisfun.com/numbers/fibonacci-sequence.html
function fibo() {
    let a = 0;
    let b = 1;
    for (let i = 3; i < 25; i++) {
        let num = a + b;
        if(a == 0) {
            console.log(a);
            console.log(b);
        }
        a = b;
        b = num;
        console.log(num);
    }
}
// output: 0 1 1 2 3 5 8...

// b2) Puedes añadir además, la posición de cada resultado?
function fibo() {
    let a = 0;
    let b = 1;
    for (let i = 3; i < 25; i++) {
        let num = a + b;
        if(a == 0) {
            console.log(a + ' - pos 1º');
            console.log(b + ' - pos 2º');
        }
        a = b;
        b = num;
        console.log(num + ' - pos ' + i + 'º');
    }
}

// b3) Ahora, inserta los resultados en una array y muestralos todos juntos de una manera amigable.
function fibo() {
    let arr = [0, 1];
    for (let i = 0; i < 100; i++) {
        arr.push(arr[i] + arr[i+1]);
    }
    let result =  arr.map(function(elem, i){
        return elem + ' - pos ' + (i+1) + 'º\n';
    })
    return result.join('');
}


// b4) Ahora, el usuario debería ser capaz de especificar la posición de la serie hasta donde queremos llegar.
function fibo(num) {
    let arr = [0, 1];
    for (let i = 0; i < num-2; i++) {
        arr.push(arr[i] + arr[i+1]);
    }
    let result =  arr.map(function(elem, i){
        return elem + ' - pos ' + (i+1) + 'º\n';
    })
    return result.join('');
}
fibo(10);
//... 55 - pos 10º

// b5) Ahora, muestra los resultados en forma piramidal:

function fiboPyramid(num){
    let arr = [0, 1];
    for (let i = 0; i < num-2; i++) {
        arr.push(arr[i] + arr[i+1]);
    }
    arr.forEach(function(num, i, arr){
        console.log(arr.slice(0, i+1).join(' '));
    });
    for (let i = arr.length-1; i > 0; i--) {
        console.log(arr.slice(0, i).join(' '));
    }
}
fiboPyramid(7);
// Output:
/* 0
0 1
0 1 1
0 1 1 2
0 1 1 2 3
0 1 1 2 3 5
0 1 1 2 3 5 8 //To position. num
0 1 1 2 3 5
0 1 1 2 3
0 1 1 2
0 1 1
0 1
0  */