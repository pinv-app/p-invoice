import calculateInvoice from './index';
import invoice from '../test/invoices/invoiceStandard';
import expected from '../test/invoices/expectedStandard';
import invoiceCassaRitenuta from '../test/invoices/invoiceCassaRitenuta';
import expectedCassaRitenuta from '../test/invoices/expectedCassaRitenuta';
import invoiceCassaEnasarco from '../test/invoices/invoiceCassaEnasarco';
import expectedCassaEnasarco from '../test/invoices/expectedCassaEnasarco';

it('calculates the invoice', () => {
  expect(calculateInvoice(invoice)).toMatchObject(expected);
});

it('calculates the invoice with cassa previdenziale and ritenuta acconto', () => {
  expect(calculateInvoice(invoiceCassaRitenuta)).toMatchObject(expectedCassaRitenuta);
});

it('calculates the invoice with cassa previdenziale Enasarco', () => {
  expect(calculateInvoice(invoiceCassaEnasarco)).toMatchObject(expectedCassaEnasarco);
});
