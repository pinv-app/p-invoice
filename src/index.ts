import { getItem } from './item'
import { getSubtotal } from './subtotal'
import { getTaxes } from './taxes'
import { getTotals } from './totals'
import { calculatePayments } from './payments'

export default (invoice) => {
  if (!invoice) throw new Error('No invoice received as argument!')

  const {
    item: InvoiceItem = [],
    date,
    payment_option: paymentOptions,
    sold_by_weight,
    invoice_option,
  } = invoice

  const item = InvoiceItem.map((item) => getItem(item, { sold_by_weight }))
  const subtotal = getSubtotal(item)
  const taxes = getTaxes(item)

  const total_price = getTotals(subtotal, taxes, invoice)

  const payment_option = calculatePayments(
    paymentOptions,
    invoice_option,
    total_price,
    date,
  )

  return {
    ...invoice,
    item,
    total_price,
    payment_option,
  }
}
