export const formatAmount = (amount: number | string, decimals = 2): number => +formatAmountStr(amount, decimals);

export const formatAmountStr = (amount: number | string, decimals = 2): string => {
  const amountValue = typeof amount === 'string' ? parseFloat(amount) : amount;

  return (Math.round((amountValue + 0.00000001) * 1000000) / 1000000).toFixed(decimals);
};
