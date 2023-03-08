import { model } from 'mongoose';
import bcrypt from 'bcryptjs';
const User = model('Users');

/**
 * Helper to check if a user is logged in.
 *
 * @param {*} req http request data, the userID
 */

export function authUser(req) {
  if (!req.body.username) {
    return {
      then: (cb) =>
        cb({
          error: 'Please provide username',
        }),
    };
  }

  if (!req.body.password) {
    return {
      then: (cb) =>
        cb({
          error: 'Please provide password',
        }),
    };
  }

  return User.findOne({ username: req.body.username }).then((usr) => {
    if (!usr || !bcrypt.compareSync(req.body.password, usr.password)) {
      return {
        error: 'Invalid username/password',
      };
    }

    return {
      error: false,
      usr,
    };
  });
}
