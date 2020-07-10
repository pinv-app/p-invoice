import { InvoiceItem } from './types'
import { formatAmount } from './utils/formatAmount'

export const getSubtotal = (items: InvoiceItem[]): number => {
  return formatAmount(
    items.reduce((acc, item) => acc + item.product.subtotal, 0),
  )
}
