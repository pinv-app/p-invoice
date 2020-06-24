import { getItem } from './item'
import { getSubtotal } from './subtotal'
import { getTaxes } from './taxes'
import { getTotals } from './totals'
import { calculateDates } from './dates'
import { InvoicePayment, InvoiceTotals, InvoiceOption } from './types'

export default (invoice) => {
  if (!invoice) throw new Error('No invoice received passed as argument!')

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
  const payment_option = updateTotals(
    calcTotalsFromPercentages(
      calculateDates(
        date,
        calculateDeadlineAndPercentageOptions(paymentOptions),
      ),
      invoice_option,
      total_price,
    ),
    invoice_option,
    total_price,
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
  const length = payment_option.length

  return payment_option.map((payment, index) => {
    payment.percentage = Math.round((100 / length) * 100) / 100
    payment.deadline = payment.deadline * (index + 1)

    return payment
  })
}

function calcTotalsFromPercentages(
  payment_option: InvoicePayment[] = [],
  invoice_option: InvoiceOption,
  total_price: InvoiceTotals,
) {
  let paymentTotal = 0
  const numPayments = payment_option.length
  let tempPerc = 0
  let total = 0

  const { it: invoice_option_it } = invoice_option || {}
  const { esigibilita_iva = 'I' } = invoice_option_it || {}

  if (esigibilita_iva === 'S') {
    total = (total_price.total || 0) - (Number(total_price.tax) || 0)
  } else {
    total = total_price.total || 0
  }

  return payment_option.map((payment, index) => {
    var percentage = payment.percentage

    if (index === numPayments - 1) {
      payment.percentage = percentage = 100 - tempPerc
    }

    tempPerc += percentage

    paymentTotal = (total * percentage) / 100
    paymentTotal = Math.round(paymentTotal * 100) / 100
    payment.total = paymentTotal

    return payment
  })
}

function updateTotals(
  payment_option: InvoicePayment[] = [],
  invoice_option: InvoiceOption,
  total_price: InvoiceTotals,
) {
  var paymentSubtotal = 0,
    paymentTax = 0
  const numPayments = payment_option.length
  let tempTotal = 0
  let total = 0
  let tax = 0
  let total_deductible = 0
  let percTax = 0

  const { it: invoice_option_it } = invoice_option
  const { esigibilita_iva = 'I' } = invoice_option_it

  if (esigibilita_iva === 'S') {
    total = (total_price.total || 0) - (Number(total_price.tax) || 0)
  } else {
    total = total_price.total || 0
  }

  tax = Number(total_price.tax) || 0
  total_deductible = total_price.total_deductible || 0

  total_price.total = Math.round(total_price.total * 100) / 100
  total_price.total_deductible = Math.round(total_deductible * 100) / 100

  percTax = (tax * 100) / total

  return payment_option.map(function (payment, index) {
    payment.number = index + 1

    if (index === numPayments - 1) {
      payment.total = total - tempTotal
      payment.total = Math.round(payment.total * 100) / 100
    }

    tempTotal += payment.total

    payment.percentage = Math.round(((payment.total * 100) / total) * 100) / 100

    paymentTax = (payment.total * percTax) / 100
    paymentTax = Math.round(paymentTax * 100) / 100
    paymentSubtotal = payment.total - paymentTax
    paymentSubtotal = Math.round(paymentSubtotal * 100) / 100

    payment.subtotal = paymentSubtotal
    payment.tax = paymentTax

    return payment
  })
}
