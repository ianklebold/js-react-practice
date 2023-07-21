//Importamos react
import React from 'react'
//Herramienta para renderizar react
import ReactDOM from 'react-dom/client'

//Punto de entrada de la aplicacion
//Los nombres de los functional components se escriben con UpperCamelCase!
function App() {
    // documento.createElement... es lo mismo:
    return <h1>Hola mundo</h1>;

}

//Tomamos la etiqueta de html identificada con root y le renderizamos el functional components
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);