import { InvoiceTax, InvoiceTotals } from './types'
import { formatAmount } from './utils/formatAmount'

export const getTotals = (
  subtotal: number,
  taxes: InvoiceTax[],
  Invoice,
): InvoiceTotals => {
  const {
    invoice_option: {
      it: {
        gestione_separata_inps = false,
        gestione_contributo_previdenziale = false,
        gestione_ritenuta_dacconto = false,
        gestione_marca_da_bollo = false,
        ritenuta_dacconto = '',
        percentuale_ritenuta_dacconto = '',
        cliente_paga_marca_da_bollo = false,
        marca_da_bollo = 0,
        rivalsa_inps = { tax: null, valore: null },
        contributo_previdenziale = { tax: '', valore: '', percentuale: '', tipo: '' },
      } = {},
    } = {},
    total_price: {
      out_subtotal = [],
      it: { imponibile_previdenziale = 0, imponibile_ritenuta = 0 } = {},
    } = {},
  } = Invoice || {}

  // ----------

  let totalTaxes = taxes.reduce((acc, val) => acc + val.tax, 0)
  let total = subtotal + totalTaxes

  let contributo_previdenziale_percentuale = 0,
    subtotale_previdenziale = 0,
    contributo_previdenziale_tax = 0,
    contributo_previdenziale_natura = '',
    rivalsa_percentuale = 0,
    rivalsa_tax = 0

  const it = {
    contributo_previdenziale: 0,
    imponibile_previdenziale,
    imponibile_ritenuta,
    ritenuta_dacconto: 0,
    rivalsa_inps: 0,
  }

  // Cassa previdenziale
  if (gestione_contributo_previdenziale) {
    contributo_previdenziale_percentuale =
      parseFloat(contributo_previdenziale.valore) || 0
    contributo_previdenziale_tax = parseFloat(contributo_previdenziale.tax || 0)
    contributo_previdenziale_natura = contributo_previdenziale.nature || ''

    it.imponibile_previdenziale = (contributo_previdenziale.percentuale * subtotale_previdenziale) / 100
  } else {
    it.imponibile_previdenziale = 0
  }

  // Gestione separata INPS (rivalsa INPS)
  if (gestione_separata_inps) {
    rivalsa_percentuale = parseFloat(rivalsa_inps.valore) || 0
    rivalsa_tax = parseFloat(rivalsa_inps.tax) || 0

    it.rivalsa_inps = (subtotal * rivalsa_percentuale) / 100
  }

  // Calcolo contributo_previdenziale
  subtotale_previdenziale = Number(it.imponibile_previdenziale)
  it.contributo_previdenziale =
    (subtotale_previdenziale * contributo_previdenziale_percentuale) / 100

  // IVA su rivalsa INPS
  if (it.rivalsa_inps) {
    const taxRivalsa = (it.rivalsa_inps * rivalsa_tax) / 100
    totalTaxes += taxRivalsa

    // Iva Rivalsa INPS aggiunta al riepilogo IVA
    taxes.push({
      name: '',
      value: rivalsa_tax.toString(),
      tax: formatAmount(taxRivalsa),
      subtotal: formatAmount(it.rivalsa_inps),
      nature: '',
    })
  }

  // IVA su contributo_previdenziale
  if (gestione_contributo_previdenziale) {
    const contributoTax =
      (it.contributo_previdenziale * contributo_previdenziale_tax) / 100
    totalTaxes += contributoTax

    // Iva Cassa Previdenziale aggiunta al riepilogo IVA
    taxes.push({
      name: contributo_previdenziale.nome || '',
      value: contributo_previdenziale_tax.toString(),
      tax: formatAmount(contributoTax),
      subtotal: formatAmount(it.contributo_previdenziale),
      nature: contributo_previdenziale_natura,
    })
  }

  // Totale da pagare
  total =
    subtotal +
    totalTaxes +
    it.rivalsa_inps
  
  // ENASARCO -> togliere importo dal totale anziché sommare
  if (gestione_contributo_previdenziale && contributo_previdenziale.tipo === 'TC07') {
    total -= it.contributo_previdenziale
  } else {
    total += it.contributo_previdenziale
  }

  // Ritenuta d'acconto
  if (gestione_ritenuta_dacconto && parseFloat(ritenuta_dacconto) > 0) {
    it.imponibile_ritenuta = (percentuale_ritenuta_dacconto * subtotal) / 100
    it.ritenuta_dacconto =
      (it.imponibile_ritenuta * parseFloat(ritenuta_dacconto)) / 100

    // Totale da pagare al netto della ritenuta d'acconto
    total -= it.ritenuta_dacconto
  }

  // Marca da bollo
  if (gestione_marca_da_bollo && cliente_paga_marca_da_bollo) {
    total = total + Number(marca_da_bollo || 0)
  }

  out_subtotal.forEach(({ subtotal }) => (total = total + subtotal))

  return {
    taxes,
    subtotal: formatAmount(subtotal),
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
