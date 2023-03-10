import { userCreate } from '../controllers/userCreate.js';
import { userLogin } from '../controllers/userLogin.js';
import { userExists } from '../controllers/userExists.js';

export default (app) => {
  app.route('/user/create').post(userCreate);
  app.route('/user/login').get(userLogin);
  app.route('/user/exists').get(userExists);
};
