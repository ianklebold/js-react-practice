const user = {
    username: 'ian',
    email: 'ian@google.com',
    age: 20,
    ranking: 9
}

//Pasamos un objeto a una funcion y en los parametros obtenemos solo lo que necesito
const detail = ({username,email}) => {
    console.log(`El detalle de usuario ${username} con correo ${email}`);
}

//Pasamos el objeto
detail(user);