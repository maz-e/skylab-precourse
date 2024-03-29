# MÉTODOS

Los métodos son funciones nativas de javascript aplicables a ciertos tipo de datos. 

## Breve lista de métodos por tipo
### [String](https://javascript.info/string)
Method | Description
--- | ---
length | Devuelve la longitud del string.
toUpperCase() | Devuelve el string en mayúsculas.
toLowerCase() | Devuelve el string en minúsculas.
trim() | Elimina espacios y tabulaciones a izquierda y derecha del string.
split(***separador***) | Divide un string en un array. Corta cuando se encuentra el ***separador***.
slice(***inicio***) | Extrae una porción de un string dado empezando en la posición ***inicio***.

### [Number](https://javascript.info/number)
Method | Description
--- | ---
Math.Random() | Devuelve un número aleatorio entre 0 y 1.
Math.round(***num***) | Redondea el número entre paréntesis.
Math.floor(***num***) | Redondea al número entero inmediatamente inferior a ***num***.
Math.sqrt(***num***) | Devuelve la raiz cuadrada de ***num***.
toString() | Pasa un número a string (lo entrecomilla).
Math.max(***a,b,c,...***) | Devuelve el número mayor entre un conjunto de ***inputs***.
Math.min(***a,b,c,...***) | Devuelve el número menor entre un conjunto de ***inputs***.

### [Array](https://javascript.info/array-methods)
Method | Description
--- | ---
length | Devuelve la cantidad de elementos del array.
join() | Une los elementos de un array en un string.
push(***element***) | Introduce ***element*** en la última posición del array.
indexOf(***char***) | Devuelve la posición en el array de la primera ocurrencia de ***char***. En caso de no encontrar dicho elemento devuelve **-1**.
splice(***inicio***) | Modifica un array eliminando los elementos a partir de la posición ***inicio***.
slice(***inicio***) | Igual que splice pero devolviendo un array nuevo en vez de modificar el original.
forEach(***callback***) | Ejecuta la función ***callback*** a cada elemento de un array.
map(***callback***) | Igual que forEach pero devolviendo un nuevo array.