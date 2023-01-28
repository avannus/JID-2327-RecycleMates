import { model } from 'mongoose';
const User = model('Users');

/**
  """_summary_
  """ * Gets a user.
 *
 * @param {*} req http request data, the userID
 * @param {*} res response to request
 */

export function getUser(req, res) {
  User.findById(req.params.userId, (err, usr) => {
    if (err) {
      res.send(err);
    }

    res.json(usr);
  });
}
