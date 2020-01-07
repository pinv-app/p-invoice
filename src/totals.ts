import { InvoiceTax, InvoiceTotals } from './types'
import { formatAmount } from './utils/formatAmount'

export const getTotals = (subtotal: number, taxes: InvoiceTax[], Invoice): InvoiceTotals => {
  const {
    invoice_option: {
      it: {
        gestione_separata_inps = false,
        gestione_contributo_previdenziale = false,
        gestione_ritenuta_dacconto = false,
        gestione_marca_da_bollo = false,
        ritenuta_dacconto = '',
        cliente_paga_marca_da_bollo = false,
        marca_da_bollo = 0,
        rivalsa_inps = { tax: null, valore: null },
        contributo_previdenziale = { tax: '', valore: '' },
      } = {},
      customer_type = '',
    } = {},
    total_price: { out_subtotal = [], it: { imponibile_previdenziale = 0 } = {} } = {},
  } = Invoice || {}

  // ----------

  let totalTaxes = taxes.reduce((acc, val) => acc + val.tax, 0)
  let total = subtotal + totalTaxes

  let contributo_previdenziale_percentuale = 0,
    rivalsa_percentuale = 0,
    rivalsa_tax = 0

  const it = {
    contributo_previdenziale: 0,
    imponibile_previdenziale: 0,
    imponibile_ritenuta: 0,
    ritenuta_dacconto: 0,
    rivalsa_inps: 0,
  }

  // Cassa previdenziale
  if (gestione_contributo_previdenziale) {
    contributo_previdenziale_percentuale = parseFloat(contributo_previdenziale.valore) || 0
  }

  // Gestione separata INPS (rivalsa INPS)
  if (gestione_separata_inps) {
    rivalsa_percentuale = parseFloat(rivalsa_inps.valore) || 0
    rivalsa_tax = parseFloat(rivalsa_inps.tax) || 0

    it.rivalsa_inps = (subtotal * rivalsa_percentuale) / 100

    it.imponibile_previdenziale = imponibile_previdenziale || subtotal + it.rivalsa_inps
  } else {
    it.imponibile_previdenziale = imponibile_previdenziale || subtotal
  }

  // Calcolo contributo_previdenziale
  it.contributo_previdenziale = (it.imponibile_previdenziale * contributo_previdenziale_percentuale) / 100

  // IVA su rivalsa INPS
  if (it.rivalsa_inps) {
    totalTaxes = totalTaxes + (it.rivalsa_inps * rivalsa_tax) / 100
  }

  // Ritenuta d'acconto
  if (gestione_ritenuta_dacconto && (!customer_type || customer_type === 'company') && parseFloat(ritenuta_dacconto) > 0) {
    it.imponibile_ritenuta = it.imponibile_ritenuta || subtotal
    it.ritenuta_dacconto = (it.imponibile_ritenuta * parseFloat(ritenuta_dacconto)) / 100
  }

  // Totale da pagare
  total = subtotal + totalTaxes + it.contributo_previdenziale + it.rivalsa_inps - it.ritenuta_dacconto

  // Marca da bollo
  if (gestione_marca_da_bollo && cliente_paga_marca_da_bollo) {
    total = total + marca_da_bollo
  }

  out_subtotal.forEach(({ subtotal }) => (total = total + subtotal))

  return {
    taxes,
    subtotal,
    tax: formatAmount(totalTaxes),
    total: formatAmount(total),

    it: {
      contributo_previdenziale: it.contributo_previdenziale.toString(),
      imponibile_previdenziale: it.imponibile_previdenziale.toString(),
      imponibile_ritenuta: it.imponibile_ritenuta.toString(),
      ritenuta_dacconto: it.ritenuta_dacconto.toString(),
      rivalsa_inps: it.rivalsa_inps.toString(),
    },
  }
}
