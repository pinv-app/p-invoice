import { getTaxes } from './taxes';

describe('Subtotal', () => {
  test('should calculate subtotal from items', (done) => {
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
          pricing: { list: 2, tax: { name: '22', value: 22 } },
          subtotal: 10,
        },
        quantity: 5,
      },
      {
        product: {
          pricing: { list: 4, tax: { name: '10', value: 10 } },
          subtotal: 12,
        },
        quantity: 3,
      },
      {
        product: {
          pricing: { list: 1.5, tax: { name: '10', value: 10 } },
          subtotal: 6,
        },
        quantity: 4,
      },
      {
        product: {
          pricing: { list: 10, tax: { name: '0', value: 0, nature: 'N1' } },
          subtotal: 10,
        },
        quantity: 1,
      },
    ];

    expect(getTaxes(items)).toEqual([
      {
        name: '0', value: 0, nature: 'N1', subtotal: 10, tax: 0,
      },
      {
        name: '10', value: 10, nature: '', subtotal: 18, tax: 1.8,
      },
      {
        name: '22', value: 22, nature: '', subtotal: 20, tax: 4.4,
      },
    ]);

    done();
  });
});
