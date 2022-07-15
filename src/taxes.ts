import * as groupByTaxName from 'lodash/groupBy';
import { InvoiceItem, InvoiceTax } from './types';
import { formatAmount } from './utils/formatAmount';

const buildInvoiceTax = (acc, val) => {
  const { product = {} } = val;
  const { pricing = {}, subtotal } = product;
  const { tax = {} } = pricing;
  const { name: taxName = '', value: taxValue = '', nature = '' } = tax;

  return {
    name: taxName,
    value: taxValue,
    nature,
    subtotal: acc.subtotal + subtotal,
  };
};

export const getTaxes = (items: InvoiceItem[]): InvoiceTax[] => {
  const InvoiceTaxObject: InvoiceTax = {
    name: '',
    value: '',
    nature: '',
    subtotal: 0,
    tax: 0,
  };

  const groupedTaxes = groupByTaxName(items, 'product.pricing.tax.name');

  const InvoiceTaxes: InvoiceTax[] = [];

  for (const groupedTax in groupedTaxes) {
    const invoiceTax = groupedTaxes[groupedTax].reduce(
      buildInvoiceTax,
      InvoiceTaxObject,
    );
    InvoiceTaxes.push(invoiceTax);
  }

  return InvoiceTaxes.map((invoiceTax) => ({
    name: invoiceTax.name,
    value: invoiceTax.value,
    nature: invoiceTax.nature,
    subtotal: formatAmount(invoiceTax.subtotal),
    tax: formatAmount((invoiceTax.subtotal * parseFloat(invoiceTax.value)) / 100),
  }));
};
