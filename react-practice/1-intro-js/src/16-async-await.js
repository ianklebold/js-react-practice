//El await es un proceso mas lineal de hacer promesas
//Para usar await si o si la funcion debe ser async

//httpClient
//.then(response =>{ 
//    return response.json();
//})
//.then(data => console.log(data));

const findAllUsers = async () => {
    //Un fetch es una promesa y devuelve un response
    //El await lo que hace es esperar y una vez se resuelve se pasa al response
    const response = await fetch('https://jsonplaceholder.ir/users');
    const data = await response.json();
    return data;
};

//Como es async tenemos que ponerle await, para que espere el resultado final
const resultado = await findAllUsers();

console.log(resultado);