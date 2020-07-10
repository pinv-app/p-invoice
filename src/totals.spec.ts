import { getTotals } from './totals'

describe('Totals', () => {
  test('calc1', (done) => {
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
        imponibile_previdenziale: '14',
        imponibile_ritenuta: '0',
        ritenuta_dacconto: '0',
        rivalsa_inps: '0',
      },
    })
    done()
  })

  test('calc2', (done) => {
    const taxes = [
      {
        name: '22',
        value: '22',
        tax: 50.82,
        subtotal: 231,
      },
      {
        name: '12',
        value: '12',
        tax: 1.94,
        subtotal: 16.17,
      },
    ]

    expect(
      getTotals(231, taxes, {
        invoice_option: {
          it: {
            gestione_separata_inps: false,
            gestione_contributo_previdenziale: true,
            marca_da_bollo: 5,
            gestione_ritenuta_dacconto: false,
            gestione_marca_da_bollo: true,
            rivalsa_inps: {
              tax: null,
              valore: null,
            },
            contributo_previdenziale: {
              tax: '12',
              valore: '7',
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
      subtotal: 231,
      tax: 52.76,
      total: 304.93,
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

  test('calc3', (done) => {
    const taxes = [
      {
        value: '22',
        subtotal: 3793.4592,
        tax: 834.5610240000001,
        name: '22',
      },
    ]

    expect(
      getTotals(3765, taxes, {
        invoice_option: {
          it: {
            gestione_separata_inps: true,
            gestione_contributo_previdenziale: true,
            marca_da_bollo: 2,
            gestione_ritenuta_dacconto: true,
            gestione_marca_da_bollo: true,
            rivalsa_inps: {
              tax: '22',
              valore: '12',
            },
            contributo_previdenziale: {
              tax: '22',
              valore: '11',
            },
            ritenuta_dacconto: '12',
            cliente_paga_marca_da_bollo: true,
          },
        },
        total_price: {
          out_subtotal: [],
          it: {
            imponibile_previdenziale: 258.72,
          },
        },
      }),
    ).toEqual({
      taxes,
      subtotal: 3765,
      tax: 933.96,
      total: 4729.42,
      it: {
        contributo_previdenziale: '28.4592',
        imponibile_previdenziale: '258.72',
        imponibile_ritenuta: '3765',
        ritenuta_dacconto: '451.8',
        rivalsa_inps: '451.8',
      },
    })
    done()
  })

  test('calc3', (done) => {
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
        imponibile_previdenziale: '218',
        imponibile_ritenuta: '0',
        ritenuta_dacconto: '0',
        rivalsa_inps: '0',
      },
    })
    done()
  })

  test('calc3', (done) => {
    const taxes = [
      {
        value: '22',
        subtotal: 150,
        tax: 33,
        name: '22',
      },
      {
        name: '4',
        value: '4',
        tax: 0.18,
        subtotal: 4.5,
      },
    ]

    expect(
      getTotals(150, taxes, {
        invoice_option: {
          it: {
            gestione_separata_inps: true,
            gestione_contributo_previdenziale: true,
            marca_da_bollo: 2,
            gestione_ritenuta_dacconto: true,
            gestione_marca_da_bollo: true,
            rivalsa_inps: {
              tax: '4',
              valore: '4',
            },
            contributo_previdenziale: {
              tax: '4',
              valore: '3',
            },
            ritenuta_dacconto: '10',
            cliente_paga_marca_da_bollo: true,
          },
        },
        total_price: {
          out_subtotal: [],
          it: {
            imponibile_previdenziale: 150,
            imponibile_ritenuta: 150,
          },
        },
      }),
    ).toEqual({
      taxes,
      subtotal: 150,
      tax: 33.42,
      total: 180.92,
      it: {
        contributo_previdenziale: '4.5',
        imponibile_previdenziale: '150',
        imponibile_ritenuta: '150',
        ritenuta_dacconto: '15',
        rivalsa_inps: '6',
      },
    })
    done()
  })
})
