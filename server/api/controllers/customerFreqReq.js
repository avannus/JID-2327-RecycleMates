import { model } from 'mongoose';
import { authUser } from './utils/authUser.js';
const Customer = model('Customers');

/**
 * User login
 *
 * @param {*} req { username, password, freqReq }
 * @param {*} res { previousFreqReq }
 */

export function customerFreqReq(req, res) {
  if (!req.body.freqReq) {
    res.status(400).send('Please provide freqReq field');
    return;
  }

  authUser(req).then((usrAuth) => {
    if (usrAuth.error) {
      res.status(usrAuth.error.code).send(usrAuth.error.message);
      return;
    }

    const filter = { username: req.body.username };
    const update = { freqReq: req.body.freqReq };
    Customer.findOneAndUpdate(filter, update).then((oldCust, err) => {
      if (err) {
        res.status(500).send(err);
        return;
      }

      res.json({ prevFreqReq: oldCust.freqReq });
    });
  });
}
