import { InvoiceTax, InvoiceTotals } from './types';
import { formatAmount } from './utils/formatAmount';

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
        contributo_previdenziale = {
          tax: '',
          valore: '',
          percentuale: '',
          tipo: '',
          enasarco: {
            enabled: false,
            percentuale: 1,
            ritenuta: '',
          },
        },
      } = {},
    } = {},
    total_price: {
      out_subtotal = [],
      it: { imponibile_previdenziale = 0, imponibile_ritenuta = 0 } = {},
    } = {},
  } = Invoice || {};

  // ----------

  const excluded_total_art15 = taxes.reduce((acc, val) => {
    if (val.nature === 'N1') {
      return acc + val.subtotal;
    }
    return acc;
  }, 0);

  let totalTaxes = taxes.reduce((acc, val) => acc + val.tax, 0);

  let total = subtotal + totalTaxes;
  const temp_subtotal = subtotal - excluded_total_art15;

  let contributo_previdenziale_percentuale = 0;
  let subtotale_previdenziale = 0;
  let contributo_previdenziale_tax = 0;
  let contributo_previdenziale_natura = '';
  let rivalsa_percentuale = 0;
  let rivalsa_tax = 0;
  let rivalsa_natura = '';

  const it = {
    contributo_previdenziale: 0,
    imponibile_previdenziale,
    imponibile_ritenuta,
    ritenuta_dacconto: 0,
    ritenuta_enasarco: 0,
    rivalsa_inps: 0,
  };

  // Cassa previdenziale
  if (gestione_contributo_previdenziale) {
    contributo_previdenziale_percentuale = parseFloat(contributo_previdenziale.valore) || 0;
    contributo_previdenziale_tax = parseFloat(contributo_previdenziale.tax || 0);
    contributo_previdenziale_natura = contributo_previdenziale.nature || '';
    it.imponibile_previdenziale = (parseFloat(contributo_previdenziale.percentuale || 100) * temp_subtotal) / 100;
  } else {
    it.imponibile_previdenziale = 0;
  }

  // Gestione separata INPS (rivalsa INPS)
  if (gestione_separata_inps) {
    rivalsa_percentuale = parseFloat(rivalsa_inps.valore) || 0;
    rivalsa_tax = parseFloat(rivalsa_inps.tax) || 0;
    rivalsa_natura = rivalsa_inps.nature || '';

    it.rivalsa_inps = (temp_subtotal * rivalsa_percentuale) / 100;
  }

  // Calcolo contributo_previdenziale
  subtotale_previdenziale = Number(it.imponibile_previdenziale);
  it.contributo_previdenziale = (subtotale_previdenziale * contributo_previdenziale_percentuale) / 100;

  // IVA su rivalsa INPS
  if (it.rivalsa_inps) {
    const taxRivalsa = (it.rivalsa_inps * rivalsa_tax) / 100;
    totalTaxes += taxRivalsa;

    // Iva Rivalsa INPS aggiunta al riepilogo IVA
    taxes.push({
      name: '',
      value: rivalsa_tax.toString(),
      tax: formatAmount(taxRivalsa),
      subtotal: formatAmount(it.rivalsa_inps),
      nature: rivalsa_natura,
    });
  }

  // IVA su contributo_previdenziale
  if (gestione_contributo_previdenziale) {
    const contributoTax = (it.contributo_previdenziale * contributo_previdenziale_tax) / 100;
    totalTaxes += contributoTax;

    // Iva Cassa Previdenziale aggiunta al riepilogo IVA
    taxes.push({
      name: contributo_previdenziale.nome || '',
      value: contributo_previdenziale_tax.toString(),
      tax: formatAmount(contributoTax),
      subtotal: formatAmount(it.contributo_previdenziale),
      nature: contributo_previdenziale_natura,
    });
  }

  // Totale da pagare
  total = subtotal
    + totalTaxes
    + it.rivalsa_inps;

  // ENASARCO -> togliere importo dal totale anziché sommare
  if (gestione_contributo_previdenziale && contributo_previdenziale.tipo === 'TC07') {
    total -= it.contributo_previdenziale;
  } else {
    total += it.contributo_previdenziale;
  }

  // Ritenuta d'acconto
  if (gestione_ritenuta_dacconto && parseFloat(ritenuta_dacconto) > 0) {
    it.imponibile_ritenuta = (parseFloat(percentuale_ritenuta_dacconto || 100) * (it.rivalsa_inps + temp_subtotal)) / 100;
    it.ritenuta_dacconto = (it.imponibile_ritenuta * parseFloat(ritenuta_dacconto)) / 100;

    // Totale da pagare al netto della ritenuta d'acconto
    total -= it.ritenuta_dacconto;
  }

  // Ritenuta ENASARCO
  if (gestione_contributo_previdenziale && contributo_previdenziale.tipo === 'TC07' && contributo_previdenziale.enasarco?.enabled) {
    it.ritenuta_enasarco = (temp_subtotal * parseFloat(contributo_previdenziale.enasarco.percentuale)) / 100;
    // Totale da pagare al netto della ritenuta ENASARCO
    total -= it.ritenuta_enasarco;
  }

  // Marca da bollo
  if (gestione_marca_da_bollo && cliente_paga_marca_da_bollo) {
    total += Number(marca_da_bollo || 0);
  }

  out_subtotal.forEach(({ subtotal: subtot }) => total += subtot);

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
      ritenuta_enasarco: it.ritenuta_enasarco.toString(),
      rivalsa_inps: it.rivalsa_inps.toString(),
    },
  };
};
