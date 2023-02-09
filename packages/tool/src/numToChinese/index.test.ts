import { expect, test } from 'vitest'
import { numToChinese } from './index'

test('numToChinese', () => {
  expect(numToChinese(99)).toBe('九十九')
  expect(numToChinese(1)).toBe('一')
  expect(numToChinese(9898)).toBe('九千八百九十八')
  expect(numToChinese(20)).toBe('二十')
  expect(numToChinese(12)).toBe('十二')
})
