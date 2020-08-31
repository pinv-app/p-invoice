import { calculateDates } from './payments'

describe('Dates', () => {
  test('should recalculate dates', () => {
    const date = new Date('2020-06-12')

    const payments = [
      {
        number: 1,
        deadline: 30,
        end_month: true,
        expiration_date: new Date('2020-07-31'),
        percentage: 100,
        subtotal: 1,
        tax: 0.22,
        total: 1.22,
        tax_deductible: 0,
        payed: false,
        payment_date: new Date('2020-07-31'),
      },
      {
        number: 2,
        deadline: 60,
        end_month: false,
        expiration_date: new Date('2020-08-11'),
        percentage: 100,
        subtotal: 1,
        tax: 0.22,
        total: 1.22,
        tax_deductible: 0,
        payed: false,
        payment_date: new Date('2020-08-11'),
      },
      {
        number: 3,
        deadline: 24,
        end_month: false,
        expiration_date: new Date('2020-07-31'),
        percentage: 100,
        subtotal: 1,
        tax: 0.22,
        total: 1.22,
        tax_deductible: 0,
        payed: true,
        payment_date: new Date('2020-07-31'),
      },
      {
        number: 4,
        deadline: 24,
        end_month: false,
        expiration_date: new Date('2020-07-31'),
        percentage: 100,
        subtotal: 1,
        tax: 0.22,
        total: 1.22,
        tax_deductible: 0,
        payed: false,
        payment_date: new Date('2020-07-31'),
      },
    ]

    const expected = [
      {
        number: 1,
        deadline: 30,
        end_month: true,
        expiration_date: '2020-07-31T10:00:00.000Z',
        percentage: 100,
        subtotal: 1,
        tax: 0.22,
        total: 1.22,
        tax_deductible: 0,
        payed: false,
        payment_date: '2020-07-31T10:00:00.000Z',
      },
      {
        number: 2,
        deadline: 60,
        end_month: false,
        expiration_date: '2020-08-11T10:00:00.000Z',
        percentage: 100,
        subtotal: 1,
        tax: 0.22,
        total: 1.22,
        tax_deductible: 0,
        payed: false,
        payment_date: '2020-08-11T10:00:00.000Z',
      },
      {
        number: 3,
        deadline: 24,
        end_month: false,
        expiration_date: '2020-07-06T10:00:00.000Z',
        percentage: 100,
        subtotal: 1,
        tax: 0.22,
        total: 1.22,
        tax_deductible: 0,
        payed: true,
        payment_date: '2020-07-31T10:00:00.000Z',
      },
      {
        number: 4,
        deadline: 24,
        end_month: false,
        expiration_date: '2020-07-06T10:00:00.000Z',
        percentage: 100,
        subtotal: 1,
        tax: 0.22,
        total: 1.22,
        tax_deductible: 0,
        payed: false,
        payment_date: '2020-07-06T10:00:00.000Z',
      },
    ]

    expect(calculateDates(date, payments)).toEqual(expected)
  })
})
