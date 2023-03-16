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
    // TODO these fields should be updated by a third party after making a schedule
    // They are here for proof of concept only
    update.freqActual = req.body.freqReq;
    update.scheduledTime = new Date(
      new Date().getFullYear(),
      new Date().getMonth(),
      new Date().getDate() + Math.floor(Math.random() * 7) + 1, // dayOffset - new Date().getDay(),
      8 + (Math.floor(Math.random() * 4) * 2),
      0,
      0,
      0,
    );
    // TODO delete above, make real lol

    Customer.findOneAndUpdate(filter, update).then((oldCust, err) => {
      if (err) {
        res.status(500).send(err);
        return;
      }

      res.json({ prevFreqReq: oldCust.freqReq });
    });
  });
}
