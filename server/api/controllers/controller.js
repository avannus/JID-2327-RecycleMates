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
      }

      res.json(usr);
    },
  );
}

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
