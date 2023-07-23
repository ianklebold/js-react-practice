//Punto de entrada de la aplicacion
//Los nombres de los functional components se escriben con UpperCamelCase!
// <> Es un fragmento, agrupa varias etiquetas de html. <> Es un nodo padre.
// Con {} podemos meter ahi codigo de js.Esta permitido todo menos objetos.

//Las constantes que no tienen nada que ver con el componente van afuera (Buena practica)
//Esto evita que se este renderizando algo que no va a cambiar o no hay dependencia de comportamiento interno con el componente
const newMessage = "Hola soy una variable";

const myNameIs = () => {
    return "Ian";
}

export const FirstApp = () => {
    return ( 
    <>
        <h1>Hola mundo</h1> 
        <p>{ `${newMessage} y mi nombre es ${myNameIs()}` }</p>
        <p>Este es un subtitulo</p>
    </>
    
    );
};

