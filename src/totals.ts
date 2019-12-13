import { InvoiceTax, InvoiceTotals } from "./types";

export const getTotals = (subtotal: number, taxes: InvoiceTax[]): InvoiceTotals => {
    const tax = taxes.reduce((acc,val) => acc + val.tax,0)
    const total = subtotal + tax

    return { taxes, subtotal, tax, total }
}