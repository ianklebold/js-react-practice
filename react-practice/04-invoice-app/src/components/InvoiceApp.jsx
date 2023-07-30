import { getInvoice } from "../services/invoice/invoiceservice";

export const InvoiceApp = () => {

    const invoice = getInvoice();

    return(
        <>
            <h1>Ejemplo factura</h1>
            <ul>
                <li>Id : { invoice.id }</li>
                <li>Name : { invoice.name }</li>
            </ul>
        </>
    );
};