export const formatAmount = amount => +formatAmountStr(amount)

export const formatAmountStr = amount => (Math.round((parseFloat(amount) + 0.00000001) * 1000000) / 1000000).toFixed(6)
