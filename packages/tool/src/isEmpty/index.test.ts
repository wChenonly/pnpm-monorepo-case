import { expect, test } from 'vitest'
import { isEmpty } from '../index'

test('isEmpty', () => {
  expect(isEmpty({})).toBe(true)
  expect(isEmpty({ name: 'wei' })).toBe(false)
  expect(isEmpty([])).toBe(true)
  expect(isEmpty([1, '2'])).toBe(false)
})
