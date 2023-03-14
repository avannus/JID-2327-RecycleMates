import { model } from 'mongoose';
const User = model('Users');

/**
 * Helper to check if a user is logged in.
 *
 * @param {*} req http request data, { username }
 * @returns {Thennable} Thennable that resolves to { error, usr )
 *               error is an object with message and code properties
 *               usr is the user object
 */

export function getUser(req, collection = User) {
  if (!req.body.username) {
    return {
      // thennable so it can be chained
      then: (cb) =>
        cb({
          error: {
            message: 'Please provide username',
            code: 400,
          },
        }),
    };
  }

  return collection
    .findOne({ username: req.body.username })
    .then((usr) => ({ usr }));
}
