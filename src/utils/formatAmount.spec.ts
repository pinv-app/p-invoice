import { formatAmount, formatAmountStr } from './formatAmount'

it('returns number with default decimals as a string', () => {
  expect(formatAmountStr(1.2 + 0.6)).toBe('1.80')
})

it('returns number with 6 decimals as a string', () => {
  expect(formatAmountStr(1.2 + 0.6, 6)).toBe('1.800000')
})

it('returns the formatted number with default decimals', () => {
  expect(formatAmount(1.2 + 0.600001)).toBe(1.8)
})

it('returns the formatted number with 6 decimals', () => {
  expect(formatAmount(1.2 + 0.600001, 6)).toBe(1.800001)
})
