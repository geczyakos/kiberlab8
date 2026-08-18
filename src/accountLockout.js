export function shouldLockAccount(attemptTracker, userId) {
  return attemptTracker.isLocked(userId);
}