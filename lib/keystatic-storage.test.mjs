import { test } from 'node:test'
import assert from 'node:assert/strict'
import { resolveKeystaticStorage } from './keystatic-storage.ts'

test('github kind resolves to GitHub storage on the site repo', () => {
  assert.deepEqual(resolveKeystaticStorage('github'), {
    kind: 'github',
    repo: { owner: 'LuisGabriel112', name: 'respiVer' },
  })
})

test('missing kind resolves to local storage', () => {
  assert.deepEqual(resolveKeystaticStorage(undefined), { kind: 'local' })
})

test('unknown kind resolves to local storage', () => {
  assert.deepEqual(resolveKeystaticStorage('GitHub'), { kind: 'local' })
})
