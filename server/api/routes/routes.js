import {
  createUser,
  getUser,
  updateUser,
  deleteUser,
} from '../controllers/index.js';

export default (app) => {
  app.route('/users').post(createUser);

  app.route('/users/:userId').get(getUser).put(updateUser).delete(deleteUser);
};
