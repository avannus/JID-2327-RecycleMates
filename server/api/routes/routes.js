import {
  createUser,
  getUser,
  updateUser,
  deleteUser,
  authUser,
} from '../controllers/index.js';

export default (app) => {
  app.route('/user/create').post(createUser);
  app.route('/user/auth').get(authUser);

  app.route('/users/:userId').get(getUser).put(updateUser).delete(deleteUser);
};
