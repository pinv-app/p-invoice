import { getTotals } from './totals';

describe('Totals', () => {
  test('should calculate totals without options', (done) => {
    const taxes = [
      {
        value: '22',
        subtotal: 14,
        tax: 3.08,
        name: '22',
      },
    ];

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
        ritenuta_enasarco: '0',
        rivalsa_inps: '0',
      },
    });
    done();
  });

  test('should calculate totals with contributo previdenziale', (done) => {
    const taxes = [
      {
        name: '22',
        value: '22',
        tax: 50.82,
        subtotal: 231,
      },
    ];

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
        ritenuta_enasarco: '0',
        rivalsa_inps: '0',
      },
    });
    done();
  });

  test('should calculate totals with contributo previdenziale not on 100% of subtotal', (done) => {
    const taxes = [
      {
        name: '22',
        value: '22',
        tax: 50.82,
        subtotal: 231,
      },
    ];

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
        ritenuta_enasarco: '0',
        rivalsa_inps: '0',
      },
    });
    done();
  });

  test('should calculate totals with contributo previdenziale ENASARCO', (done) => {
    const taxes = [
      {
        name: '22',
        value: '22',
        tax: 50.82,
        subtotal: 231,
      },
    ];

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
        ritenuta_enasarco: '0',
        rivalsa_inps: '0',
      },
    });
    done();
  });

  test('should calculate totals with contributo previdenziale ENASARCO ritenuta', (done) => {
    const taxes = [
      {
        name: '22',
        value: '22',
        tax: 50.82,
        subtotal: 231,
      },
    ];
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
              enasarco: {
                enabled: true,
                percentuale: 8,
                ritenuta: 'RT04',
              },
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
      ],
      subtotal: 231,
      tax: 50.82,
      total: 263.34,
      it: {
        contributo_previdenziale: '0',
        imponibile_previdenziale: '231',
        imponibile_ritenuta: '0',
        ritenuta_dacconto: '0',
        ritenuta_enasarco: '18.48',
        rivalsa_inps: '0',
      },
    });
    done();
  });

  test('should calculate totals with both ritenuta d\'acconto and ritenuta d\'acconto ENASARCO', (done) => {
    const taxes = [
      {
        name: '22',
        value: '22',
        tax: 22,
        subtotal: 100,
      },
    ];

    expect(
      getTotals(100, taxes, {
        invoice_option: {
          it: {
            gestione_separata_inps: false,
            gestione_contributo_previdenziale: true,
            marca_da_bollo: 2,
            gestione_ritenuta_dacconto: true,
            gestione_marca_da_bollo: false,
            rivalsa_inps: {
              tax: null,
              valore: null,
            },
            contributo_previdenziale: {
              tax: '0',
              nature: 'N2.2',
              valore: '0',
              tipo: 'TC07',
              enasarco: {
                enabled: true,
                percentuale: 1,
                ritenuta: 'RT04',
              },
            },
            ritenuta_dacconto: '20',
            cliente_paga_marca_da_bollo: false,
            tipo_ritenuta: 'RT02',
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
          tax: 22,
          subtotal: 100,
        },
      ],
      subtotal: 100,
      tax: 22,
      total: 101,
      it: {
        contributo_previdenziale: '0',
        imponibile_previdenziale: '100',
        imponibile_ritenuta: '100',
        ritenuta_dacconto: '20',
        ritenuta_enasarco: '1',
        rivalsa_inps: '0',
      },
    });
    done();
  });

  test('should calculate totals with gestione separata inps', (done) => {
    const taxes = [
      {
        name: '22',
        value: '22',
        tax: 50.82,
        subtotal: 231,
      },
    ];

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
        ritenuta_enasarco: '0',
        rivalsa_inps: '11.55',
      },
    });
    done();
  });

  test('should calculate totals with ritenuta acconto', (done) => {
    const taxes = [
      {
        value: '22',
        subtotal: 3765,
        tax: 828.3,
        name: '22',
      },
    ];

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
        ritenuta_enasarco: '0',
        rivalsa_inps: '0',
      },
    });
    done();
  });

  test('should calculate totals with ritenuta acconto not on 100% of subtotal', (done) => {
    const taxes = [
      {
        value: '22',
        subtotal: 3765,
        tax: 828.3,
        name: '22',
      },
    ];

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
        ritenuta_enasarco: '0',
        rivalsa_inps: '0',
      },
    });
    done();
  });

  test('should calculate totals with marca da bollo', (done) => {
    const taxes = [
      {
        value: '22',
        subtotal: 218,
        tax: 47.96,
        name: '22',
      },
    ];

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
        ritenuta_enasarco: '0',
        rivalsa_inps: '0',
      },
    });
    done();
  });

  test('should calculate totals with contributo previdenziale and art15', (done) => {
    const taxes = [
      {
        name: '22',
        value: '22',
        tax: 220,
        subtotal: 1000,
      },
      {
        name: 'art15',
        value: '0',
        tax: 0,
        subtotal: 500,
        nature: 'N1',
      },
    ];

    expect(
      getTotals(1500, taxes, {
        invoice_option: {
          it: {
            gestione_separata_inps: false,
            gestione_contributo_previdenziale: false,
            marca_da_bollo: 0,
            gestione_ritenuta_dacconto: true,
            gestione_marca_da_bollo: false,
            rivalsa_inps: {
              tax: null,
              valore: null,
            },
            contributo_previdenziale: {
              tax: '12',
              valore: '7',
            },
            ritenuta_dacconto: '20',
            percentuale_ritenuta_dacconto: '100',
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
          tax: 220,
          subtotal: 1000,
        },
        {
          name: 'art15',
          value: '0',
          tax: 0,
          subtotal: 500,
          nature: 'N1',
        },
      ],
      subtotal: 1500,
      tax: 220,
      total: 1520,
      it: {
        contributo_previdenziale: '0',
        imponibile_previdenziale: '0',
        imponibile_ritenuta: '1000',
        ritenuta_dacconto: '200',
        ritenuta_enasarco: '0',
        rivalsa_inps: '0',
      },
    });
    done();
  });
  test('should calculate totals with gestione separata INPS with Ritenuta di acconto', (done) => {
    const taxes = [
      {
        name: '22',
        value: '22',
        tax: 22,
        subtotal: 100,
      },
    ];

    expect(
      getTotals(100, taxes, {
        invoice_option: {
          it: {
            gestione_separata_inps: true,
            gestione_contributo_previdenziale: false,
            marca_da_bollo: 0,
            gestione_ritenuta_dacconto: true,
            gestione_marca_da_bollo: false,
            rivalsa_inps: {
              tax: 22,
              valore: 33,
            },
            ritenuta_dacconto: '20',
            percentuale_ritenuta_dacconto: '100',
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
          tax: 22,
          subtotal: 100,
        },
        {
          name: '',
          value: '22',
          tax: 7.26,
          subtotal: 33,
          nature: '',
        },
      ],
      subtotal: 100,
      tax: 29.26,
      total: 135.66,
      it: {
        contributo_previdenziale: '0',
        imponibile_previdenziale: '0',
        imponibile_ritenuta: '133',
        ritenuta_dacconto: '26.6',
        ritenuta_enasarco: '0',
        rivalsa_inps: '33',
      },
    });
    done();
  });

  test('should calculate totals with gestione separata inps and art15', (done) => {
    const taxes = [
      {
        name: '22',
        value: '22',
        tax: 22,
        subtotal: 100,
      },
    ];

    expect(
      getTotals(100, taxes, {
        invoice_option: {
          it: {
            gestione_separata_inps: true,
            gestione_contributo_previdenziale: false,
            marca_da_bollo: null,
            gestione_ritenuta_dacconto: false,
            gestione_marca_da_bollo: false,
            rivalsa_inps: {
              nature: 'N1',
              tax: '20.00',
              valore: '10',
            },
            ritenuta_dacconto: null,
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
          tax: 22,
          subtotal: 100,
        },
        {
          name: '',
          value: '20',
          tax: 2,
          subtotal: 10,
          nature: 'N1',
        },
      ],
      subtotal: 100,
      tax: 24,
      total: 134,
      it: {
        contributo_previdenziale: '0',
        imponibile_previdenziale: '0',
        imponibile_ritenuta: '0',
        ritenuta_dacconto: '0',
        ritenuta_enasarco: '0',
        rivalsa_inps: '10',
      },
    });
    done();
  });
});
