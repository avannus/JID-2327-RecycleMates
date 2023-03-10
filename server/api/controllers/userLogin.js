import { authUser } from './utils/authUser.js';

/**
 * User login
 *
 * @param {*} req http request data, the userID
 * @param {*} res { accountType, isVerified }
 */

export function userLogin(req, res) {
  authUser(req).then((usrAuth) => {
    if (usrAuth.error) {
      res.status(403).send(usrAuth);
      return;
    }

    const { accountType, isVerified } = usrAuth.usr;
    res.json({ accountType, isVerified });
  });
}
