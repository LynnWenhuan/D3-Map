
/**
 * Created by LynnLin on 2017/10/26.
 */
import HttpUtils from '../utils/HttpUtils';

export default class ZbjkService {
  static ZBJK_SERVICE_URL = '/indexmonitor/totalAnalzy';
  static clearAll = ['companyCode', 'riskCode', 'channelClass', 'custType', 'isGroup', 'appType', // 变换时候，清除选择
    'combine', 'lastRecord', 'lastFee']
  static clearSome = ['custType', 'isGroup', 'appType', 'combine', 'lastRecord', 'lastFee']; // 变换时候，清除选择
  static queryZbjkData() {
    return HttpUtils.get(`${ZbjkService.ZBJK_SERVICE_URL}/getAllIndexsAndDimensions`);
  }
  static querQuotaData(zbjk) {
    const bodyAData = ['annualPayRate', 'policyCastRate', 'mgnContributeRate', 'compCastRate',
      'expPayRate', 'firstAlgeEstRate', 'firstAbsEstRate', 'totalEndCaseRate'];
    const bodyBData = ['netRate', 'expClaimFreq', 'avgNCD', 'avgAutoCoeff', 'floorRatio'];
    const bodyA = {
      endMonth: zbjk.endMonth.value,
      companyCode: zbjk.companyCode.value,
      riskCode: zbjk.riskCode.value,
    };
    const bodyB = {
      endMonth: zbjk.endMonth.value,
      companyCode: zbjk.companyCode.value,
      riskCode: zbjk.riskCode.value,
      isGroup: zbjk.isGroup.value,
      appType: zbjk.appType.value,
      combine: zbjk.combine.value,
      lastRecord: zbjk.lastRecord.value,
      lastFee: zbjk.lastFee.value,
      channelClass: zbjk.channelClass.value,
      custType: zbjk.custType.value,
    };
    if (zbjk.quota.value === 'timeAchievRate') {
      const body = {
        endMonth: zbjk.endMonth.value,
        companyCode: zbjk.companyCode.value,
        riskCode: zbjk.riskCode.value,
        channelClass: zbjk.channelClass.value,
      };
      return HttpUtils.post(`${ZbjkService.ZBJK_SERVICE_URL}/timeAchievRate`, body);
    } else if (zbjk.quota.value === 'numRenewalRate') {
      const body = {
        endMonth: zbjk.endMonth.value,
        companyCode: zbjk.companyCode.value,
        riskCode: zbjk.riskCode.value,
        channelClass: zbjk.channelClass.value,
        custType: zbjk.custType.value,
      };
      return HttpUtils.post(`${ZbjkService.ZBJK_SERVICE_URL}/numRenewalRate`, body);
    } else if (bodyAData.indexOf(zbjk.quota.value) !== -1) {
      const body = bodyA;
      return HttpUtils.post(`${ZbjkService.ZBJK_SERVICE_URL}/${zbjk.quota.value}`, body);
    } else if (bodyBData.indexOf(zbjk.quota.value) !== -1) { // 净费率系数
      const body = bodyB;
      return HttpUtils.post(`${ZbjkService.ZBJK_SERVICE_URL}/${zbjk.quota.value}`, body);
    }
  }

  static getAllIndexsAndDimensions() {
    return HttpUtils.get(`${ZbjkService.ZBJK_SERVICE_URL}/indexmonitor/importantIndicatorAnalzy/getAllIndexsAndDimensions`);
  }
  static getExporData(zbjk) {
    const exportBody = { data: zbjk.zbjkResponseData };
    return HttpUtils.post('/export', exportBody);
  }
}

