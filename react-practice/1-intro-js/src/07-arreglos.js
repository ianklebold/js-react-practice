//Arreglos
//Un arreglo tambien es un objeto
//Un arreglo tiene un indice y un valor. El indice va de 0 a N elementos
const products = ['Mesa','Silla','Notebook','Teclado'];

//Agregar elementos
products.push('Pantalla LCD');

products.push('Sony TV','LG TV');

console.log(products);

products.forEach(function(element) {
    console.log(element);
} );

// Simplificacion : 

products.forEach(console.log);

//function se puede quitar si usas =>
// {} se pueden quitar si es una linea
// Si se pasa un solo parametro (element) podes sacar los ()
// Si lo que se pasa por parametro (Element) es lo que se usa en el metodo de la derecha podes dejar solo el metodo

//Otra forma de iterar
for(const prod of products){
    console.log(prod);
}

//Forma clasica

for (let index = 0; index < products.length; index++) {
    const element = products[index];
    console.log(element);
}

//Acceso puntual a arreglo
console.log(products[0]);
console.log(products[4]);
