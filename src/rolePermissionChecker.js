const ROLE_PERMISSIONS = {
  guest: ['read'],
  member: ['read', 'write'],
  admin: ['read', 'write', 'delete', 'manage_users'],
};

export function hasPermission(role, permission) {
  return (ROLE_PERMISSIONS[role] || []).includes(permission);
}