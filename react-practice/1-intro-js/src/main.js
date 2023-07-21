//Ahora buscamos modificar el DOM del html
//Para ello crearemos una lista de los usuarios.
//Crearemos un UL que contenga LI
//Buscamos por id el div que contenga ese UL

const findAllUsers = async () => {
    //Un fetch es una promesa y devuelve un response
    //El await lo que hace es esperar y una vez se resuelve se pasa al response
    const response = await fetch('https://jsonplaceholder.ir/users');
    const users = await response.json();

    const ul = document.createElement('ul'); //Creamos un UL

    users.forEach(user => {
        const li = document.createElement('li'); //Creamos un LI
        li.innerText = user.username; //A cada LI le agregamos un username
        ul.append(li); //Agregamos al UL un Li
    });

    document.getElementById('root').append(ul); //Buscamos el div con id root y le agregamos el ul
};

findAllUsers();
