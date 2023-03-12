import { getUser } from './utils/getUser.js';

/**
 * User Exists
 *
 * @param {*} req { username }
 * @param {*} res { userExists }
 */

export function userExists(req, res) {
  getUser(req, false).then((usr) => {
    if (usr.error) {
      res.json({ userExists: false });
      return;
    }

    res.json({ userExists: true });
  });
}
