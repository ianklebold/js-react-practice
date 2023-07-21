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


console.log(invoice.company); //Undefained
//console.log(invoice.company.name); Error gravee!! (Como si fuera null pointer)

//Con esto aseguramos que caiga en undefained nomas y no en un error grave
//Generalmente se utiliza en las api rest, cuando esperamos un atributo que puede no llegar
//Nos ahorra un condicional para comprobar que comapany no sea null y que ademas venga el name


console.log(invoice.company?.name); 
//Es equivalente a:
//JS es corta corriente
if(invoice.company != undefined && invoice.company.name){
    console.log('Llegan ambos');
}else{
    console.log('No llega company');
}

console.log(invoice.client?.name); 
console.log(invoice.client?.address?.street);