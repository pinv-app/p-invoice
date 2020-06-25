import { addMonths, endOfMonth, addDays, isDate } from 'date-fns'
import { InvoicePayment, InvoiceOption, InvoiceTotals } from './types'

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
  date: string | Date,
  paymentOptions: InvoicePayment[],
) => {
  const transformedDate = new Date(date)

  return paymentOptions.map((payment) => {
    const { deadline, end_month, payed } = payment

    let payment_date = isDate(payment.payment_date)
      ? payment.payment_date
      : new Date()

    let expiration_date = isDate(payment.expiration_date)
      ? payment.expiration_date
      : new Date()

    if (deadline % 30 === 0 && end_month) {
      expiration_date = endOfMonth(
        addMonths(transformedDate, deadline / 30),
      ).toISOString()
    } else if (deadline % 30 === 0 && !end_month) {
      expiration_date = addDays(transformedDate, deadline).toISOString()
    } else {
      expiration_date = endOfMonth(
        addDays(transformedDate, deadline),
      ).toISOString()
    }

    payment_date = new Date(expiration_date).toISOString()

    return {
      ...payment,
      payment_date,
      expiration_date,
    }
  })
}

export const calcTotalsFromPercentages = (
  payment_option: InvoicePayment[] = [],
  invoice_option: InvoiceOption,
  total_price: InvoiceTotals,
) => {
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
    if (index === numPayments - 1) {
      payment.percentage = 100 - tempPerc
    }

    tempPerc += payment.percentage

    paymentTotal = (total * payment.percentage) / 100
    paymentTotal = Math.round(paymentTotal * 100) / 100
    payment.total = paymentTotal

    return payment
  })
}
