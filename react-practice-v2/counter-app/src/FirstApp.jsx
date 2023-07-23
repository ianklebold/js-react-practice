import PropTypes from 'prop-types';

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


//Los parametros que recibe el componente se llaman props (Objeto). Siempre va encerrado con {}
//Las props son informacion que fluye del padre (Main) al Hijo (First App)
export const FirstApp = ({title, subtitle}) => {
    return ( 
    <>
        <h1> {`Hola mundo este es un titulo : ${title}`} </h1> 
        <p>{ `${newMessage} y mi nombre es ${myNameIs()}` }</p>
        <p>{`Este es un subtitulo : ${subtitle}`}</p>
    </>
    
    );
};

//Con el Proptypes podemos definirle un tipo a las props
FirstApp.propTypes = {
    title : PropTypes.string.isRequired,
    subtitle : PropTypes.number
}
