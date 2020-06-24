import { addMonths, endOfMonth, addDays } from 'date-fns'
import { InvoicePayment } from './types'

export const calculateDates = (
  date: string | Date,
  paymentOptions: InvoicePayment[],
) => {
  const transformedDate = new Date(date)

  return paymentOptions.map((payment) => {
    const { deadline, end_month, payed } = payment

    let payment_date = payment.payment_date
    let expiration_date = payment.expiration_date

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
