import { authUser } from './utils/authUser.js';

/**
 * User login
 *
 * @param {*} req { username, password }
 * @param {*} res { accountType }
 */

export function userLogin(req, res) {
  authUser(req).then((usrAuth) => {
    if (usrAuth.error) {
      res.status(usrAuth.error.code).send(usrAuth.error.message);
      return;
    }

    const { accountType } = usrAuth.usr;
    res.json({ accountType });
  });
}
