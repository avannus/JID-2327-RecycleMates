import { model } from 'mongoose';
const User = model('Users');

/**
 * Updates a user's information
 *
 * @param {*} req http request data, the updated user data
 * @param {*} res response to request
 */

export function updateUser(req, res) {
  User.findOneAndUpdate(
    { _id: req.params.userId },
    req.body,
    { new: true },
    (err, usr) => {
      if (err) {
        res.send(err);
        return;
      }

      res.json(usr);
    },
  );
}
