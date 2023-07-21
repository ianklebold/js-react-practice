//Con export indicamos que ese objeto,arreglo, funcion, lo que sea, se puede importar.
//Los export default son solamente una y solamente una.
//Los export nombrados pueden ser multiples.

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
    },
    constructor: function(id,name,date,client,items) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.client = client;
        this.items = items;
    }
};

const invoice2 = {...invoice};
const client1 = {id: 1,name: 'Ian',lastName: 'Fernandez',age: 23};
const products1 = [{name: 'Tablet',price: 100,quantity: 2},{name: 'Computer',price: 200,quantity: 3}];

const invoice3 = {...invoice};
const client2 = {id: 2,lastName: 'Argento',age: 40};
const products2 = [{name: 'Lavarropas',price: 50,quantity: 2},{name: 'Celular',price: 300,quantity: 1}];


const invoice4 = {...invoice};
const client3 = {id: 3,name: 'Maria',lastName: 'Lopez',age: 25};
const products3 = [{name: 'Secador',price: 20,quantity: 1}];


invoice2.constructor(1,'Nueva factura',new Date(),client1,products1);
invoice3.constructor(2,'Nueva factura',new Date(),client2,products2);
invoice4.constructor(3,'Nueva factura',new Date(),client3,products3);

console.log(invoice2);
console.log(invoice3);
console.log(invoice4);

const invoices = [invoice2,invoice3,invoice4];

//Predicate
const predicate = invoice => invoice.client?.name != undefined;

const filterClientsWithName = invoices.filter(predicate).map(invoice => invoice.client);

const findInvoiceById = (id) => {
    return invoices.find(invoice => invoice.id == id);
}

//Definieno el export asi, puedo usar el as default en el mismo archivo
export{
    predicate,
    invoice,
    invoices as default, //Es unico
    filterClientsWithName,
    findInvoiceById
}