import { getInvoice } from "../services/invoice/invoiceservice";

export const InvoiceApp = () => {

    const invoice = getInvoice();

    const {name, lastname, address} = invoice.client;

    const {country, city, street, number} = address;

    return(
        <>
            <h1>Ejemplo factura</h1>
            <ul>
                <li>Id : { invoice.id }</li>
                <li>Name : { invoice.name }</li>
            </ul>

            <h3>Datos del cliente</h3>
            <ul>
                <li> {name} {lastname}</li>
                <li> {country}</li>
                <li> {city}</li>
                <li> {street} {number}</li>
            </ul>

            <h3>Datos de la empresa</h3>
            <ul>
                <li>{invoice.company?.name}</li>
                <li>{invoice.company?.fiscalNumber}</li>
            </ul>

            <h4>Productos de la factura</h4>
            <table>
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                    <tbody>
                    { 
                        //Mapeamos un objeto por un html
                        invoice.items.map(item => {
                            return (
                                <tr key = {item.id}>
                                    <td>{item.product}</td>
                                    <td>{item.price}</td>
                                    <td>{item.quantity}</td>
                                </tr>
                            );
                        }) 
                    }
                    </tbody>
                </thead>
            </table>
        </>
    );
};