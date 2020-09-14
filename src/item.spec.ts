import { getItem } from './item'

describe('Item', () => {
  test('should calculate item total', (done) => {
    const item = getItem({
      quantity: 2,
      product: {
        pricing: {
          list: 10,
          tax: {
            name: '22',
            value: 22
          },
        },
      },
    });

    expect(item).toEqual({
      quantity: 2,
      product: {
        pricing: {
          list: 10,
          tax: {
            name: '22',
            value: 22,
            nature: '',
          },
        },
        subtotal: 20,
        tax: 22,
      },
    });

    done();
  });

  test('should calculate item total with more than 2 decimals', (done) => {
    const item = getItem({
      quantity: 2.12345,
      product: {
        pricing: {
          list: 10.54,
          tax: {
            name: '22',
            value: 22
          },
        },
      },
    });

    expect(item).toEqual({
      quantity: 2.12345,
      product: {
        pricing: {
          list: 10.54,
          tax: {
            name: '22',
            value: 22,
            nature: '',
          },
        },
        subtotal: 22.381163,
        tax: 22,
      },
    });

    done();
  });

  test('should calculate item if it is sold by weight', (done) => {
    const options = { sold_by_weight: true };

    const item = getItem({
      quantity: 2,
      product: {
        pricing: {
          list: 10,
          tax: {
            name: '22',
            value: 22
          },
        },
        weight: {
          tare: 0.1,
          gross: 3.1,
          net: 3,
        },
      },
    }, options);

    expect(item).toEqual({
      quantity: 2,
      product: {
        pricing: {
          list: 10,
          tax: {
            name: '22',
            value: 22,
            nature: '',
          },
        },
        weight: {
          tare: 0.1,
          gross: 3.1,
          net: 3,
        },
        subtotal: 30,
        tax: 22,
      },
    });

    done();
  });

  test('should calculate item if it is sold by weight and net is 0', (done) => {
    const options = { sold_by_weight: true };

    const item = getItem({
      quantity: 2,
      product: {
        pricing: {
          list: 10,
          tax: {
            name: '22',
            value: 22
          },
        },
        weight: {
          tare: 0,
          gross: 0,
          net: 0,
        },
      },
    }, options);

    expect(item).toEqual({
      quantity: 2,
      product: {
        pricing: {
          list: 10,
          tax: {
            name: '22',
            value: 22,
            nature: '',
          },
        },
        weight: {
          tare: 0,
          gross: 0,
          net: 0,
        },
        subtotal: 20,
        tax: 22,
      },
    });

    done();
  });

  test('should calculate item if tax is 0', (done) => {
    const options = { sold_by_weight: true };

    const item = getItem({
      quantity: 2,
      product: {
        pricing: {
          list: 10,
          tax: {
            name: '0',
            value: 0,
            nature: 'N1',
          },
        },
        weight: {
          tare: 0,
          gross: 0,
          net: 0,
        },
      },
    }, options);

    expect(item).toEqual({
      quantity: 2,
      product: {
        pricing: {
          list: 10,
          tax: {
            name: '0',
            value: 0,
            nature: 'N1',
          },
        },
        weight: {
          tare: 0,
          gross: 0,
          net: 0,
        },
        subtotal: 20,
        tax: 0,
      },
    });

    done();
  });
});
