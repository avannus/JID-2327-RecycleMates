import mongoose, { model } from 'mongoose';

const { Schema } = mongoose;

const DriverSchema = new Schema({
  username: {
    type: String,
    required: 'User must have a username',
  },
  email: {
    type: String,
    required: 'User must have a email',
  },
});

export default model('Drivers', DriverSchema);
