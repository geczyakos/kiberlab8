import { hashPassword, verifyPassword } from '../src/passwordHashing';

test('verifies a correct password against its hash', () => {
  const stored = hashPassword('correct horse battery staple');
  expect(verifyPassword('correct horse battery staple', stored)).toBe(true);
});

test('rejects an incorrect password', () => {
  const stored = hashPassword('correct horse battery staple');
  expect(verifyPassword('wrong password', stored)).toBe(false);
});