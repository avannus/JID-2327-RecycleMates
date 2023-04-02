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
  freqReq: {
    type: Number,
    default: -1,
  },
  freqAssigned: {
    type: Number,
    default: -1,
  },
  scheduledTime: {
    type: Date,
    default: undefined,
  },
});

export default model('Customers', CustomerSchema);
