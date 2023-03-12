import { userCreate } from '../controllers/userCreate.js';
import { userLogin } from '../controllers/userLogin.js';
import { userExists } from '../controllers/userExists.js';

// https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods

export default (app) => {
  app.route('/user/create').post(userCreate);
  app.route('/user/login').post(userLogin);
  app.route('/user/exists').get(userExists);
};
