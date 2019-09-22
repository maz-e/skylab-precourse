/* Podrías hacer que le calculadora relizara operaciones sean cuales sean el numero de argumentos pasados a la funcion?

Después de hacer todas las operaciones, el programa deberá preguntar al usuario si desea volver a realizar otra operación, volviendo a almacenar más resultados y mostrándolos. */

let myArray = [];

function calculator() {
    let args = [...arguments];

    function sanitize(args) {
        for (num in args) {
            if (typeof args[num] !== 'number') {
                return true;
            }
        }
    }
    
    function isFloat(num) {
        if (Number.isInteger(num)) {
            return num;
        } else {
            return num.toFixed(3);
        }
    }

    function sqrt(num) {
        return isFloat(Math.sqrt(num));
    }

    function sum(args) {
        let result = 0;
        for (num in args) {
            result += args[num];
        }
        return isFloat(result);
    }
    
    function subs(args) {
        let result = 0;
        for (num in args) {
            if (num == 0) {
                result = args[0];
            } else {
                result -= args[num];
            }
        }
        return isFloat(result);
    }
    
    function mult(args) {
        let result = 1;
        for (num in args) {
            result *= args[num];
        }
        return isFloat(result);
    }
    
    function div(args) {
        let result = 0;
        for (num in args) {
            if (num == 0) {
                result = args[0];
            } else {
                result /= args[num];
            }
        }
        return isFloat(result);
    }

    function resultStr(symbol, args, result) {
        let str = '';
        for (num in args) {
            if (num < args.length - 1) {
                str += `${args[num]} ${symbol} `;
            } else {
                str += `${args[num]} = ${result}`;
            }
        }
        return str;
    }

    function addElements (arr) {
        let totalElem = myArray.length;
        let x = 0;
        for (let i = totalElem; i < totalElem + 4; i++) {
            myArray[i] = arr[x];
            x++;
        }
    }

    if (sanitize(args)) {
        return 'Please, only numbers!';
    } else if (arguments.length == 1) {
        return sqrt(arguments[0]);
    } else {
        let a = resultStr('+', args, sum(args));
        let b = resultStr('-', args, subs(args));
        let c = resultStr('*', args, mult(args));
        let d = resultStr('/', args, div(args));
        let results = [a, b, c, d];
        addElements(results);
        
        if (prompt("New numbers? y/n") == 'y') {
            console.log(myArray);
            calculator(2,3,4);
        } else {
            return console.log("Bye!");
        }
    }
}