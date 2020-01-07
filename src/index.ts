import { getItem } from './item'
import { getSubtotal } from './subtotal'
import { getTaxes } from './taxes'
import { getTotals } from './totals'

export default Order => {
  const { invoice } = Order
  const { item: InvoiceItem = [] } = invoice

  const item = InvoiceItem.map(getItem)
  const subtotal = getSubtotal(item)
  const taxes = getTaxes(item)

  const total_price = getTotals(subtotal, taxes, invoice)

  return {
    ...Order,
    invoice: {
      ...invoice,
      item,
      total_price,
    },
  }
}
