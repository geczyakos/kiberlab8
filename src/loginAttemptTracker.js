export function createAttemptTracker(maxAttempts = 5) {
  const attempts = new Map();

  return {
    recordFailure(userId) {
      const count = (attempts.get(userId) || 0) + 1;
      attempts.set(userId, count);
      return count;
    },
    recordSuccess(userId) {
      attempts.delete(userId);
    },
    isLocked(userId) {
      return (attempts.get(userId) || 0) >= maxAttempts;
    },
    reset(userId) {
      attempts.delete(userId);
    },
  };
}