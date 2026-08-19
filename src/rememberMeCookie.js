export function buildRememberMeCookie(token, maxAgeDays = 30) {
  return {
    name: 'remember_me',
    value: token,
    maxAge: maxAgeDays * 24 * 60 * 60,
    httpOnly: true,
    secure: true,
    sameSite: 'lax',
  };
}