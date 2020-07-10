import { formatAmount, formatAmountStr } from './formatAmount'

it('returns number with 6 decimals as a string', () => {
  expect(formatAmountStr(1.2 + 0.6)).toBe('1.80')
})

it('returns the formatted number', () => {
  expect(formatAmount(1.2 + 0.6)).toBe(1.8)
})
