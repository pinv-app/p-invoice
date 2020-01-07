import { getSubtotal } from './subtotal'

describe('Subtotal', () => {
  test('should calculate items subtotal', done => {
    const items = [
      {
        product: {
          pricing: { list: 5, tax: { name: '22', value: 22 } },
          quantity: 2,
          subtotal: 10,
        },
      },
      {
        product: {
          pricing: { list: 5, tax: { name: '22', value: 22 } },
          quantity: 3,
          subtotal: 15,
        },
      },
    ]

    expect(getSubtotal(items)).toBe(25)
    done()
  })
})
