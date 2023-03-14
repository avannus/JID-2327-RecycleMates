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
    res.status(400).send(
      {
        error: true,
        message: 'Please provide username/password',
      },
    );
    return;
  }

  const newUser = new User(req.body);

  newUser.password = bcrypt.hashSync(req.body.password, BCRYPT_SALT_ROUNDS);
  newUser.save((err, usr) => {
    if (err) {
      res.send(err);
      return;
    }

    console.log({ usr });

    if (usr.accountType === 'customer') {
      customerCreate(usr, res);
    } else if (usr.accountType === 'employee') {
      employeeCreate(usr, res);
    } else {
      res.json(usr); // TODO - this should never happen, send 400 back and delete user
    }
  });
}

function employeeCreate(usr, res) {
  const Employee = model('Employees');
  const newEmployee = new Employee({
    username: usr.username,
    email: usr.email,
  });
  newEmployee.save((err) => {
    if (err) {
      res.send(err);
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
      res.send(err);
      return err;
    }

    res.json(usr);
  });
}
