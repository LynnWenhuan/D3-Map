import HttpUtils from '../utils/HttpUtils';
// import { JSEncrypt } from '../libs/utils/jsencrypt';

export default {
  getPublic() {
    return HttpUtils.get('/getPubKey');
  },
  toLogin(user) {
    // const encrypt = new JSEncrypt();
    // encrypt.setPublicKey(user.pubKey);
    // const encryptedPassword = encrypt.encrypt(user.password);
    const body = {
      account: user.account,
      password: user.password,
      verifyCode: user.verifyCode,
    };
    return HttpUtils.post('/login', body);
  },
  toLogout() {
    return HttpUtils.post('/logout');
  },
  getUserData() {
    return HttpUtils.get('/getUserInfo');
  },
};
