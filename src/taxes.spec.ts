import { getTaxes } from './taxes'

describe('Subtotal', () => {
  test('should calculate subtotal from items', (done) => {
    const items = [
      {
        product: {
          pricing: { list: 5, tax: { name: '22', value: 22 } },
        },
        quantity: 2,
        subtotal: 10,
      },
      {
        product: {
          pricing: { list: 4, tax: { name: '10', value: 10 } },
        },
        quantity: 3,
        subtotal: 12,
      },
      {
        product: {
          pricing: { list: 2, tax: { name: '22', value: 22 } },
        },
        quantity: 5,
        subtotal: 10,
      },
      {
        product: {
          pricing: { list: 1.5, tax: { name: '10', value: 10 } },
        },
        quantity: 4,
        subtotal: 6,
      },
    ];

    expect(getTaxes(items)).toBe([
      { name: '22', value: 22, subtotal: 20, tax: 4.4 },
      { name: '10', value: 10, subtotal: 18, tax: 1.8 },
    ]);
    done();
  });
});
