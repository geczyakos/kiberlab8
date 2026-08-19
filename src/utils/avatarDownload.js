import fs from 'fs';
import path from 'path';

const AVATAR_DIR = path.join(process.cwd(), 'uploads', 'avatars');

// Serves a user's uploaded avatar image by filename.

export function readAvatarFile(filename) {
  const filePath = path.join(AVATAR_DIR, filename);
  return fs.readFileSync(filePath);
}