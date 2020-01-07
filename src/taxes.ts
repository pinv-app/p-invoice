import { InvoiceItem, InvoiceTax } from './types'
import * as groupByTaxName from 'lodash/groupBy'
import { formatAmount } from './utils/formatAmount'

const buildInvoiceTax = (acc, val) => {
  const { product = {} } = val,
    { pricing = {}, subtotal } = product,
    { tax = {} } = pricing,
    { name: taxName = '', value: taxValue = '' } = tax

  return {
    name: taxName,
    value: taxValue,
    subtotal: acc.subtotal + subtotal,
    tax: acc.tax + (subtotal * taxValue) / 100,
  }
}

export const getTaxes = (items: InvoiceItem[]): InvoiceTax[] => {
  const InvoiceTaxObject: InvoiceTax = { name: '', value: '', subtotal: 0, tax: 0 }

  const groupedTaxes = groupByTaxName(items, 'product.pricing.tax.name')

  const InvoiceTaxes: InvoiceTax[] = []

  for (const groupedTax in groupedTaxes) {
    const InvoiceTax = groupedTaxes[groupedTax].reduce(buildInvoiceTax, InvoiceTaxObject)
    InvoiceTaxes.push(InvoiceTax)
  }

  return InvoiceTaxes.map(invoiceTax => {
    return {
      name: invoiceTax.name,
      value: invoiceTax.value,
      subtotal: formatAmount(invoiceTax.subtotal),
      tax: formatAmount(invoiceTax.tax),
    }
  })
}
