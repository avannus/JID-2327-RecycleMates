import { model } from 'mongoose';
import bcrypt from 'bcryptjs';
import { BCRYPT_SALT_ROUNDS } from '../constants.js';
const User = model('Users');

/**
 * Creates a new user.
 *
 * @param {User} req http request data, the user data
 * @param {*} res response to request
 */

export function userCreate(req, res) {
  if (!req.body.username || !req.body.password) {
    res.status(400).send('Please provide username/password');
    return;
  }

  if (
    !req.body.accountType
    || (req.body.accountType !== 'customer' && req.body.accountType !== 'driver')
  ) {
    res.status(400).send('Please provide accountType of customer or driver');
    return;
  }

  const newUser = new User(req.body);

  newUser.password = bcrypt.hashSync(req.body.password, BCRYPT_SALT_ROUNDS);
  newUser.save((err, usr) => {
    if (err) {
      res.status(400).send(err);
      return;
    }

    console.log({ usr });

    if (usr.accountType === 'customer') {
      customerCreate(usr, res);
    } else if (usr.accountType === 'driver') {
      driverCreate(usr, res);
    } else {
      res.status(500).send('somehow bypassed internal customer driver check'); // TODO - send 400 back and delete user
    }
  });
}

function driverCreate(usr, res) {
  const Driver = model('Drivers');
  const newDriver = new Driver({
    username: usr.username,
    email: usr.email,
  });
  newDriver.save((err) => {
    if (err) {
      res.status(500).send(err);
      return err;
    }

    res.json(usr);
  });
}

function customerCreate(usr, res) {
  const Customer = model('Customers');
  const newCustomer = new Customer({
    username: usr.username,
    email: usr.email,
  });
  newCustomer.save((err) => {
    if (err) {
      res.status(500).send(err);
      return err;
    }

    res.json(usr);
  });
}
