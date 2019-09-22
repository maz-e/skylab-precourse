// d) Crea un programa que use la encriptacion Romana, como es? Si tenemos la palabra SKYLAB, la palabra encriptada será SLKAYB. Si divides la palabra original en 2 grupos obtienes:

/* SKY - LAB
Entonces, uniendo laletra i-ésima de cada grupo obtienes SLKAYB.
Entonces, el programa deberá recibir SKYLAB y retornar SLKAYB */

let code = 'SKYLAB';
function codeEncrypt(code) {
    let str1 = code.substring(0, code.length/2);
    let str2 = code.substring(code.length/2);
    let result = '';
    for (let i = 0; i < str2.length; i++) {
        if (str1[i] !== undefined) {
            result += str1[i] + str2[i];
        } else {
            result += str2[i];
        }
    }
    return result;
}


// d2) Programa el desencriptador, pasa como parámetro SLKAYB y que devuelva SKYLAB.
function codeDecrypt(code) {
    let result;
    let arr1 = []; 
    let arr2 = [];
    if(code.length % 2 === 0) {
        for (let i = 0; i < code.length; i++) {
           if(i % 2 === 0) {
                arr1.push(code[i]);
           } else {
                arr2.push(code[i]);
           }
        }
        result = arr1.concat(arr2).join('');
    } else {
        for (let i = 0; i < code.length-1; i++) {
            if(i % 2 === 0) {
                 arr1.push(code[i]);
            } else {
                 arr2.push(code[i]);
            }
         }
         result = arr1.concat(arr2).join('') + code[code.length-1];
    }
    return result;
}


// d3) y d4) Agrupa la función Encrypt y decrypt en una unica función, de forma que introduzcas como parámetro SKYLAB y devuelva SKYLAB (con todas las transformaciones internas hechas y mostrando, entre medias, la transformación). Lo tienes? Prueba ahora con SKYLABCODERS. Cambia la función para que pueda aceptar palabras más largas.

let code = 'SKYLABCODERS'
function magicCode(code) {
    function codeEncrypt(code) {
        let str1 = code.substring(0, code.length/2);
        let str2 = code.substring(code.length/2);
        let result = '';
        for (let i = 0; i < str2.length; i++) {
            if (str1[i] !== undefined) {
                result += str1[i] + str2[i];
            } else {
                result += str2[i];
            }
        }
        return result;
    }
    
    function codeDecrypt(code) {
        let result;
        let arr1 = []; 
        let arr2 = [];
        if(code.length % 2 === 0) {
            for (let i = 0; i < code.length; i++) {
               if(i % 2 === 0) {
                    arr1.push(code[i]);
               } else {
                    arr2.push(code[i]);
               }
            }
            result = arr1.concat(arr2).join('');
        } else {
            for (let i = 0; i < code.length-1; i++) {
                if(i % 2 === 0) {
                     arr1.push(code[i]);
                } else {
                     arr2.push(code[i]);
                }
             }
             result = arr1.concat(arr2).join('') + code[code.length-1];
        }
        return result;
    }
    
    let result = codeEncrypt(code);
    console.log(result);
    result = codeDecrypt(result);
    console.log(result);
    return result;
}