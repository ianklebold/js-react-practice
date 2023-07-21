//Esta es como una plantilla
const invoice = {
    id: 0,
    name: '',
    date: new Date(),
    client: {
        id: 0,
        name: '',
        lastName: '',
        age: 0
    },
    items: [],
    total: function () {
        let total = 0;
        this.items.forEach(item => {
            total = total + item.price*item.quantity;
        });
        return total;
    },
    greeting: function() {
        return `Hola soy ${this.client.name} ${this.client.lastName}`;
    }
};



// == Evalua el contenido | === Evalua el contenido y el tipo de dato

//Clonar un objeto
//Invoice2 e invoice apuntan al mismo objeto, a una referencia.
const invoice2 = invoice;
const result = invoice == invoice2;

if(result){
    console.log(`Son iguales`);
}else{
    console.log(`No son iguales`);
}

//Instanciar un objeto
//Creamos un nuevo objeto
// ... es el operador Spread que permite crear un nuevo objeto con todos los attr y metodos de un objeto
const newInvoice = { ...invoice};

if(invoice == newInvoice){
    console.log(`Son iguales`);
}else{
    console.log(`No son iguales`);
}

