// e) Crea un programa al que le introduces un número como parámetro del 0 al 100 y devuelve el número transformado a alfabeto normal, es decir:

Hint:
var units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
var tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
var teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

function sayItWithWords(num) {
    let x = num.toString();
    let arr = x.split('');

    if (x.length === 1) {
        return units[+arr[0]];
    } else if (x.length === 2) {
        if(+arr[0] === 1) {
            return teens[+arr[1]]
        } else {
            return tens[+arr[0]] + ' ' + units[+arr[1]];
        }
    } else {
        return 'One hundred';
    }
}

sayItWithWords(5) //output Five
sayItWithWords(23) //output twenty-three
sayItWithWords(71) //output seventy-one

// e2) Ahora, el output debería ser capaz de, aparte de devolver el número traducido, devolver también los números por los que está formado:

function sayItWithWords(num) {
    let x = num.toString();
    let arr = x.split('');

    if (x.length === 1) {
        return units[+arr[0]] + ' / ' + num;
    } else if (x.length === 2) {
        if(+arr[0] === 1) {
            if (+arr[1] !== 0) {
                return teens[+arr[1]] + ' / 10 + ' + arr[1];
            } else {
                return teens[+arr[1]] + ' / ' + num;
            }
        } else {
            if (+arr[1] !== 0) {
                return tens[+arr[0]] + ' ' + units[+arr[1]] + ' / ' + arr[0] + '0 + ' + arr[1];
            } else {
                return tens[+arr[0]] + ' / ' + arr[0] + '0'
            }
        }
    } else {
        return 'One hundred';
    }
}

sayItWithWords(5) //output Five, five / 5
sayItWithWords(23) //output twenty-three, twenty + three / 20 + 3
sayItWithWords(71) //output seventy-one, seventy + one / 70 + 1

// e3) Cambia tu programa para que acepte cualquier número entre 0 y 1000.


//Mirar de cambiar la funcion para que funcione con 'One thousand'
function sayItWithWords(num) {
    let x = num.toString();
    let arr = x.split('');
    let result = '';

    function unidades(arr) {
        return units[+arr[0]] + ' / ' + num;
    }

    function decenas(arr) {
        if(+arr[0] === 1) {
            if (+arr[1] !== 0) {
                return teens[+arr[1]] + ' / 10 + ' + arr[1];
            } else {
                return teens[+arr[1]] + ' / ' + num;
            }
        } else {
            if (+arr[1] !== 0) {
                return tens[+arr[0]] + ' ' + units[+arr[1]] + ' / ' + arr[0] + '0 + ' + arr[1];
            } else {
                return tens[+arr[0]] + ' / ' + arr[0] + '0'
            }
        }
    }

    function centenas(arr) {

    }

    if (x.length === 1) {
        result += unidades(arr);
    } else if (x.length === 2) {
        result += decenas(arr);
    } else if (x.length === 3) {
        result += unidades(arr);
    } else {
        result += 'One thousand';
    }

    return result;
}

sayItWithWords(500) //output five hundred , five hundred  / 500
sayItWithWords(233) //output two hundred thirty three, two hundred + thirty + three/ 200 + 30 + 3
sayItWithWords(498) //output four hundred ninety eight, four hundred + ninety + eight/ 400 + 90 + 8