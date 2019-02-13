
import { routerRedux } from 'dva/router';
import UserService from '../services/UserService';

export default {
  namespace: 'user',
  state: {
    account: null,
    password: null,
    verifyCode: null,
    pubKey: null,
    userData: null,
  },
  reducers: {
    save(state, { payload }) { // 登录、重置密码
      if (payload.account) {
        return { ...state, account: payload.account.value };
      } else if (payload.password) {
        return { ...state, password: payload.password.value };
      } else if (payload.verifyCode) {
        return { ...state, verifyCode: payload.verifyCode.value };
      } else if (payload.pubKey) {
        return { ...state, pubKey: payload.pubKey };
      } else if (payload.userData) {
        return { ...state, userData: payload.userData };
      } else {
        return { ...state };
      }
    },
  },
  effects: {
    *getPubilcKey(action, { call, put }) {
      const pubKeyData = yield call(UserService.getPublic);
      yield put({ type: 'save', payload: { pubKey: pubKeyData.pubKey } });
    },
    *login(action, { put }) {
      try {
        // const user = yield select(state => state.user);
        // yield call(UserService.toLogin, user);
        yield put(routerRedux.push('/menu/zbjk_ztfx'));
      } catch (e) {
        throw (e);
      }
    },
    *logout(action, { call, put }) {
      yield call(UserService.toLogout);
      yield put(routerRedux.push('/'));
    },
    *toSignIn(action, { put }) {
      yield put(routerRedux.push('/'));
    },
    *getUserInfo(action, { call, put }) {
      const userData = yield call(UserService.getUserData);
      yield put({ type: 'save', payload: { userData } });
    },
  },
  subscriptions: {
    // setup({ dispatch, history }) {
    //   return history.listen(({ pathname, search }) => {
    //     const query = queryString.parse(search);
    //     if (pathname === '/users') {
    //       dispatch({ type: 'queryUsers', payload: query });
    //     }
    //   });
    // },
  },
};
