import { InvoiceItem, GetItemOptions } from './types'
import { formatAmount } from './utils/formatAmount'

export const getItem = (
  item: InvoiceItem,
  options?: GetItemOptions,
): InvoiceItem => {
  const {
    quantity = 1,
    product: {
      pricing: { list = 0, tax: { value: taxValue = 22 } = {} } = {},
      weight: { net = 0 } = {},
    } = {},
  } = item

  const { sold_by_weight } = options || {}

  let subtotal: number;

  if (sold_by_weight && net !== 0) {
    subtotal = formatAmount(list * net)
  } else {
    subtotal = formatAmount(quantity * list)
  }

  const product = { ...item.product, subtotal, tax: taxValue }

  return { ...item, product }
}
