const users = ['pepe','ana','maria','juan','sebastian','carlos','jose'];

//Quiero solo algunos elementos

//Se guarda en el orden de users
//Juan y Sebastian no quiero
const [variableNombre1, variableNombre2, variableNombre3,,,variableNombre4,variableNombre5] = users;

console.log(variableNombre1, variableNombre2, variableNombre3);

console.log(`Los otros dos que faltaban : ${variableNombre4} ${variableNombre5}`);

const numbers = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17'];

//Me salteo 1 y 2
//Quiero los demas
const [,,... demas] = numbers;

//Imprimis el objeto array
console.log(demas);

// Con ... extraemos los elementos, imprimis los elementos del objeto array
console.log(...demas);


