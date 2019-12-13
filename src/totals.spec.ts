import {getTotals} from './totals'

describe('Totals', () => {
    test('should calculate total from items', done => {
      const taxes = [
        { name: '10', value: '10', subtotal: 18, tax: 2 },
        { name: '22', value: '22', subtotal: 20, tax: 4.5 },
      ]
  
      expect(getTotals(38, taxes) ).toEqual({
          taxes,
          subtotal: 38,
          tax: 6.5,
          total: 44.5
      });
      done();
    });
  });
  