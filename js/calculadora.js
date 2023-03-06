const h1 = document.querySelector('h1');
const input1 = document.querySelector('#valor1');
const input2 = document.querySelector('#valor2');
const btn = document.querySelector('#cal');
const result = document.querySelector('#result');

//suma del valor 1 y 2 para hacer console.log('');
function btnOnclick() {
    let obj = parseInt(input1.value) + parseInt(input2.value)
    console.log(obj);
    //Insertar html con el resultado
    result.innerHTML = "Resultado " + obj;
}
//Usando el elemento para captura de eventos addEventListener
btn.addEventListener('click', btnOnclick);