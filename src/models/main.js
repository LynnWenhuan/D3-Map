
import { routerRedux } from 'dva/router';
import MainService from '../services/MainService';

export default {
  namespace: 'main',
  state: {
    menudata: [],
  },
  reducers: {
    save(state, { payload: { menudata } }) {
      return { ...state, menudata };
    },
  },
  effects: {
    *querMenuData({ payload: { userid } }, { call, put }) {
      yield call(MainService.queryMenuData, userid);
      yield put({ type: 'save', payload: { menudata: [{ ss: 'asd' }] } });
    },
    *go({ payload: { href } }, { put }) {
      yield put(routerRedux.push(href));
    },
  },
  subscriptions: {
    // setup({ dispatch, history }) {
    // },
  },
};
