let avenger = { 
    name : "Tony", 
    class : "VII", 
    id : 1 
};

// a) Escribe una función que liste los nombres de propiedad del objeto (Puedes usar el objeto creado más arriba)
let showProperties = function(data) {
    return Object.keys(data).join(', ');
}
console.log(showProperties(avenger)); //name, class, id

// b) Ahora, crea una función que liste solo los valores de las propiedades.
function showValues(data) {
    return Object.values(data).join(', ');
}
console.log(showValues(avenger)); //Tony, VII, 01

// c) Cambia el valor de la propiedad class por "XI" y asegurate de que los cambios se han efectuado.
avenger.class = 'XI';
console.log('New class = ' + avenger.class); //new class = XI

// d) Ahora, elimina la propiedad ID y asegura los cambios.
delete avenger.id;
console.log(avenger.hasOwnProperty('id')); //Not exist :(

// e) Añade una nueva propiedad, por ejemplo city y dale un valor, asegura los cambios solo imprimiendo esa nueva propiedad.
avenger.city = 'New York City';
let city = 'City => ' + avenger.city;
console.log(city); // City => New York City

// ---> Otra manera
Object.defineProperty(avenger, 'city', {
    value: 'New York City',
    writable: true,
    enumerable: true,
    configurable: true
  });

// f) Lista el numero de propiedades que contiene el objeto.
let numKeys = Object.keys(avenger).length;
console.log('Ther are ' + numKeys + ' info fields'); // There are 4 info fields

// g) Cambia la propiedad name por fullName.
avenger.fullName = avenger.name;
delete avenger.name;
avenger.fullName = 'Tony Stark';

// g1) Asegura los cambios.
console.log(avenger.fullName); // Tony Stark
console.log(avenger.hasOwnProperty('name'));

// h) Lista todas las propiedades del objeto a través de un console.log()
console.log(`Hi there, I'm ${avenger.fullName}, with id: ${avenger.id} and class: ${avenger.class}`); // "Hi there, I'm Tony Stark..."

// h1) Añade más propiedades al objeto, como... markAverage, country, job, studies...
avenger.markAverage = '2';
avenger.contry = 'USA';
avenger.job = 'SuperHero';
avenger.studies = 'Science';

// h2) Asegura los cambios volviendo a listar los valores del objeto
for (elem in avenger) {
    console.log(elem + ' => ' + avenger[elem]) ;
}

// i) Crea un constructor de objetos llamado "Avenger", al cual le pasarás ciertos parametros, creando una instancia del objeto con las propiedades de nuestro objeto creado. (Échale un ojo a la referencia de abajo.)

http://www.w3schools.com/js/js_object_definition.asp

Example:
function Avenger(fullName, classRoom, city, job, studies,markAv) {
    this.fullName = fullName;
    this.classRoom = classRoom;
    this.city = city;
    this.job= job;
    this.studies= studies;
    this.markAv = markAv;
}
var tonyStark = new Avenger("Tony Stark", "XI", "NYC", "Ingeneer", "MIT", 10);
console.log(tonyStark);

function Car(brand, model, color, year) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.year = year;
}
var myCar = new Car('Ford', 'fiesta', 'grey', '2004');
console.log(myCar);

// j) Crea otro objeto y imprime sus propiedades por pantalla.
var otherAvenger = new Avenger('Hulk', 'I', "Boston", "Doctor", "MIT", 50);
console.log(otherAvenger); // Hulk...

// k) Crea una propiedad del objeto que liste automáticamente los valores de la instancia.
function Car(brand, model, color, year) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.year = year;
    this.listDescription = function(){
        console.log(this.brand + ', ' + this.model + ', ' + this.color + ', ' + this.year);
    }
}
var myCar = new Car('Ford', 'fiesta', 'grey', '2004');
myCar.listDesctiption();

// l) Ahora, crea una función que solo liste los nombres de los objetos instanciados
let allAvengers = [];
function createAvengers(data) {
    allAvengers.push(data);
}

function showNames(data) {
    let result = '';
    data.forEach(function(elem){
        result += elem.fullName + ', ';
    });
    return result;
}
var avenger1 = new Avenger('SpiderMan', 'V', 'Chicago', 'Student', 'Computer', 5); 
var avenger2 = new Avenger('Thor', 'II', 'Pluton', 'God', 'War', 1);
createAvengers(avenger1);
createAvengers(avenger2);
console.log(showNames(allAvengers)); // Tony Stark, Hulk, Thor...

// m) Crea varios objetos con las mismas propiedades, como por ejemplo la ciudad, crea una función para que solo liste los nombres de los Avengers que sean de la misma ciudad y cuantos hay.
// Pista: Intenta tener a todos los objetos dentro de una array, al tener todos los datos juntos, podrás filtrarlos y mostrarlos...
let allAvengers = [];
function onlyCity(data, city) {
    let result = data.filter(elem => elem.city == city);
    if (result.length != 0){
        return 'Are ' + result.length + ' avengers living in ' + city +': ' + showNames(result); 
    }
        return "Not results founds"; 
}
var avenger1 = new Avenger('SpiderMan', 'V', 'NYC', 'Student', 'Computer', 3); 
var avenger2 = new Avenger('Thor', 'II', 'Pluton', 'God', 'War', 5);
var avenger3 = new Avenger('Hulk', 'V', 'Chicago', 'Student', 'Computer', 2); 
var avenger4 = new Avenger('Tony Stark', 'II', 'NYC', 'God', 'War', 1);
createAvengers(avenger1);
createAvengers(avenger2);
createAvengers(avenger3);
createAvengers(avenger4);
console.log(onlyCity(allAvengers, 'NYC')) // Are 3 avengers living in NYC: Tony, Hulk, Hawkeye

// n) Para acabar, créate a ti mismo y crea una función que recoja todas las markAv y muestre la media.
var avenger5 = new Avenger('Miguel', 'X', 'Spain', 'Climber', 'Computer', 36);
function mediaMarkAv(data) {
    let result = 0;
    data.forEach(elem => result+= elem.markAv);
    return result / data.length;
}
console.log(mediaMarkAv(allAvengers));

// ñ) Ahora, crea una funcion que recoja los avengers en parejas (será necesario que tengan un id, por comodidad al aparejarlos), es decir, de dos en dos, compare sus markAv y que muestre el mayor de ambos.
function pairsAvengers(data) {
    let result = '';
    let arr = data.reduce(function(result, value, index, array) {
        if (index % 2 === 0)
          result.push(array.slice(index, index + 2));
        return result;
      }, []);

    arr.forEach(function(elem){
        if(elem.length == 1) {
            result += elem[0].fullName + ' is the Best!';
        } else {
            result += `${elem[0].fullName} vs ${elem[1].fullName} => `;
            if(elem[0].markAv > elem[1].markAv){
                result += `${elem[0].fullName} is better!\n`;
            } else {
                result += `${elem[1].fullName} is better!\n`;
            }
        }
    });
    return result;
}
console.log(pairsAvengers(allAvengers));
//HawkEye vs Tony => Tony is better! \n Thor vs Hulk => Hulk is better! \n Vision vs Captain America => Vision is better

// ñ1) Intenta crear las parejas de forma aleatoria.

// Con esto ordenamos aleatoriamente el array de los objetos antes de enviar datos a la funcion 'pairsAvengers'.
allAvengers.sort(function() {
    return .5 - Math.random(); 
});

