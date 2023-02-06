import { model } from 'mongoose';
const User = model('Users');

/**
 * Creates a new user.
 *
 * @param {*} req http request data, the user data
 * @param {*} res response to request
 */

export function createUser(req, res) {
  const newUser = new User(req.body);
  newUser.save((err, usr) => {
    if (err) {
      res.send(err);
    }

    res.json(usr);
  });
}
