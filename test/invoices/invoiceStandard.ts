export default {
  _id: '5e01e244593012001183aa41',
  _workspace: '5a8414f5fa7643000f1060e9',
  number: 155,
  flag: '',
  year: '2019',
  date: '2019-12-24T12:00:00.000Z',
  item: [
    {
      _id: '5e01e244593012001183aa42',
      product: {
        title: 'Consulenza xxx',
        pricing: {
          tax: {
            name: '22',
            value: 22,
          },
          list: 1000,
        },
      },
      quantity: 1,
    },
    {
      product: {
        title: 'Consulenza yyy',
        pricing: {
          tax: {
            name: '22',
            value: 22,
            nature: '',
          },
          list: 1000.50502,
        },
      },
      quantity: 2,
    },
    {
      product: {
        title: 'Consulenza www',
        pricing: {
          tax: {
            name: '0',
            value: 0,
            nature: 'N1',
          },
          list: 100,
        },
      },
      quantity: 1,
    },
  ],
  payment_option: [
    {
      description: 'Bonifico bancario',
      deadline: 30,
      end_month: true,
      percentage: 100,
      number: 1,
      _id: '5e01e244593012001183aa43',
      payment_date: '2020-01-31T22:59:59.999Z',
      payed: false,
      tax_deductible: 0,
      expiration_date: '2020-01-31T22:59:59.999Z',
      payment_mode: 'MP05',
    },
  ],
  invoice_option: {
    type: 'invoice',
    currency: 'EUR',
    note:
      "Operazione senza l'applicazione dell'IVA ai sensi dell'art. 1, comma 58, Legge n. 190/2014, regime forfettario, senza applicazione della ritenuta d'acconto alla fonte a titolo d’acconto.",
    show_note: true,
    hide_deadlines: false,
    deadline: 30,
    it: {
      marca_da_bollo: 2,
      gestione_contributo_previdenziale: false,
      gestione_separata_inps: false,
      esigibilita_iva: 'I',
      gestione_ritenuta_dacconto: false,
      cliente_paga_marca_da_bollo: false,
      gestione_marca_da_bollo: false,
      rivalsa_inps: {
        tax: null,
        valore: null,
      },
      contributo_previdenziale: {
        nome: 'nome cassa',
        tipo: 'TC03',
        tax: 4,
        valore: 3,
      },
    },
  },
  regime_iva_per_cassa: true,
  transport: {
    packages: 2,
    time: '2019-12-24T10:02:00.000Z',
    date: '2019-12-24T12:00:00.000Z',
    type: 'freePort',
    by: 'paid',
    aspect: 'A vista',
    reason: 'Vendita',
    recipient: {
      address: {},
    },
  },
  einvoice: {
    notifications: [],
    transmissionData: {
      counter: 0,
    },
  },
  order_info: {
    status: 'draft',
  },
  sold_by_weight: false,
  tags: [],
  company_info: {
    custom_header: false,
    logo:
      'https://pinv-app-staging.s3.eu-west-1.amazonaws.com/resized%2Fworkspaces%2Fprofiles%2F5a8414f5fa7643000f1060e9%2F0mw5S1KC0Czu6543_img_3394.png',
    vat: '03469550986',
    codice_fiscale: '03469550986',
    company: 'Palmabit',
    header: {
      r2: '',
      r1: '',
    },
    bank: {
      name: 'Banca Palmabit',
      agency: 'Montichiari',
      IBAN: 'IT00A0123454321000000123456',
    },
    contact: {
      address: {
        nation: 'it',
        state: 'BS',
        city: 'Montichiari',
        zip: '25018',
        number: '5',
        rue: 'Via Monsignor Oscar Romero',
      },
    },
  },
  customer_type: 'company',
  customer_legal_info: {
    customer_type: 'company',
  },
  reference_docs: [],
};
