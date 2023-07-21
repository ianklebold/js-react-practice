import {findInvoiceById} from './data/invoices';

const findInvoicesById = (id) => {
    const promise = new Promise((resolve,reject)=> {
        setTimeout(()=>{
            const result = findInvoiceById(id);
    
            if (result){ 
                //Si es distinto a undefinded
                resolve(result); //Cuando se cumple la promesa ejecutas el then y pasas el resultado
            }else{
                reject('Algo salio mal');
            }
            
        },2500) //Simulamos un delay. El segundo parametro es el tiempo de delay
    });

    return promise;
}

//promise.catch atramos el eror.Para que se ejecute el catch se debe pasar el reject
//promise.then es cuando se cumple la promesa. Para que se ejecute el then se debe pasar el resolve
//promise.finally siempre se ejecuta sin importar si ocurrio o no un error.

findInvoicesById(1)
.then((result) => {
    console.log('La tarea salio bien');
    console.log(result);
})
.catch((error) => {
    console.error(error);
});