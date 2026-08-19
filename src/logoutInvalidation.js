export function invalidateSession(sessionStore, token) {
  return sessionStore.delete(token);
}