function calculator() {
    let param1 = parseFloat(prompt('Elija un número:'));
    let param2;
    let answer = prompt('Desea otro número? y/n');
    if (answer == 'y') {
        param2 = parseFloat(prompt('Elija el segundo número:'));
    } else {
        if (isNaN(param1)) {
            return "Por favor, sólo números!";
        }
        return `La raíz cuadrada de ${param1} es ${isFloat(Math.sqrt(param1))}`;
    }

    function isFloat(num) {
        if (Number.isInteger(num)) {
            return num;
        } else {
            return num.toFixed(3);
        }
    }

    function sum(num1, num2) {
        return isFloat(num1 + num2);
    }
    
    function substract(num1, num2) {
        return isFloat(num1 - num2);
    }
    
    function multiply(num1, num2) {
        return isFloat(num1 * num2);
    }
    
    function divide(num1, num2) {
        return isFloat(num1 / num2);
    }
    
    function resultSum(num) {
        return 'La suma de ' + param1 + ' más ' + param2 + ' es igual a ' + num;
    }

    function resultSubstract(num) {
        return 'La resta de ' + param1 + ' menos ' + param2 + ' es igual a ' + num;
    }

    function resultMultiply(num) {
        return 'La multiplicación de ' + param1 + ' por ' + param2 + ' es igual a  ' + num;
    }

    function resultDivide(num) {
        return 'La división de ' + param1 + ' entre ' + param2 + ' es igual a ' + num;
    }

    function stringResults(arr) {
        let stringResults = '';
        for (let i = 0; i < arr.length; i++) {
            if (i == arr.length) {
                stringResults += arr[i];
            } else {
                stringResults += arr[i] + '\n'
            } 
        }
        return stringResults;
    }

    if (isNaN(param1) || isNaN(param2))
    {
        return "Por favor, sólo números!";
    }

    let a = resultSum(sum(param1, param2));
    let b = resultSubstract(substract(param1, param2));
    let c = resultMultiply(multiply(param1, param2));
    let d = resultDivide(divide(param1, param2));
        
    let results = [a, b, c, d]
    return stringResults(results);
}