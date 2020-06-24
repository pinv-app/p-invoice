import { getItem } from './item'
import { getSubtotal } from './subtotal'
import { getTaxes } from './taxes'
import { getTotals } from './totals'
import { calculateDates } from './dates'
import { InvoicePayment, InvoiceTotals } from './types'

export default (invoice) => {
  if (!invoice) throw new Error('No invoice received passed as argument!')

  const {
    item: InvoiceItem = [],
    date,
    payment_option: paymentOptions,
    sold_by_weight,
  } = invoice

  const item = InvoiceItem.map((item) => getItem(item, { sold_by_weight }))
  const subtotal = getSubtotal(item)
  const taxes = getTaxes(item)

  const total_price = getTotals(subtotal, taxes, invoice)
  const payment_option = calculateDates(
    date,
    calculateDeadlineAndPercentageOptions(paymentOptions),
  )

  return {
    ...invoice,
    item,
    total_price,
    payment_option,
  }
}

function calculateDeadlineAndPercentageOptions(
  payment_option: InvoicePayment[],
) {
  const new_payment_options = [...payment_option]

  const length = payment_option.length

  // Calcolo percentuale e deadline
  new_payment_options.forEach((payment, index) => {
    payment.percentage = Math.round((100 / length) * 100) / 100
    payment.deadline = payment.deadline * (index + 1)
  })

  return new_payment_options
}
