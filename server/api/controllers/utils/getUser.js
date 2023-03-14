import { model } from 'mongoose';
const User = model('Users');

/**
 * Helper to check if a user is logged in.
 *
 * @param {*} req http request data, the userID
 */

export function getUser(req, collection = User) {
  // TODO this isn't thennable
  if (!req.body.username) {
    return {
      then: (cb) => cb({
        error: 'Please provide username',
      }),
    };
  }

  return collection.findOne({ username: req.body.username }).then((usr) => {
    if (!usr) {
      return {
        error: `Could not find user ${req.body.username}}`,
      };
    }

    return {
      error: false,
      usr,
    };
  });
}
