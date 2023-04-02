import { getUser } from './utils/getUser.js';

/**
 * User Exists
 *
 * @param {*} req { username }
 * @param {*} res { userExists }
 */

export function userExists(req, res) {
  getUser(req).then((gotUser) => {
    let userExists = true;
    if (gotUser.error) {
      res.status(gotUser.error.code).send(gotUser.error.message);
      return;
    }

    if (!gotUser.usr) {
      userExists = false;
    }

    res.json({ userExists });
  });
}
