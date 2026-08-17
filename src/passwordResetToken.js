import crypto from 'crypto';

export function generateResetToken() {
  return crypto.randomBytes(24).toString('hex');
}