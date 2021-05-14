import { getTotals } from './totals'

describe('Totals', () => {
  test('should calculate totals without options', (done) => {
    const taxes = [
      {
        value: '22',
        subtotal: 14,
        tax: 3.08,
        name: '22',
      },
    ]

    expect(
      getTotals(14, taxes, {
        invoice_option: {
          it: {
            gestione_separata_inps: false,
            gestione_contributo_previdenziale: false,
            gestione_ritenuta_dacconto: false,
            gestione_marca_da_bollo: false,
            marca_da_bollo: 2,
            rivalsa_inps: {
              tax: null,
              valore: null,
            },
            contributo_previdenziale: {
              tax: '4',
              valore: '3',
            },
          },
        },
        total_price: {
          out_subtotal: [],
        },
      }),
    ).toEqual({
      taxes,
      subtotal: 14,
      tax: 3.08,
      total: 17.08,
      it: {
        contributo_previdenziale: '0',
        imponibile_previdenziale: '0',
        imponibile_ritenuta: '0',
        ritenuta_dacconto: '0',
        rivalsa_inps: '0',
      },
    })
    done()
  })

  test('should calculate totals with contributo previdenziale', (done) => {
    const taxes = [
      {
        name: '22',
        value: '22',
        tax: 50.82,
        subtotal: 231,
      },
    ]

    expect(
      getTotals(231, taxes, {
        invoice_option: {
          it: {
            gestione_separata_inps: false,
            gestione_contributo_previdenziale: true,
            marca_da_bollo: 2,
            gestione_ritenuta_dacconto: false,
            gestione_marca_da_bollo: false,
            rivalsa_inps: {
              tax: null,
              valore: null,
            },
            contributo_previdenziale: {
              tax: '12',
              valore: '7',
            },
            cliente_paga_marca_da_bollo: false,
          },
        },
        total_price: {
          out_subtotal: [],
        },
      }),
    ).toEqual({
      taxes: [
        {
          name: '22',
          value: '22',
          tax: 50.82,
          subtotal: 231,
        },
        {
          name: '',
          value: '12',
          tax: 1.94,
          subtotal: 16.17,
          nature: '',
        },
      ],
      subtotal: 231,
      tax: 52.76,
      total: 299.93,
      it: {
        contributo_previdenziale: '16.17',
        imponibile_previdenziale: '231',
        imponibile_ritenuta: '0',
        ritenuta_dacconto: '0',
        rivalsa_inps: '0',
      },
    })
    done()
  })

  test('should calculate totals with contributo previdenziale not on 100% of subtotal', (done) => {
    const taxes = [
      {
        name: '22',
        value: '22',
        tax: 50.82,
        subtotal: 231,
      },
    ]

    expect(
      getTotals(231, taxes, {
        invoice_option: {
          it: {
            gestione_separata_inps: false,
            gestione_contributo_previdenziale: true,
            marca_da_bollo: 2,
            gestione_ritenuta_dacconto: false,
            gestione_marca_da_bollo: false,
            rivalsa_inps: {
              tax: null,
              valore: null,
            },
            contributo_previdenziale: {
              tax: '12',
              valore: '7',
              percentuale: '50',
            },
            cliente_paga_marca_da_bollo: false,
          },
        },
        total_price: {
          out_subtotal: [],
        },
      }),
    ).toEqual({
      taxes: [
        {
          name: '22',
          value: '22',
          tax: 50.82,
          subtotal: 231,
        },
        {
          name: '',
          value: '12',
          tax: 0.97,
          subtotal: 8.09,
          nature: '',
        },
      ],
      subtotal: 231,
      tax: 51.79,
      total: 290.88,
      it: {
        contributo_previdenziale: '8.085',
        imponibile_previdenziale: '115.5',
        imponibile_ritenuta: '0',
        ritenuta_dacconto: '0',
        rivalsa_inps: '0',
      },
    })
    done()
  })

  test('should calculate totals with contributo previdenziale ENASARCO', (done) => {
    const taxes = [
      {
        name: '22',
        value: '22',
        tax: 50.82,
        subtotal: 231,
      },
    ]

    expect(
      getTotals(231, taxes, {
        invoice_option: {
          it: {
            gestione_separata_inps: false,
            gestione_contributo_previdenziale: true,
            marca_da_bollo: 2,
            gestione_ritenuta_dacconto: false,
            gestione_marca_da_bollo: false,
            rivalsa_inps: {
              tax: null,
              valore: null,
            },
            contributo_previdenziale: {
              tax: '0',
              nature: 'N2.1',
              valore: '7',
              tipo: 'TC07',
            },
            cliente_paga_marca_da_bollo: false,
          },
        },
        total_price: {
          out_subtotal: [],
        },
      }),
    ).toEqual({
      taxes: [
        {
          name: '22',
          value: '22',
          tax: 50.82,
          subtotal: 231,
        },
        {
          name: '',
          value: '0',
          tax: 0,
          subtotal: 16.17,
          nature: 'N2.1',
        },
      ],
      subtotal: 231,
      tax: 50.82,
      total: 265.65,
      it: {
        contributo_previdenziale: '16.17',
        imponibile_previdenziale: '231',
        imponibile_ritenuta: '0',
        ritenuta_dacconto: '0',
        rivalsa_inps: '0',
      },
    })
    done()
  })

  test('should calculate totals with gestione separata inps', (done) => {
    const taxes = [
      {
        name: '22',
        value: '22',
        tax: 50.82,
        subtotal: 231,
      },
    ]

    expect(
      getTotals(231, taxes, {
        invoice_option: {
          it: {
            gestione_separata_inps: true,
            gestione_contributo_previdenziale: false,
            marca_da_bollo: 2,
            gestione_ritenuta_dacconto: false,
            gestione_marca_da_bollo: false,
            rivalsa_inps: {
              tax: '10',
              valore: '5',
            },
            contributo_previdenziale: {
              tax: '12',
              valore: '7',
            },
            cliente_paga_marca_da_bollo: false,
          },
        },
        total_price: {
          out_subtotal: [],
        },
      }),
    ).toEqual({
      taxes: [
        {
          name: '22',
          value: '22',
          tax: 50.82,
          subtotal: 231,
        },
        {
          name: '',
          value: '10',
          tax: 1.16,
          subtotal: 11.55,
          nature: '',
        },
      ],
      subtotal: 231,
      tax: 51.98,
      total: 294.52,
      it: {
        contributo_previdenziale: '0',
        imponibile_previdenziale: '0',
        imponibile_ritenuta: '0',
        ritenuta_dacconto: '0',
        rivalsa_inps: '11.55',
      },
    })
    done()
  })

  test('should calculate totals with ritenuta acconto', (done) => {
    const taxes = [
      {
        value: '22',
        subtotal: 3765,
        tax: 828.3,
        name: '22',
      },
    ]

    expect(
      getTotals(3765, taxes, {
        invoice_option: {
          it: {
            gestione_separata_inps: false,
            gestione_contributo_previdenziale: false,
            marca_da_bollo: 2,
            gestione_ritenuta_dacconto: true,
            gestione_marca_da_bollo: false,
            rivalsa_inps: {
              tax: '22',
              valore: '12',
            },
            contributo_previdenziale: {
              tax: '22',
              valore: '11',
            },
            ritenuta_dacconto: '20',
            cliente_paga_marca_da_bollo: false,
          },
        },
      }),
    ).toEqual({
      taxes,
      subtotal: 3765,
      tax: 828.3,
      total: 3840.3,
      it: {
        contributo_previdenziale: '0',
        imponibile_previdenziale: '0',
        imponibile_ritenuta: '3765',
        ritenuta_dacconto: '753',
        rivalsa_inps: '0',
      },
    })
    done()
  })

  test('should calculate totals with ritenuta acconto not on 100% of subtotal', (done) => {
    const taxes = [
      {
        value: '22',
        subtotal: 3765,
        tax: 828.3,
        name: '22',
      },
    ]

    expect(
      getTotals(3765, taxes, {
        invoice_option: {
          it: {
            gestione_separata_inps: false,
            gestione_contributo_previdenziale: false,
            marca_da_bollo: 2,
            gestione_ritenuta_dacconto: true,
            gestione_marca_da_bollo: false,
            rivalsa_inps: {
              tax: '22',
              valore: '12',
            },
            contributo_previdenziale: {
              tax: '22',
              valore: '11',
            },
            ritenuta_dacconto: '20',
            percentuale_ritenuta_dacconto: '50',
            cliente_paga_marca_da_bollo: false,
          },
        },
      }),
    ).toEqual({
      taxes,
      subtotal: 3765,
      tax: 828.3,
      total: 4216.8,
      it: {
        contributo_previdenziale: '0',
        imponibile_previdenziale: '0',
        imponibile_ritenuta: '1882.5',
        ritenuta_dacconto: '376.5',
        rivalsa_inps: '0',
      },
    })
    done()
  })

  test('should calculate totals with marca da bollo', (done) => {
    const taxes = [
      {
        value: '22',
        subtotal: 218,
        tax: 47.96,
        name: '22',
      },
    ]

    expect(
      getTotals(218, taxes, {
        invoice_option: {
          it: {
            gestione_separata_inps: false,
            gestione_contributo_previdenziale: false,
            marca_da_bollo: 2,
            gestione_ritenuta_dacconto: false,
            gestione_marca_da_bollo: true,
            rivalsa_inps: {
              tax: null,
              valore: null,
            },
            contributo_previdenziale: {
              tax: '4',
              valore: '3',
            },
            cliente_paga_marca_da_bollo: true,
          },
        },
        total_price: {
          out_subtotal: [],
        },
      }),
    ).toEqual({
      taxes,
      subtotal: 218,
      tax: 47.96,
      total: 267.96,
      it: {
        contributo_previdenziale: '0',
        imponibile_previdenziale: '0',
        imponibile_ritenuta: '0',
        ritenuta_dacconto: '0',
        rivalsa_inps: '0',
      },
    })
    done()
  })
})
