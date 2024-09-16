const users = [];

export function checkUserAccess(user_id) {
  const user = users.find((user) => (user.id = user_id));

  if (user) {
    return true;
  }

  return false;
}

export default users;
