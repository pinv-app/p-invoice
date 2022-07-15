import {
  addMonths, endOfMonth, addDays, isDate,
} from 'date-fns';
import { InvoicePayment, InvoiceOption, InvoiceTotals } from './types';
import { formatAmount } from './utils/formatAmount';

export const calculatePayments = (
  paymentOptions: InvoicePayment[],
  invoice_option: InvoiceOption,
  total_price: InvoiceTotals,
  date: string | Date,
) => calcTotalsFromPercentages(
  total_price,
  invoice_option,
  calculateDates(paymentOptions, date),
);

export const calculateDates = (
  paymentOptions: InvoicePayment[],
  date: string | Date = new Date(),
) => {
  if (!Array.isArray(paymentOptions) || paymentOptions.length === 0) {
    return paymentOptions;
  }

  const transformedDate = isDate(new Date(date)) ? new Date(date) : new Date();
  transformedDate.setHours(12, 0, 0, 0);

  return paymentOptions.map((payment) => {
    const { deadline = 0, end_month = false } = payment;

    let expiration_date;

    if (deadline % 30 === 0 && end_month) {
      expiration_date = endOfMonth(
        addMonths(transformedDate, deadline / 30),
      );
    } else if (end_month) {
      expiration_date = endOfMonth(
        addDays(transformedDate, deadline),
      );
    } else {
      expiration_date = addDays(transformedDate, deadline);
    }

    expiration_date.setHours(12, 0, 0, 0);

    const payment_date = isDate(payment.payment_date) && payment.payed
      ? new Date(payment.payment_date)
      : expiration_date;

    payment_date.setHours(12, 0, 0, 0);

    return {
      ...payment,
      payment_date: (new Date(payment_date)).toISOString(),
      expiration_date: (new Date(expiration_date)).toISOString(),
    };
  });
};

export const calcTotalsFromPercentages = (
  total_price: InvoiceTotals,
  invoice_option: InvoiceOption,
  payment_option: InvoicePayment[] = [],
) => {
  const numPayments = payment_option.length;
  let tempPerc = 0;
  let total = 0;
  let percTax = 0;

  const { it: invoice_option_it } = invoice_option || {};
  const { esigibilita_iva = 'I' } = invoice_option_it || {};

  if (esigibilita_iva === 'S') {
    total = (total_price.total || 0) - (Number(total_price.tax) || 0);
  } else {
    total = total_price.total || 0;
  }

  percTax = (Number(total_price.tax || 0) * 100) / total;

  return payment_option.map((payment, index) => {
    const paymt = { ...payment };

    if (index === numPayments - 1) {
      paymt.percentage = 100 - tempPerc;
    }

    tempPerc += paymt.percentage;

    const paymentTotal = Math.round(((total * paymt.percentage) / 100) * 100) / 100;
    const paymentTax = Math.round(((paymentTotal * percTax) / 100) * 100) / 100;
    const paymentSubtotal = Math.round((paymentTotal - paymentTax) * 100) / 100;

    paymt.total = formatAmount(paymentTotal);
    paymt.tax = formatAmount(paymentTax);
    paymt.subtotal = formatAmount(paymentSubtotal);

    return paymt;
  });
};
