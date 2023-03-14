import mongoose, { model } from 'mongoose';

const { Schema } = mongoose;

const CustomerSchema = new Schema({
  username: {
    type: String,
    required: 'User must have a username',
  },
  email: {
    type: String,
    required: 'User must have an email',
  },
  frequencyRequested: {
    type: Number,
    default: -1,
  },
  frequencyAssigned: {
    type: Number,
    default: -1,
  },
  schedule: {
    type: Array,
    default: [],
  },
});

export default model('Customers', CustomerSchema);
