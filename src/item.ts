import { InvoiceItem, GetItemOptions } from './types'
import { formatAmount } from './utils/formatAmount'

export const getItem = (
  item: InvoiceItem,
  options?: GetItemOptions,
): InvoiceItem => {
  const {
    quantity = 1,
    product: {
      pricing: {
        list = 0,
        tax: {
          value: taxValue = 0,
          name: taxName = '0'
        } = {},
      } = {},
      weight: { net = 0 } = {},
    } = {},
  } = item

  const { sold_by_weight } = options || {}

  let subtotal: number;

  if (sold_by_weight && net !== 0) {
    subtotal = formatAmount(list * net, 6)
  } else {
    subtotal = formatAmount(quantity * list, 6)
  }

  const { pricing } = item.product || {}
  const productPricing = { ...pricing, list, tax: { value: taxValue, name: taxName } }
  const product = { ...item.product, pricing: productPricing, subtotal, tax: taxValue }

  return { ...item, product }
}
