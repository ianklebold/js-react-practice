//Importamos react
import React from 'react'
//Herramienta para renderizar react
import ReactDOM from 'react-dom/client'
import {FirstApp} from './FirstApp';
import {HelloWorldApp} from './HelloWorldApp';

//Este estilo se aplica globalmente
import './styles.css';


//Tomamos la etiqueta de html identificada con root y le renderizamos el functional components
//Podemos pasarle props al componente hijo. Cuando usamos {} es para pasar numeros
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp title = "Nuevo componente" subtitle = {123}/>
        <HelloWorldApp />
    </React.StrictMode>
);