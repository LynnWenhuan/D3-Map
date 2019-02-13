import HttpUtils from '../utils/HttpUtils';


const showMap = {
  保费类: [
    'endMonth',
    'companyCode',
    'riskCode',
    'isGroup',
    'appType',
    'custType',
    'channelClass',
  ],
  赔付类: [
    'endMonth',
    'companyCode',
    'riskCode',
    'custType',
    'isGroup',
    'appType',
    'channelClass',
  ],
  承保管理类: [
    'endMonth',
    'companyCode',
    'riskCode',
    'custType',
    'isGroup',
    'appType',
    'channelClass',
  ],
  理赔管理类: [
    'endMonth',
    'companyCode',
    'riskCode',
    'injured',
    'bigCase',
  ],
  利润类: [
    'endMonth',
    'companyCode',
    'riskCode',
  ],
};

export default class ZbjkZyzbfxService {
  static indicatorSourceArr = [
    { value: 0, label: '保费类', url: '/premium' },
    { value: 1, label: '赔付类', url: '/payRate' },
    { value: 2, label: '承保管理类', url: '/underWriting' },
    { value: 3, label: '理赔管理类', url: '/claimsManagement' },
    { value: 4, label: '利润类', url: '/profit' },
  ];
  static conShow = ['index', 'datumLine', 'indicator', 'endMonth', 'companyCode', 'custType',
    'riskCode', 'isGroup', 'appType', 'channelClass', 'sort', 'combine', 'lastRecord', 'lastFee',
    'insuredAge', 'tonGroup', 'injured'];
  static conDonShow = ['index', 'datumLine', 'indicator', 'endMonth', 'companyCode', 'custType',
    'riskCode', 'isGroup', 'appType', 'channelClass', 'sort'];
  static ZBJK_SERVICE_URL = '/indexmonitor/importantIndicatorAnalzy';
  static clearAll = ['companyCode', 'custType', 'riskCode', 'isGroup', 'appType', 'channelClass', 'combine', 'lastRecord', 'lastFee',
    'insuredAge', 'tonGroup', 'injured']
  static getAllIndexsAndDimensions() {
    return HttpUtils.get(`${ZbjkZyzbfxService.ZBJK_SERVICE_URL}/getAllIndexsAndDimensions`);
  }
  static getConditionByName(name, state) {
    let conditionMap = showMap[name];
    if (name === '赔付类' || name === '承保管理类') {
      if (state.riskCode.value === '02' || state.riskCode.value === '020101' || state.riskCode.value === null) {
        conditionMap = conditionMap.concat();
      } else {
        conditionMap = conditionMap.concat(['combine', 'lastRecord', 'lastFee', 'insuredAge', 'tonGroup', 'injured']);
      }
    }
    const condition = {};

    for (let i = 0, j = conditionMap.length; i < j; i += 1) {
      const conditionName = conditionMap[i];
      condition[conditionName] = state[conditionName].value;
    }
    return condition;
  }


  static search(state) {
    const itemInfo = ZbjkZyzbfxService.indicatorSourceArr[state.indicator.value];
    const indcatorName = itemInfo.label;
    const conditions = ZbjkZyzbfxService.getConditionByName(indcatorName, state);
    const ServerUrl = ZbjkZyzbfxService.ZBJK_SERVICE_URL + itemInfo.url;
    return HttpUtils.post(ServerUrl, conditions);
  }
  static setShow(name) {
    const common = ['index', 'datumLine', 'indicator', 'sort'];
    return showMap[name].concat(common);
  }

  static getDateInfo() {
    const years = [];
    const months = [];
    let firstVlue = '';
    for (let i = 0, j = ZbjkZyzbfxService.Dimensions.date.length; i < j; i += 1) {
      const DateItem = ZbjkZyzbfxService.Dimensions.date[i];
      const D = new Date(parseInt(DateItem.value, 10));
      const year = D.getFullYear();
      if (years.indexOf(year) < 0) {
        years.push(year);
      }
      const month = D.getMonth() + 1;
      if (months.indexOf(month) < 0) {
        months.push(month);
      }
      if (i === 0) {
        firstVlue = `${year}-${month}月`;
      }
    }
    years.sort((a, b) => { return a > b; });
    months.sort((a, b) => { return a > b; });
    const yearArr = [];
    const monthArr = [];
    for (let i = 0, j = years.length; i < j; i += 1) {
      yearArr.push({ value: years[i], label: years[i] });
    }
    for (let i = 0, j = months.length; i < j; i += 1) {
      monthArr.push({ value: months[i], label: `${months[i]}月` });
    }
    return {
      value: firstVlue,
      year: yearArr,
      month: monthArr,
    };
  }

  static getIndexDataInfoByName(name) {
    let curIndexInfo = null;
    for (let i = 0, j = ZbjkZyzbfxService.Dimensions.index.length; i < j; i += 1) {
      const itemData = ZbjkZyzbfxService.Dimensions.index[i];
      if (itemData.label === name) {
        curIndexInfo = itemData;
        break;
      }
    }
    if (!curIndexInfo) {
      /* eslint-disable */
      console.log(`后台数据未提供关于${name}的图示指标信息`);
      return { value: 0, data: [{ lable: '-', value: 0 }] };
    }

    return { value: curIndexInfo.children[0].value, data: curIndexInfo.children };
  }
}

