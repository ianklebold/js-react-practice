// En {} indicamos que queremos traernos, para ello en el archivo invoices debe definirse
//Que es exportable y que no
//Lo que venga antes del {} son los export por default.
import invoices,{invoice,predicate} from './data/invoices';

const nameClients = invoices.map(invoice => {return invoice.client?.name}).map(nombre => (nombre != undefined)?nombre:"noName");

const totals = invoices.map(
    invoice => {return invoice.total()}
);

console.log(...nameClients);
console.log(totals);


const findFirstClientWithName = invoices.find(predicate);
console.log(findFirstClientWithName);


const filterClientsWithName = invoices.filter(predicate).map(invoice => invoice.client);
console.log(filterClientsWithName);


const filterInvoicesIncludeProduct = invoices.filter(invoice => invoice.items
    .includes({name: 'Lavarropas',price: 50,quantity: 2}));
console.log(filterInvoicesIncludeProduct);

const result = invoices.some(predicate);
console.log(result);
