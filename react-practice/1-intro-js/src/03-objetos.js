//Los objetos tienen relacion con las estructuras json
//Su atributos si cambian pero el objeto es lo mismo, por ello usamos const
const invoice = {
    id: 10,
    name: 'Compras de oficina',
    date: new Date(),
    client: {
        id: 1,
        name: 'John',
        lastName: 'Doe',
        age: 20
    },
    items: [
        {
            producto: 'Keyboard',
            price: 399,
            quantity: 2
        },
        {
            producto: 'Mouse',
            price: 500,
            quantity: 1
        },
        {
            producto: 'Papper',
            price: 100,
            quantity: 10
        }
    ],
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

console.log(invoice);


console.log(`Nombre : ${invoice.name}`);
console.log(`Total : ${invoice.total()}`);

//Modificar un atributo
invoice.client.name = 'Pepe';
console.log(`Cliente : ${invoice.client.name}`);

//Llamar un metodo
console.log(invoice.greeting());