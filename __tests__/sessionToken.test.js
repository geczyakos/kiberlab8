import { generateSessionToken } from '../src/sessionToken';

test('generates a 64-character hex token', () => {
  const token = generateSessionToken();
  expect(token).toMatch(/^[0-9a-f]{64}$/);
});

test('generates unique tokens', () => {
  const a = generateSessionToken();
  const b = generateSessionToken();
  expect(a).not.toBe(b);
});