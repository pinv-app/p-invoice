import { InvoiceItem, GetItemOptions } from './types';

export const getItem = (item: InvoiceItem, options?: GetItemOptions): InvoiceItem => {
  const {
    quantity,
    product: {
      pricing: {
        list = 0,
        tax: {
          value: taxValue = 22,
        } = {},
      } = {},
      weight: {
        net = 0,
      } = {},
    } = {},
  } = item;

  const { sold_by_weight } = options || {};

  const subtotal = sold_by_weight === true && net !== 0 ? list * net : quantity * list;
  const product = { ...item.product, subtotal, tax: taxValue }

  return { ...item, product }
};
