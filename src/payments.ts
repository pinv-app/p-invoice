import { addMonths, endOfMonth, addDays, isDate, setHours } from 'date-fns'
import { InvoicePayment, InvoiceOption, InvoiceTotals } from './types'
import { formatAmount } from './utils/formatAmount'

export const calculatePayments = (
  paymentOptions: InvoicePayment[],
  invoice_option: InvoiceOption,
  total_price: InvoiceTotals,
  date: string | Date,
) => {
  return calcTotalsFromPercentages(
    calculateDates(date, paymentOptions),
    invoice_option,
    total_price,
  )
}

export const calculateDates = (
  date: string | Date = new Date(),
  paymentOptions: InvoicePayment[],
) => {
  const transformedDate = isDate(new Date(date)) ? new Date(date) : new Date()
  transformedDate.setHours(12, 0, 0, 0)

  return paymentOptions.map((payment) => {
    const { deadline, end_month } = payment

    let expiration_date

    if (deadline % 30 === 0 && end_month) {
      expiration_date = endOfMonth(
        addMonths(transformedDate, deadline / 30),
      )
    } else if (end_month) {
      expiration_date = endOfMonth(
        addDays(transformedDate, deadline),
      )
    } else {
      expiration_date = addDays(transformedDate, deadline)
    }

    expiration_date.setHours(12, 0, 0, 0)

    let payment_date = isDate(payment.payment_date) && payment.payed
      ? new Date(payment.payment_date)
      : expiration_date

    payment_date.setHours(12, 0, 0, 0)

    return {
      ...payment,
      payment_date: payment_date.toISOString(),
      expiration_date: expiration_date.toISOString(),
    }
  })
}

export const calcTotalsFromPercentages = (
  payment_option: InvoicePayment[] = [],
  invoice_option: InvoiceOption,
  total_price: InvoiceTotals,
) => {
  const numPayments = payment_option.length
  let tempPerc = 0
  let total = 0
  let percTax = 0

  const { it: invoice_option_it } = invoice_option || {}
  const { esigibilita_iva = 'I' } = invoice_option_it || {}

  if (esigibilita_iva === 'S') {
    total = (total_price.total || 0) - (Number(total_price.tax) || 0)
  } else {
    total = total_price.total || 0
  }

  percTax = (Number(total_price.tax || 0) * 100) / total

  return payment_option.map((payment, index) => {
    if (index === numPayments - 1) {
      payment.percentage = 100 - tempPerc
    }

    tempPerc += payment.percentage

    const paymentTotal =
      Math.round(((total * payment.percentage) / 100) * 100) / 100
    const paymentTax = Math.round(((paymentTotal * percTax) / 100) * 100) / 100
    const paymentSubtotal = Math.round((paymentTotal - paymentTax) * 100) / 100

    payment.total = formatAmount(paymentTotal)
    payment.tax = formatAmount(paymentTax)
    payment.subtotal = formatAmount(paymentSubtotal)

    return payment
  })
}
