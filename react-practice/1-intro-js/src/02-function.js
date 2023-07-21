//Funciones


function sayHello() {

    const greeting = "Hola mundo function!";
    return greeting;
}

const result = sayHello();
console.log(result);

function sayHelloWithName(name) {

    const greeting = `Hola mundo ${name}`;
    return greeting;
}

console.log(sayHelloWithName('Ian'));

//Si no se pasa por parametro se asigna por default un nombre
function sayHelloWithDefaultName(name = "Pepe") {

    const greeting = `Hola mundo ${name}`;
    return greeting;
}

console.log(sayHelloWithDefaultName());

//Guardar una funcion en constante
const anotherWayToSayHello = function(firstName = 'Ian',lastName = 'Fernandez') {
    const greeting = `Hola ${firstName} ${lastName} como estas?`
    return greeting;
}

console.log(anotherWayToSayHello());

//Funciones flecha

const arrowFunction = (bandName = "Soda Stereo") => console.log(`El premio a la mejor banda es para ${bandName}`);

const arrowFunction2 = (bandName = "Soda Stereo") => `El segundo puesto es para ${bandName}`;

const arrowFunction3 = (mostrarPremio = true) => {
    if(mostrarPremio){
        arrowFunction()
        console.log(arrowFunction2());
    }
}

arrowFunction3();

const add = (a = 0, b = 0) => a + b;
const subtraction = (a = 0, b = 0) => a - b;
const division = (a = 0, b = 0) => a / b;
const multiply = (a = 0, b = 0) => a * b;
const exponentiation = (a = 0, b = 0) => a ** b;

console.log(add(5,5));
console.log(subtraction(5,3));
console.log(division(10,2));
console.log(multiply(2,5));
console.log(exponentiation(5,5)); // 5 ^ 5