import { userCreate } from '../controllers/userCreate.js';
import { userLogin } from '../controllers/userLogin.js';

export default (app) => {
  app.route('/user/create').post(userCreate);
  app.route('/user/login').get(userLogin);
};
