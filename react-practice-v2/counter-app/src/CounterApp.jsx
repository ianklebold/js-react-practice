import {useState} from 'react'; //Importamos Hook, todos los hooks comienzan con use
import PropTypes from 'prop-types';

//El evento onClick es el que permite aumentar el valor de value. En {} va js
export const CounterApp = ({value}) => {

    //El renderizado se da cuando el componente cambia de estado, por lo que por cada cambio
    //Todo este componente volvera a ser ejecutado. Cuidado por que podrias hacer llamadas a APIs
    //Consultas a BD, etc, por cad avez que cambies de estado tu componente.
    console.log("Renderizando");
    

    //Cuando el estado counter cambia entonces react renderiza el componente
    //Desestructuracion de arreglo
    const [ counter,setCounter   ] = useState(value); //Returns a stateful value, and a function to update it.
    const incValue = () => {
        //Se pasa la constante counter y la funcion setCounter se encarga de modificarlo
        setCounter(counter + 1); 
    };

    const restartValue = () => {
        setCounter(counter - counter);
    };

    const restValue = () => {
        setCounter(counter - 1);
    };

    return (
        <>
            <h1> CounterApp </h1>
            <h2> {counter} </h2>

            <button onClick={incValue}>
                +1
            </button>
            <button onClick={restartValue}>
                R
            </button>
            <button onClick={restValue}>
                -1
            </button>
        </>
    );
};

CounterApp.propTypes = {
    value : PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value : 0
}

