import { InvoiceItem, InvoiceTax } from './types';
import { access } from 'fs';

const groupBy = (items, key) => items.reduce(
  (acc, item) => {

    return {
      ...acc,
      [item[key]]: [
        ...(acc[item[key]] || []),
        item,
      ],
    }
  },
  {},
);

export const getTaxes = (items: InvoiceItem[]): InvoiceTax[] => {
  const taxes = items.map(item => item.product.pricing.tax);

  const aaa =  groupBy(taxes, 'name')
  
  const bbb = Object.values(aaa)


  // console.log(aaa);
  return aaa;
  // return items.reduce((acc: InvoiceTax[], item: InvoiceItem) => {
  //   return {
  //     ...acc, item[item.product.pricing.tax.name]: {
  //       value: acc[item.product.pricing.tax.name].value + item.product.pricing.tax.value,
  //     }
  //   };
  // }, []);
};
