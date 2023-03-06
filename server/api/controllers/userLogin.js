import { model } from 'mongoose';
import bcrypt from 'bcryptjs';
const User = model('Users');

/**
 * User login
 *
 * @param {*} req http request data, the userID
 * @param {*} res { accountType, isVerified }
 */

export function userLogin(req, res) {
  if (!req.body.username || !req.body.password) {
    res.status(400).send(
      {
        error: true,
        message: 'Please provide username/password',
      },
    );
    return;
  }

  User.findOne({ username: req.body.username }, (err, usr) => {
    if (err) {
      res.send(err);
      return;
    }

    if (usr && bcrypt.compareSync(req.body.password, usr.password)) {
      const { accountType, isVerified } = usr;
      res.json({ accountType, isVerified });
    } else {
      res.status(401).send({ error: true, message: 'Invalid username/password' });
    }
  });
}
