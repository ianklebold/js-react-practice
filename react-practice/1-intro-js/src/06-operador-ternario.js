//Operador ternario

const avg = 5.9;

const status = (avg >= 5.5)?'Aprobado':'Desaprobado';

console.log(`Resultado : ${status}`);

const funcResponse = (status == 'Aprobado')? () => 'Eres un crack':() => 'Loser!';

console.log(funcResponse());