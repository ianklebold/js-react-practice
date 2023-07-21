//Variables


//Let es una variable, const una constante
let firstname = "Ian";
const lastname = "Fernandez"; //Su valor no puede modificar
const condicion = true;

if (condicion){
    let firstname = "Santiago" //El bloque del if es un nuevo scope o contexto

    //name muere cuando termina el bloque de codigo
}
console.log("Hola mundo " + firstname + " " +lastname);

//Template String

//fn + esc
console.log(`Hola mundo!!! 
                ${firstname}  
${lastname}`);

