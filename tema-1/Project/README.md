# CALCULATOR

Haz una calculadora, un único programa al que le pasarás dos parámetros y el usuario podrá visualizar por consola la **suma**, **resta**, **multiplicación** y **división** entre ambos números. 

## Requisitos
- El resultado debería ser mostrado con 3 decimales como mucho (en caso de que hubieran). 

- El programa debe contemplar y actuar correctamente en el caso de que el usuario introduzca cualquier cosa que no sean números.

- Si el usuario introduce un solo numero, deberá mostrar **SOLO** su raíz cuadrada, si vuelve a introducir los dos, volverá a mostrar las ***4 operaciones de siempre***.

- Los resultados deberían almacenarse dentro de una array y mostrarlos de una forma amigable al usuario.

```javascript
// Output
let results = [
    `${num1} + ${num2} = ${resultSum}`, 
    `${num1} + ${num2} = ${resultRest}`, 
    ...
    ]

results.forEach(elem => console.log(elem))
```