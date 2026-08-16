export function validateRegistration({ email, password, username }) {
  const errors = {};
  if (!email || !email.includes('@')) errors.email = 'Invalid email';
  if (!password || password.length < 8) errors.password = 'Password too short';
  if (!username || username.length < 3) errors.username = 'Username too short';
  return { valid: Object.keys(errors).length === 0, errors };
}