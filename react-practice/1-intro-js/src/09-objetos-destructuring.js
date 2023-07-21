const user = {
    username: 'ian',
    email: 'ian@google.com',
    age: 20,
    ranking: 9
}

//Destructurar significa obtener atributos de un objeto
//Funciona como variables distintas
const {username, ranking,age} = user;

console.log(username);
console.log(ranking);

console.log(`Username ${username} tiene ${age} de edad`);


