import { InvoiceItem, InvoiceTax } from './types';
import * as groupByTaxName from 'lodash/groupBy';

const buildInvoiceTax = (acc, val) => {
  const { product = {}, subtotal = 0, tax: taxTotal } = val,
    { pricing = {} } = product,
    { tax = {} } = pricing,
    { name: taxName = '', value: taxValue = 0 } = tax;

  return {
    name: taxName,
    value: taxValue,
    subtotal: acc.subtotal + subtotal,
    tax: acc.tax + taxTotal,
  };
};

export const getTaxes = (items: InvoiceItem[]): InvoiceTax[] => {
  const InvoiceTaxObject: InvoiceTax = { name: '', value: '', subtotal: 0, tax: 0 };

  const groupedTaxes = groupByTaxName(items, 'product.pricing.tax.name');

  const InvoiceTaxes: InvoiceTax[] = [];

  for (const groupedTax in groupedTaxes) {
    const InvoiceTax = groupedTaxes[groupedTax].reduce(buildInvoiceTax, InvoiceTaxObject);
    InvoiceTaxes.push(InvoiceTax);
  }

  return InvoiceTaxes;
};
