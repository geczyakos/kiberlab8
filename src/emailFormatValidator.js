// Stricter email format check than the basic one in
// registrationValidator.js, used on the "change email" flow where we
// want to catch more malformed addresses before sending a verification link.

const STRICT_EMAIL_RE = /^([a-zA-Z0-9_.+-]+)+@([a-zA-Z0-9-]+\.)+[a-zA-Z0-9-]{2,}$/;

export function isStrictlyValidEmail(email) {
  return STRICT_EMAIL_RE.test(email);
}