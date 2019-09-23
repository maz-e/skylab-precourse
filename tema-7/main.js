//a) Modifica el color de texto del párrafo
document.getElementById("btn-style").addEventListener('click', function(event) {
    document.getElementById("text").style.color = 'red'; 
});
       
//b) Captura el valor de los dos <input> del formulario al enviar (submit) el mismo y muéstralos por consola.
function showValues(){
    let inputName = document.getElementById("name").value;
    let inputSurname = document.getElementById("surname").value;
    if (inputName === '' || inputSurname === '') {
        console.log('Please enter the inputs!');
    } else {
        console.log(inputName + ' ' + inputSurname);
    }
}
        
//c) Sin modificar la estructura HTML proporcionado mostrar por consola los textos de todos los <li> del listado.
let list = document.getElementById("listado").getElementsByTagName("li");
// let list = document.getElementsByTagName("li");

for (let elem of list) {
    console.log(elem.textContent);
}