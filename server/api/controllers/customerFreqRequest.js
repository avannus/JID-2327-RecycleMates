import { model } from 'mongoose';
import { authUser } from './utils/authUser.js';
// import { getUser } from './utils/getUser.js';
const Customer = model('Customers');

/**
 * User login
 *
 * @param {*} req { username, password, frequencyRequested }
 * @param {*} res { accountType }
 */

export function customerFreqRequest(req, res) {
  if (!req.body.frequencyRequested) {
    res.status(400).send({ error: 'Please provide frequencyRequested' });
    return;
  }

  authUser(req).then((usrAuth) => {
    if (usrAuth.error) {
      res.status(400).send(usrAuth);
      return;
    }

    const filter = { username: req.body.username };

    const update = { frequencyRequested: req.body.frequencyRequested };

    console.log({ filter, update });

    Customer.findOneAndUpdate(filter, update).then((err) => {
      if (err) {
        res.status(500).send(err);
        return;
      }

      res.send();
    });
  });
}
