import { model } from 'mongoose';
import bcrypt from 'bcryptjs';
import { BCRYPT_SALT_ROUNDS } from '../constants.js';
const User = model('Users');

/**
 * Creates a new user.
 *
 * @param {*} req http request data, the user data
 * @param {*} res response to request
 */

export function createUser(req, res) {
  const newUser = new User(req.body);
  if (!newUser.username || !newUser.password) {
    res.status(400).send({ error: true, message: 'Please provide username/password' });
    return;
  }

  newUser.password = bcrypt.hashSync(req.body.password, BCRYPT_SALT_ROUNDS);
  newUser.save((err, usr) => {
    if (err) {
      res.send(err);
      return;
    }

    res.json(usr);
  });
}
