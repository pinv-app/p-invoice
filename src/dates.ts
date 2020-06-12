import { addMonths, endOfMonth, addDays } from 'date-fns'
import { InvoicePayment } from './types'

export const calculateDates = (
  date: Date,
  paymentOptions: InvoicePayment[],
) => {
  return paymentOptions.map((payment) => {
    const { deadline, end_month, payed } = payment

    let expiration_date: Date = payment.expiration_date
    let payment_date: Date = payment.payment_date

    if (deadline % 30 === 0 && end_month) {
      expiration_date = endOfMonth(addMonths(date, deadline / 30))
    } else if (deadline % 30 === 0 && !end_month) {
      expiration_date = addDays(date, deadline)
    } else {
      expiration_date = endOfMonth(addDays(date, deadline))
    }

    if (!payed) payment_date = expiration_date

    return {
      ...payment,
      payment_date,
      expiration_date,
    }
  })
}
