import mongoose, { model } from 'mongoose';

const { Schema } = mongoose;

const UserSchema = new Schema({
  username: {
    type: String,
    required: 'User must have a username',
  },
  firstName: {
    type: String,
    required: 'User must have a first name',
  },
  lastName: {
    type: String,
    required: 'User must have a first name',
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
});

export default model('Users', UserSchema);
