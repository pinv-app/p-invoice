import { InvoiceItem } from './types'

export const getSubtotal = (items: InvoiceItem[]): number => {
  return items.reduce((acc, item) => acc + item.product.subtotal, 0)
}
