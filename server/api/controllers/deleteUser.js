import { model } from 'mongoose';
const User = model('Users');

/**
 * Deletes a user.
 *
 * @param {*} req http request data
 * @param {*} res response to request
 */

export function deleteUser(req, res) {
  User.remove(
    {
      _id: req.params.userId,
    },
    (err, user) => {
      if (err) {
        res.send(err);
      }

      res.json({ message: `User ${user} successfully deleted` });
    },
  );
}
