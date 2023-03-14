import { model } from 'mongoose';
import bcrypt from 'bcryptjs';
const User = model('Users');

/**
 * Helper to check if a user is logged in.
 *
 * @param {*} req http request data, { userID }
 * @returns {Thennable} Thennable that resolves to { error, usr )
 *               error is an object with message and code properties
 *               usr is the user object
 */

export function authUser(req) {
  if (!req.body.username || !req.body.password) {
    return {
      // thennable so it can be chained
      then: (cb) =>
        cb({
          error: {
            message: 'Please provide username and password fields',
            code: 400,
          },
        }),
    };
  }

  return User.findOne({ username: req.body.username }).then((usr) => {
    if (!usr || !bcrypt.compareSync(req.body.password, usr.password)) {
      return {
        error: {
          message: 'Invalid username/password',
          code: 403,
        },
      };
    }

    return {
      usr,
    };
  });
}
