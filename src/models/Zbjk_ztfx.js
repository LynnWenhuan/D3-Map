
// import { routerRedux } from 'dva/router';
import ZbjkService from '../services/ZbjkService';
import { mapToTableData, tableToMapData } from '../assets/data/data';

export default {
  namespace: 'zbjk_ztfx',
  state: {
    quota: { value: 'timeAchievRate' }, // 总体分析里的指标，默认时间进度达成
    zbjkData: null, // 总体分析，zbjk里面的所有维度
    zbjkResponseData: null, // 查询后的结果
    name: '中国',
    isexport: 'timeAchievRate',
    /* 统计时点 */
    endMonth: {
      value: '2017-09',
      data: [{ value: '2017-09', label: '2017-09' }],
    },
    companyCode: { // 机构
      value: null,
      data: [{ value: null, label: '合计' }],
    },
    riskCode: { // 险种
      value: null,
      data: [{ value: null, label: '合计' }],
    },
    riskCodeSimple: { // 险种
      value: null,
      data: [{ value: null, label: '合计' }],
    },
    channelClass: { // 渠道
      value: null,
      data: [{ value: null, label: '合计' }],
    },
    custType: { // 客户类别
      value: null,
      data: [{ value: null, label: '合计' }],
    },
    isGroup: {
      value: null,
      data: [{ value: null, label: '合计' }],
    },
    appType: { // 投保类型
      value: null,
      data: [{ value: null, label: '合计' }],
    },
    combine: {
      value: null,
      data: [{ value: null, label: '合计' }],
    },
    lastRecord: {
      value: null,
      data: [{ value: null, label: '合计' }],
    },
    lastFee: {
      value: null,
      data: [{ value: null, label: '合计' }],
    },
    loadingState: 'done',
    show: ['endMonth', 'companyCode', 'riskCode', 'channelClass', 'custType', 'isGroup', 'appType', 'combine', 'lastRecord', 'lastFee'],
  },
  reducers: {
    save(state, { payload }) {
      return { ...state, ...payload };
    },
    update(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    *getZbjkData(action, { call, put, select }) {
      yield put({ type: 'update', payload: { loadingState: 'loading' } });
      try {
        const newData = {};
        const zbjkData = yield call(ZbjkService.queryZbjkData);
        for (const key in zbjkData) {
          if (key !== 'datumLine' && key !== 'sort') {
            const itemData = zbjkData[key];
            if (key !== 'endMonth') {
              itemData.unshift({
                label: '合计',
                value: null,
              });
            } else {
              itemData.unshift({
                label: '2017-09',
                value: '2017-09',
              });
            }
            const defaultItem = itemData[0];
            const defaultValue = defaultItem.value;
            newData[key] = { value: defaultValue, data: itemData };
          }
        }
        yield put({ type: 'update', payload: newData });
        const zbjk = yield select(state => state.zbjk_ztfx);
        const responseData = yield call(ZbjkService.querQuotaData, zbjk);
        yield put({ type: 'update', payload: { zbjkResponseData: responseData } });
        const isexport = zbjk.quota.value; // 查询后，可导出的数据名字
        yield put({ type: 'update', payload: { loadingState: 'done', isexport } });
      } catch (e) {
        yield put({ type: 'update', payload: { loadingState: 'error' } });
        throw (e);
      }
    },
    *querQuotaData(action, { call, put, select }) {
      try {
        yield put({ type: 'update', payload: { loadingState: 'loading' } });
        const zbjk = yield select(state => state.zbjk_ztfx);
        const responseData = yield call(ZbjkService.querQuotaData, zbjk);
        yield put({ type: 'update', payload: { zbjkResponseData: responseData } });
        const isexport = zbjk.quota.value; // 查询后，可导出的数据名字
        yield put({ type: 'update', payload: { loadingState: 'done', isexport } });
        const name = tableToMapData[zbjk.companyCode.value] || '中国';
        if (name !== undefined) {
          yield put({ type: 'update', payload: { name } });
        }
      } catch (e) {
        yield put({ type: 'update', payload: { loadingState: 'done' } });
        throw (e);
      }
    },
    *updateConditionValue({ payload: { key, itemValue } }, { select, put }) {
      // eslint-disable-next-line
      const zbjk_ztfx = yield select(state => state.zbjk_ztfx);
      let state = zbjk_ztfx[key];
      state.value = itemValue;
      if (key === 'quota') {
        for (let n = 0, m = ZbjkService.clearAll.length; n < m; n += 1) {
          const i = ZbjkService.clearAll[n];
          state = zbjk_ztfx[i];
          state.value = null;
        }
      }
      if (key === 'riskCodeSimple') {
        state = zbjk_ztfx.riskCode;
        state.value = itemValue;
      }
      if (key === 'riskCode') {
        for (let n = 0, m = ZbjkService.clearSome.length; n < m; n += 1) {
          const i = ZbjkService.clearSome[n];
          state = zbjk_ztfx[i];
          state.value = null;
        }
      }
      yield put({ type: 'update', payload: state });
    },
    *exportData(action, { select, call }) {
      const zbjk = yield select(state => state.zbjk_ztfx);
      yield call(ZbjkService.getExporData, zbjk);
    },
    *mapToTable({ payload: { key, name } }, { call, select, put }) {
      yield put({ type: 'update', payload: { name } });
      const comcode = mapToTableData[name];
      if (comcode !== undefined) {
        try {
          // eslint-disable-next-line
          const state = yield select(state => state.zbjk_ztfx[key]);
          state.value = comcode;
          yield put({ type: 'update', payload: state });
          yield put({ type: 'update', payload: { loadingState: 'loading' } });
          // eslint-disable-next-line
          const zbjk = yield select(state => state.zbjk_ztfx);
          const responseData = yield call(ZbjkService.querQuotaData, zbjk);
          yield put({ type: 'update', payload: { zbjkResponseData: responseData } });
          yield put({ type: 'update', payload: { loadingState: 'done' } });
        } catch (e) {
          yield put({ type: 'update', payload: { loadingState: 'done' } });
          throw (e);
        }
      }
    },
  },
  subscriptions: {
    // setup({ dispatch, history }) {
    // },
  },
};
