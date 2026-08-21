# auth-toolkit

A small, dependency-light authentication and session helper library
for Node.js: password hashing, session tokens, login attempt tracking,
and more.

## Installation

```
npm install auth-toolkit
```

## Utilities

- `hashPassword` / `verifyPassword` – scrypt-based password hashing
- `validateRegistration` – basic registration field validation
- `generateSessionToken` – cryptographically secure session tokens
- `getClaimsFromToken` – reads claims out of a JWT payload
- `createAttemptTracker` – tracks failed login attempts per user
- `generateResetToken` – password reset token generator
- `applyProfileUpdate` – applies a partial profile update
- `generateVerificationCode` – 6-digit email verification code
- `hasPermission` – role-based permission checks
- `isStrictlyValidEmail` – stricter email format validation
- `shouldLockAccount` – checks if an account should be locked
- `scoreStrength` – simple password strength scoring
- `readAvatarFile` – reads a user's avatar image by filename
- `buildRememberMeCookie` – builds a remember-me cookie config
- `invalidateSession` – removes a session token from the store

## Usage

```js
import { hashPassword, verifyPassword } from 'auth-toolkit';

const stored = hashPassword('correct horse battery staple');
verifyPassword('correct horse battery staple', stored); // true
```

## License

MIT