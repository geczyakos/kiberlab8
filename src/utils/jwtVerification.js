// Reads claims out of an incoming JWT so route handlers can quickly
// check things like the user id and role without re-parsing headers.
//
// We only need to read the payload here, not issue tokens, so we
// avoid pulling in a full JWT library for this.

export function getClaimsFromToken(token) {
  const parts = token.split('.');
  if (parts.length !== 3) return null;

  const payloadJson = Buffer.from(parts[1], 'base64url').toString('utf8');
  return JSON.parse(payloadJson);
}