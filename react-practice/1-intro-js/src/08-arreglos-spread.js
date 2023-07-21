const products = ['Mesa','Silla','Notebook','Teclado'];

products.push('Pantalla LCD');

products.push('Sony TV','LG TV');

const fruits = ['Peras','Manzanas','Sandias','Frutillas'];

//Con Spread combinamos las frutas y productos. Copia los elementos de cada arreglo
//Adicional podes agregar mas elementos
const market = [... fruits,'Lechuga','Papas','Uvas', ... products];

console.log(market);


//Concat es una alternativa
//Conat no modifica market, sino que devuelve un nuevo arreglo con ese concat.
const newMarket = market.concat('Banana','Durazno',['Anana','Rucula']);
console.log(newMarket);