// c) Simple Scripting program. Crea un programa que transforme un número de 4 dígitos en otro diferente con las posiciones de los dígitos cambiadas, creando un nuevo código

let code = 3712;
function codeScript(code) {
    let arr = code.toString().split('');
    let v = arr.shift();
    arr.push(v);
    return arr.join('') * 1;
}
let newCode = codeScript(code);
// output: 
// 7123 - First call to codeScript()
// 1237 - Second call to codeScript()
// 2371 - Third call to codeScript()

// At Four call, should return the original value
// El primer numero se traslada a la última posicion. El segundo, el tercero y el cuarto suben una posición.


// c2) Ahora, el usuario debería poder introducir como parámetro dos códigos a la vez y devolver los dos códigos encriptados (Los dos códigos se deberían encriptar en la misma función)
let code1 = 3712;
let code2 = 8906;
function codeScript(code1, code2) {
    let arr = [code1, code2];
    let result = arr.map(function(code){
        let arr = code.toString().split('');
        let v = arr.shift();
        arr.push(v);
        return arr.join('') * 1;
    });
    return result;
}

let newCodeArr = codeScript(code1, code2);
let newCode1 = newCodeArr[0];
let newCode2 = newCodeArr[1];


// c3) Ahora, vamos a añadir un nivel más de seguridad. Despues de cambiar la posición de los dígitos, multiplicaremos a cada miembro por un numero cuya multiplicación no sea superior a 10. (Si es superior a 10, conseguiremos una multplicación de dos digitos y el código ya no sería de 4 valores)


// c4) Ahora, implementa en otra funcion aparte el decrypter(), que recibirá como argumento un código encriptado (y correspondientemente multiplicado en el apartado c3) y nos devuelva el código desencriptado.







// c5) Añade las dos funciones a la misma función padre, de forma que encripte y desencripte a la vez cuando termine de ejecutarse.

function codeScript(code1, code2){ codeDecrypt(code1Encrypt,code2Encrypt)}







// c6) El usuario podrá solo introducir letras, cada número del 0 al 9 corresponderá a varias letras. Podéis seguir este esquema.

var dictionary = {
    0: ['A', 'K', 'T', 'F', 'O', 'Y'],
    1: ['B', 'L', 'U', 'G', 'P', 'Z'],
    2: ['C', 'M', 'V', 'H', 'Q', '.'],
    3: ['D', 'N', 'W', 'I', 'R', ','],
    4: ['E', 'Ñ', 'X', 'J', 'S', ' '],
}
//function codeScript("HI  ", "WE  ", "NEED", "HELP"){};
//"HI__" = "dictionary[7][0]+dictionary[8][0]+dictionary[9][2]+dictionary[9][2]..."