import { expect, test } from 'vitest'
import { getType } from '../index'

test('getType', () => {
  expect(getType(1)).toBe('Number')
  expect(getType(true)).toBe('Boolean')
  expect(getType({})).toBe('Object')
  expect(getType([])).toBe('Array')
  expect(getType('123')).toBe('String')
  expect(getType(new Date())).toBe('Date')
  expect(getType(null)).toBe('null')
  expect(getType(undefined)).toBe('undefined')
  expect(getType(new Set())).toBe('Set')
  expect(getType(new Map())).toBe('Map')
  expect(getType(new WeakMap())).toBe('WeakMap')
  expect(getType(new WeakSet())).toBe('WeakSet')
})
