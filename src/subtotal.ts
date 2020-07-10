import { InvoiceItem } from './types'
import { formatAmount } from './utils/formatAmount'

export const getSubtotal = (items: InvoiceItem[]): number => {
  return formatAmount(
    items.reduce((acc, { product = {} }) => acc + product.subtotal || 0, 0),
  )
}
