
// import { routerRedux } from 'dva/router';
import ZbjkZyzbfxService from '../services/ZbjkZyzbfxService';
import { mapToTableData } from '../assets/data/data';

/*
 channelClass: {
  value: 'null',
  data: [{ value: 'null', label: '合计' }],
},
*/
export default {
  namespace: 'zbjk_zyzbfx',
  state: {
    indicator: {
      value: ZbjkZyzbfxService.indicatorSourceArr[0].value,
      data: ZbjkZyzbfxService.indicatorSourceArr,
    },
    isexport: ZbjkZyzbfxService.indicatorSourceArr[0].value, // 控制导出变量
    echart: null, // 控制图表的显示
    /* 机构 */
    companyCode: {
      value: null,
      data: [{ value: null, label: '合计' }],
    },
    /* 险种 */
    riskCode: {
      value: null,
      data: [{ value: null, label: '合计' }],
    },
    /* 险种2 */
    riskCodeSimple: {
      value: null,
      data: [{ value: null, label: '合计' }],
    },
    /* 客户类型 */
    custType: {
      value: null,
      data: [{ value: null, label: '合计' }],
    },
    /* 团散单 */
    isGroup: {
      value: null,
      data: [{ value: null, label: '合计' }],
    },
    /* 险别组合 */
    combine: {
      value: null,
      data: [{ value: null, label: '合计' }],
    },
    /* 图示指标 */
    index: {
      value: '1',
      data: [{ value: '1', label: ' ' }],
    },
    /* 排序 */
    sort: {
      value: '自然排序',
      data: [{ value: '自然排序', label: '自然排序' },
        { value: '升序', label: '升序' },
        { value: '降序', label: '降序' }],
    },
    /* 统计时点 */
    endMonth: {
      value: '2017-09',
      data: [{ value: '2017-09', label: '2017年9月' }],
    },
    /* 基线 */
    datumLine: {
      value: 0,
    },
    /* 上年出险金额 */
    lastFee: {
      value: null,
      data: [{ value: null, label: '合计' }],
    },
    /* 上年出险记录 */
    lastRecord: {
      value: null,
      data: [{ value: null, label: '合计' }],
    },
    /* 吨位分组 */
    tonGrounp: {
      value: null,
      data: [{ value: null, label: '合计' }],
    },
    /* 被保险人年龄 */
    insuredAge: {
      value: null,
      data: [{ value: null, label: '合计' }],
    },
    bigCase: {
      value: null,
      data: [{ value: null, label: '合计' }],
    },
    tonGroup: {
      value: null,
      data: [{ value: null, label: '合计' }],
    },
    /* 是否人伤 */
    injured: {
      value: null,
      data: [{ value: null, label: '合计' }],
    },
    /* 投保类型 */
    appType: {
      value: null,
      data: [{ value: null, label: '合计' }],
    },
    /* 投保类型 */
    channelClass: {
      value: null,
      data: [{ value: null, label: '合计' }],
    },

    SearchTableData: null,

    loadConditionSuccess: false,

    loadingState: 'done',
    // 根据这个变量决定哪个组件是否显示，只是为了刚加载的时候不会显得很空'channelClass',
    show: ['index', 'lastFee', 'datumLine', 'sort', 'endMonth', 'indicator', 'companyList', 'combine', 'riskLevel', 'appType'],

  },
  reducers: {
    update(state, { payload }) {
      return { ...state, ...payload };
    },
  },
  effects: {
    // eslint-disable-next-line
    *getAllIndexsAndDimensions({ }, { select, call, put }) {
      yield put({ type: 'update', payload: { loadingState: 'loading' } });
      try {
        const state = {};
        const Dimensions = yield call(ZbjkZyzbfxService.getAllIndexsAndDimensions);
        ZbjkZyzbfxService.Dimensions = Dimensions;
        for (const key in Dimensions) {
          if (key !== 'datumLine' && key !== 'sort') {
            let itemData = Dimensions[key];
            if (key !== 'endMonth' && key !== 'sort' && key !== 'index') {
              itemData.unshift({
                label: '合计',
                value: null,
              });
            }
            if (key === 'endMonth') {
              itemData.unshift({
                label: '2017年9月',
                value: '2017-09',
              });
            }
            const defaultItem = itemData[0];
            let defaultValue = defaultItem.value;
            if (key === 'index') {
              const indexDataInfo = yield call(ZbjkZyzbfxService.getIndexDataInfoByName,
                ZbjkZyzbfxService.indicatorSourceArr[0].label);
              itemData = indexDataInfo.data;
              defaultValue = indexDataInfo.value;
            }
            state[key] = { value: defaultValue, data: itemData };
          }
        }
        state.loadConditionSuccess = true;
        state.show = yield call(ZbjkZyzbfxService.setShow,
          ZbjkZyzbfxService.indicatorSourceArr[0].label);
        yield put({ type: 'update', payload: state });
        // eslint-disable-next-line
        const newstate = yield select((state) => state.zbjk_zyzbfx);
        const TableData = yield call(ZbjkZyzbfxService.search, newstate);
        const searchResult = {
          SearchTableData: TableData,
          loadingState: 'done',
        };
        const isexport = newstate.indicator.value; // 查询后，可导出的数据名字
        yield put({ type: 'update', payload: searchResult });
        yield put({ type: 'update', payload: { isexport } });
      } catch (e) {
        yield put({ type: 'update', payload: { loadingState: 'error' } });
        throw (e);
      }
    },
    // eslint-disable-next-line
    *search({ }, { select, call, put }) {
      try {
        yield put({ type: 'update', payload: { loadingState: 'loading' } });
        // eslint-disable-next-line
        const state = yield select((state) => state.zbjk_zyzbfx);
        const TableData = yield call(ZbjkZyzbfxService.search, state);
        const echart = state.companyCode.value;
        // eslint-disable-next-line
        yield put({ type: 'update', payload: { echart, SearchTableData: TableData, loadingState: 'done' } });
        const isexport = state.indicator.value;
        yield put({ type: 'update', payload: { isexport } });
      } catch (e) {
        yield put({ type: 'update', payload: { loadingState: 'done' } });
        throw (e);
      }
    },
    *barSearch({ payload }, { select, call, put }) { // 重要指标当中的图表，点击下钻分公司
      // eslint-disable-next-line
      const state = yield select((state) => state.zbjk_zyzbfx);
      const code = mapToTableData[payload];
      if (code) {
        try {
          state.companyCode.value = code;
          yield put({ type: 'update', payload: { loadingState: 'loading' } });
          const TableData = yield call(ZbjkZyzbfxService.search, state);
          // eslint-disable-next-line
          yield put({ type: 'update', payload: { SearchTableData: TableData, loadingState: 'done' } });
          const isexport = state.indicator.value;
          const echart = state.companyCode.value;
          yield put({ type: 'update', payload: { isexport, echart } });
        } catch (e) {
          yield put({ type: 'update', payload: { loadingState: 'done' } });
          throw (e);
        }
      }
    },
    // eslint-disable-next-line
    *updateConditionValue({ payload: { key, value } }, { select, call, put }) {
      // eslint-disable-next-line
      const zbjk_zyzbfx = yield select((state) => state.zbjk_zyzbfx);
      let state = zbjk_zyzbfx[key];
      state.value = value;
      const items = {};
      items[key] = state;
      if (key === 'indicator') {
        const indicator = ZbjkZyzbfxService.indicatorSourceArr[value].label;
        items.show = yield call(ZbjkZyzbfxService.setShow, indicator);
        const indexDataInfo = yield call(ZbjkZyzbfxService.getIndexDataInfoByName, indicator);
        items.index = {
          value: indexDataInfo.value,
          data: indexDataInfo.data,
        };
        for (let n = 0, m = ZbjkZyzbfxService.clearAll.length; n < m; n += 1) {
          const i = ZbjkZyzbfxService.clearAll[n];
          state = zbjk_zyzbfx[i];
          state.value = null;
        }
      }
      // eslint-disable-next-line
      const otherstate = yield select(state => state.zbjk_zyzbfx);
      // 取出险种名称 otherstate.riskCode
      if (key === 'riskCode' && (otherstate.indicator.value === 1 || otherstate.indicator.value === 2)) {
        if (value === '02' || value === '020101' || value === null) {
          items.show = ZbjkZyzbfxService.conDonShow;
        } else {
          items.show = ZbjkZyzbfxService.conShow;
        }
      }
      yield put({ type: 'update', payload: items });
    },
  },
  subscriptions: {},
};
