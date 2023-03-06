const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafito = document.getElementsByClassName('.parrafito');
const pid = document.getElementById('pid');
const input = document.querySelector('input');

//Agregar contenido desde JS a un HTML

//objeto HTML
h1.innerHTML = 'Ejemplo';

//Objeto Text
h1.innerText = 'Ejemplo';

//Obtener Atibuto de h1
h1.getAttribute('attrib');
//modificar atributo 
//h1.setAttribute('attrib', 'class');


console.log(input.value);
//print de attrib mod
console.log(input.value);

console.log({
    h1,
    p,
    parrafito,
    pid,
    input,
});

//h1.classList.add('rojo');
//h1.classList.toggle('otra');
//h1.classList.contains('otra');

//Modificacion del Input
input.value = 456;


//crear aun objeto html desde js 
const images = document.createElement('img');
images.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Adidas_Logo.svg/800px-Adidas_Logo.svg.png')
images.setAttribute('class', 'logo')
pid.append(images);