import { getItem } from './item'
import { getSubtotal } from './subtotal'
import { getTaxes } from './taxes'
import { getTotals } from './totals'
import { calculateDates } from './dates'

export default (invoice) => {
  if (!invoice) throw new Error('No invoice received passed as argument!')

  const {
    item: InvoiceItem = [],
    date,
    payment_option: paymentOptions,
  } = invoice

  const item = InvoiceItem.map((item) => getItem(item))
  const subtotal = getSubtotal(item)
  const taxes = getTaxes(item)

  const total_price = getTotals(subtotal, taxes, invoice)
  const payment_option = calculateDates(date, paymentOptions)

  return {
    ...invoice,
    item,
    total_price,
    payment_option,
  }
}
