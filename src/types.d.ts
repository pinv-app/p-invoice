export declare class Invoice {
  item: InvoiceItem[]
  total_price: InvoiceTotals
  invoice_option: InvoiceOption
  payment_option: InvoicePayment[]
  sold_by_weight: boolean
  date: Date
}

export declare class InvoiceItem {
  product: InvoiceProduct
  quantity: number
  subtotal?: number
  tax?: string | number
}

export declare class InvoiceProduct {
  pricing: InvoiceProductPrice
  weight?: InvoiceProductWeight
  subtotal?: number
}

export declare class InvoiceProductPrice {
  list: number
  tax: InvoiceProductPriceTax
}

export declare class InvoiceProductPriceTax {
  name: string
  value: number
  nature?: string
}

export declare class InvoiceProductWeight {
  tare: number
  gross: number
  net: number
}

export declare class InvoiceTotals {
  taxes: InvoiceTax[]
  it: InvoiceTotalsOptions
  subtotal: number
  tax: string | number
  total: number
}

export declare class InvoiceTax {
  name: string
  value: string
  subtotal: number
  tax: number
  nature?: string
}

export declare class InvoiceTotalsOptions {
  contributo_previdenziale: string
  imponibile_previdenziale: string
  imponibile_ritenuta: string
  ritenuta_dacconto: string
  rivalsa_inps: string
}

export declare class InvoiceOption {}

export declare class InvoicePayment {
  number: number
  deadline: number
  end_month: boolean
  expiration_date: Date
  percentage: number
  subtotal: number
  tax: number
  total: number
  tax_deductible: number
  payed: boolean
  payment_date: Date
}

export declare class GetItemOptions {
  sold_by_weight?: boolean
}
