import { Request } from './helper/http'
import { getStorage, setStorage } from './helper/storage';

var request = new Request;

export class DriverApi {
  static login(username, password) {
    return request.post('drivers/login', { username, password });
  }

  static async logout(refresh) {
    await setStorage('user', null);
    await setStorage('remember', null)
    await setStorage('loginInfo', null);
    return request.post('logout', {refresh});
  }
}