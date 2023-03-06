import mongoose, { model } from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: 'User must have a username',
  },
  email: {
    type: String,
    required: 'User must have a email',
  },
  password: {
    type: String,
    required: 'User must have a password',
  },
  firstName: {
    type: String,
    required: 'User must have a first name',
  },
  lastName: {
    type: String,
    required: 'User must have a last name',
  },
  address: {
    type: String,
    required: 'User must have an address',
  },
  city: {
    type: String,
    required: 'User must have a city',
  },
  zip: {
    type: String,
    required: 'User must have a ZIP code',
  },
  createdDate: {
    type: Date,
    default: Date.now,
  },
  accountType: {
    type: String,
    required: 'User must have an account type',
  },
  isVerified: {
    type: Boolean,
    // TODO - change to false once email verification is implemented
    default: true,
  },
});

export default model('Users', UserSchema);
