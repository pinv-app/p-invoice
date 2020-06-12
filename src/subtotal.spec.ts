import { getSubtotal } from './subtotal'

describe('Subtotal', () => {
  test('should calculate items subtotal', (done) => {
    const items = [
      {
        product: {
          pricing: { list: 5, tax: { name: '22', value: 22 } },
          subtotal: 10,
        },
        quantity: 2,
      },
      {
        product: {
          pricing: { list: 5, tax: { name: '22', value: 22 } },
          subtotal: 15,
        },
        quantity: 3,
      },
    ]

    expect(getSubtotal(items)).toBe(25)
    done()
  })
})
