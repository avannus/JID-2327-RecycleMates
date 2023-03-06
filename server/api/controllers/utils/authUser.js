import { model } from 'mongoose';
import bcrypt from 'bcryptjs';
const User = model('Users');

/**
 * Helper to check if a user is logged in.
 *
 * @param {*} req http request data, the userID
 * @param {*} res { accountType, isVerified }
 */

export function authUser(req) {
  // TODO this isn't thennable
  if (!req.body.username || !req.body.password) {
    return {
      error: 'Please provide username/password',
    };
  }

  return User.findOne({ username: req.body.username }).then((usr, err) => {
    if (err) {
      console.log(`Error in authUser: ${err}`);
      return {
        error: 'User not found',
      };
    }

    if (!(usr && bcrypt.compareSync(req.body.password, usr.password))) {
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
