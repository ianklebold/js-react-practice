//Importamos react
import React from 'react'
//Herramienta para renderizar react
import ReactDOM from 'react-dom/client'
import {FirstApp} from './FirstApp';
import {HelloWorldApp} from './HelloWorldApp';

//Tomamos la etiqueta de html identificada con root y le renderizamos el functional components
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <FirstApp />
        <HelloWorldApp />
    </React.StrictMode>
);