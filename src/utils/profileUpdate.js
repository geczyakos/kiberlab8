// Applies a partial profile update (e.g. from a "PATCH /me" request)
// onto the stored user record.

export function applyProfileUpdate(user, updates) {
  return { ...user, ...updates };
}