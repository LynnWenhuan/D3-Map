/* eslint-disable */
var re = {
  "code": 0,
  "message": "成功",
  "data": {
    "companyCode": [
      {
        "label": "深圳分公司",
        "value": "010",
        "key": "010",
        "children": [
          {
            "label": "福田中支",
            "value": "010010",
            "key": "010010"
          }
        ]
      }
    ],
    "channelClass": [
      {
        "label": "代理业务",
        "value": "19002",
        "key": "19002",
        "children": [
          {
            "label": "兼职代理",
            "value": "1900202",
            "key": "1900202",
            "children": [
              {
                "label": "邮政代理",
                "value": "190020202",
                "key": "190020202"
              }
            ]
          }
        ]
      }
    ],
    "riskCode": [
      {
        "label": "商业保险",
        "value": "03",
        "key": "03",
        "children": [
          {
            "label": "是",
            "value": "0301",
            "key": "0301",
            "children": [
              {
                "label": "第三者责任保险",
                "value": "030102",
                "key": "030102"
              }
            ]
          }
        ]
      }
    ],
    "date": [
      {
        "label": "2017年1月",
        "value": "1497954603000",
        "key": "1497954603000"
      },{
        value:"1509439040000",
        key:"1509439040000"
      }
    ],
    "custType": [
      {
        "label": "非营业个人客车",
        "value": "01",
        "key": "01",
        "children": [
          {
            "label": "非营业个人客车  A类",
            "value": "010101",
            "key": "010101"
          }
        ]
      }
    ],
    "isGroup": [
      {
        "label": "否",
        "value": "0",
        "key": "0"
      }
    ],
    "appType": [
      {
        "label": "新保",
        "value": "01",
        "key": "01"
      }
    ],
    tonGroup: [
      {
        "label": "吨",
        "value": "02",
        "key": "02"
      }
    ],
    "combine": [
      {
        "label": "仅投保损失类险别",
        "value": "02",
        "key": "02"
      }
    ],
    "lastRecord": [
      {
        "label": "1年未出险",
        "value": "06",
        "key": "06"
      }
    ],
    "lastFee": [
      {
        "label": "出险金额≤1万",
        "value": "03",
        "key": "03"
      }
    ],
    "riskLevel": [
      {
        "label": "是",
        "value": "1",
        "key": "1"
      }
    ],
    "insuredAge": [
      {
        "label": "年龄<24岁",
        "value": "01",
        "key": "01"
      }
    ],
    "tonGrounp": [
      {
        "label": "吨位数<1",
        "value": "01",
        "key": "01"
      }
    ],
    "injured": [
      {
        "label": "是",
        "value": "1",
        "key": "1"
      }
    ],
    "bigCase": [
      {
        "label": "是",
        "value": "1",
        "key": "1"
      }
    ],
    "index": [
      {
        "label": "赔付类",
        "value": "1",
        "key": "1",
        "children": [
          {
            "label": "满期赔付率",
            "value": "2",
            "key": "2",
            relative:"curPeriodOfExpPayRate"
          }
        ]
      },
      {
        "label": "保费类",
        "value": "1",
        "key": "1",
        "children": [
          {
            "label": "保费类1",
            "value": "2",
            "key": "2",
            relative:"curMonthPrmIncome"
          }
        ]
      },
      {
        "label": "承保管理类",
        "value": "1",
        "key": "1",
        "children": [
          {
            "label": "承保管理类1",
            "value": "2",
            "key": "2",
            relative:"curPeriodOfNumRenewalRate"
          }
        ]
      },
      {
        "label": "利润类",
        "value": "1",
        "key": "1",
        "children": [
          {
            "label": "利润类1",
            "value": "2",
            "key": "2",
            relative:"curPeriodOfEarnedPayRate"
          }
        ]
      },
      {
        "label": "理赔管理类",
        "value": "1",
        "key": "1",
        "children": [
          {
            "label": "理赔管理类1",
            "value": "2",
            "key": "2",
            relative:"curMonthOfNumClaim"
          }
        ]
      }
    ],
    "sort": [
      {
        "label": "自然排序",
        "value": "1",
        "key": "1"
      }
    ],
    "datumLine": "2000"
  }
}

var premium = {
  "code": 0,
  "message": "成功",
  "data": {
    "columns": [
      {
        "title": "序号",
        "dataIndex": "key",
        "key": "key"
      },
      {
        "title": "机构",
        "dataIndex": "company",
        "key": "company"
      },
      {
        "title": "保费收入（万元）",
        "children": [
          {
            "title": "上月",
            "dataIndex": "lastMonthPrmIncome",
            "key": "lastMonthPrmIncome"
          },
          {
            "title": "本月",
            "dataIndex": "curMonthPrmIncome",
            "key": "curMonthPrmIncome"
          }
        ]
      },
      {
        "title": "累计保费收入（万元）",
        "children": [
          {
            "title": "上年同期",
            "dataIndex": "lastSameTimeOfTotalPrmIncome",
            "key": "lastSameTimeOfTotalPrmIncome"
          },
          {
            "title": "本年",
            "dataIndex": "curYearOfTotalPrmIncome",
            "key": "curYearOfTotalPrmIncome"
          }
        ]
      },
      {
        "title": "同比增长率",
        "dataIndex": "growRate",
        "key": "growRate"
      },
      {
        "title": "计划达成率",
        "dataIndex": "planAchievRate",
        "key": "planAchievRate"
      },
      {
        "title": "签单净保费（万元）",
        "children": [
          {
            "title": "上月",
            "dataIndex": "lastMonthOfNetPrm",
            "key": "lastMonthOfNetPrm"
          },
          {
            "title": "本月",
            "dataIndex": "curMonthOfNetPrm",
            "key": "curMonthOfNetPrm"
          }
        ]
      },
      {
        "title": "未来月保费目标（万元)",
        "dataIndex": "futureMonthGoal",
        "key": "futureMonthGoal"
      },
      {
        "title": "当地保费收入（万元）",
        "dataIndex": "localPrmIncome",
        "key": "localPrmIncome"
      },
      {
        "title": "当地保费收入同比",
        "dataIndex": "growLocalPrmIncome",
        "key": "growLocalPrmIncome"
      },
      {
        "title": "市场份额",
        "dataIndex": "marketShare",
        "key": "marketShare"
      }
    ],
    "dataSource": [
      {
        "company": "深圳分公司",
        "lastMonthPrmIncome": "45.2",
        "curMonthPrmIncome": "32.5",
        "lastSameTimeOfTotalPrmIncome": "551527.3",
        "curYearOfTotalPrmIncome": "595452.6",
        "growRate": "9.99%",
        "planAchievRate": "77.9%",
        "lastMonthOfNetPrm": "23452.3",
        "curMonthOfNetPrm": "58952.0",
        "futureMonthGoal": "83688.9",
        "localPrmIncome": "45635.9",
        "growLocalPrmIncome": "5.6%",
        "marketShare": "8.7%",
        "index": "历年制赔付率",
        "sort": "自然排序",
        "datumLine": "0"
      },
      {
        "company": "江西分公司",
        "lastMonthPrmIncome": "45.2",
        "curMonthPrmIncome": "312.5",
        "lastSameTimeOfTotalPrmIncome": "551527.3",
        "curYearOfTotalPrmIncome": "525452.6",
        "growRate": "9.99%",
        "planAchievRate": "77.9%",
        "lastMonthOfNetPrm": "23452.3",
        "curMonthOfNetPrm": "58952.0",
        "futureMonthGoal": "83688.9",
        "localPrmIncome": "45635.9",
        "growLocalPrmIncome": "5.6%",
        "marketShare": "8.7%",
        "index": "历年制赔付率",
        "sort": "自然排序",
        "datumLine": "0"
      },
      {
        "company": "福建分公司",
        "lastMonthPrmIncome": "45.2",
        "curMonthPrmIncome": "321.5",
        "lastSameTimeOfTotalPrmIncome": "551527.3",
        "curYearOfTotalPrmIncome": "515452.6",
        "growRate": "9.99%",
        "planAchievRate": "77.9%",
        "lastMonthOfNetPrm": "23452.3",
        "curMonthOfNetPrm": "58952.0",
        "futureMonthGoal": "83688.9",
        "localPrmIncome": "45635.9",
        "growLocalPrmIncome": "5.6%",
        "marketShare": "8.7%",
        "index": "历年制赔付率",
        "sort": "自然排序",
        "datumLine": "0"
      },
      {
        "company": "广西分公司",
        "lastMonthPrmIncome": "45.2",
        "curMonthPrmIncome": "132.5",
        "lastSameTimeOfTotalPrmIncome": "551527.3",
        "curYearOfTotalPrmIncome": "525452.6",
        "growRate": "9.99%",
        "planAchievRate": "77.9%",
        "lastMonthOfNetPrm": "23452.3",
        "curMonthOfNetPrm": "58952.0",
        "futureMonthGoal": "83688.9",
        "localPrmIncome": "45635.9",
        "growLocalPrmIncome": "5.6%",
        "marketShare": "8.7%",
        "index": "历年制赔付率",
        "sort": "自然排序",
        "datumLine": "0"
      },
      {
        "company": "湖南分公司",
        "lastMonthPrmIncome": "45.2",
        "curMonthPrmIncome": "132.5",
        "lastSameTimeOfTotalPrmIncome": "551527.3",
        "curYearOfTotalPrmIncome": "595452.6",
        "growRate": "9.99%",
        "planAchievRate": "77.9%",
        "lastMonthOfNetPrm": "23452.3",
        "curMonthOfNetPrm": "58952.0",
        "futureMonthGoal": "83688.9",
        "localPrmIncome": "45635.9",
        "growLocalPrmIncome": "5.6%",
        "marketShare": "8.7%",
        "index": "历年制赔付率",
        "sort": "自然排序",
        "datumLine": "0"
      },
      {
        "company": "湖北分公司",
        "lastMonthPrmIncome": "45.2",
        "curMonthPrmIncome": "332.5",
        "lastSameTimeOfTotalPrmIncome": "551527.3",
        "curYearOfTotalPrmIncome": "595452.6",
        "growRate": "9.99%",
        "planAchievRate": "77.9%",
        "lastMonthOfNetPrm": "23452.3",
        "curMonthOfNetPrm": "58952.0",
        "futureMonthGoal": "83688.9",
        "localPrmIncome": "45635.9",
        "growLocalPrmIncome": "5.6%",
        "marketShare": "8.7%",
        "index": "历年制赔付率",
        "sort": "自然排序",
        "datumLine": "0"
      }
    ]
  }
}

var payRate ={
  "code": 0,
  "message": "成功",
  "data": {
    "columns": [
      {
        "title": "序号",
        "dataIndex": "key",
        "key": "key"
      },
      {
        "title": "机构",
        "dataIndex": "company",
        "key": "company"
      },
      {
        "title": "满期赔付率",
        "children": [
          {
            "title": "上期",
            "dataIndex": "lastPeriodOfExpPayRate",
            "key": "lastPeriodOfExpPayRate"
          },
          {
            "title": "本期",
            "dataIndex": "curPeriodOfExpPayRate",
            "key": "curPeriodOfExpPayRate"
          }
        ]
      },
      {
        "title": "上年保单满期赔付率",
        "children": [
          {
            "title": "上期",
            "dataIndex": "lastPeriodOfLastYearExpPayRate",
            "key": "lastPeriodOfLastYearExpPayRate"
          },
          {
            "title": "本期",
            "dataIndex": "curPeriodOfLastYearExpPayRate",
            "key": "curPeriodOfLastYearExpPayRate"
          },
          {
            "title": "上年同期",
            "dataIndex": "lastSamePeriodOfLastYearExpPayRate",
            "key": "lastSamePeriodOfLastYearExpPayRate"
          }
        ]
      },
      {
        "title": "上年保单满期赔付率拆分",
        "children": [
          {
            "title": "上年满期",
            "dataIndex": "lastExpOfPayRateBreak",
            "key": "lastExpOfPayRateBreak"
          },
          {
            "title": "当年满期",
            "dataIndex": "curExpOfPayRateBreak",
            "key": "curExpOfPayRateBreak"
          }
        ]
      },
      {
        "title": "历年制赔付率",
        "children": [
          {
            "title": "上期",
            "dataIndex": "lastPeriodOfAnnualPayRate",
            "key": "lastPeriodOfAnnualPayRate"
          },
          {
            "title": "本期",
            "dataIndex": "curPeriodOfAnnualPayRate",
            "key": "curPeriodOfAnnualPayRate"
          },
          {
            "title": "上年同期",
            "dataIndex": "lastSamePeriodOfAnnualPayRate",
            "key": "lastSamePeriodOfAnnualPayRate"
          }
        ]
      }
    ],
    "dataSource": [
      {
        "company": "深圳分公司",
        "lastPeriodOfExpPayRate": "5.0%",
        "curPeriodOfExpPayRate": "6.5%",
        "lastPeriodOfOfLastYearExpPayRate": "4.9222%",
        "curPeriodOfOfLastYearExpPayRate": "8.4%",
        "lastSamePeriodOfOfLastYearExpPayRate": "5.9%",
        "lastExpOfPayRateBreak": "8.7%",
        "curExpOfPayRateBreak": "6.7%",
        "lastPeriodOfAnnualPayRate": "6.4%",
        "curPeriodOfAnnualPayRate": "6.4%",
        "lastSamePeriodOfAnnualPayRate": "6.4%",
        "index": "历年制赔付率",
        "sort": "自然排序",
        "datumLine": "0"
      }
    ]
  }
}

var underWriting = {
  "code": 0,
  "message": "成功",
  "data": {
    "columns": [
      {
        "title": "序号",
        "dataIndex": "key",
        "key": "key"
      },
      {
        "title": "机构",
        "dataIndex": "company",
        "key": "company"
      },
      {
        "title": "件数续保率",
        "children": [
          {
            "title": "上期",
            "dataIndex": "lastPeriodOfNumRenewalRate",
            "key": "lastPeriodOfNumRenewalRate"
          },
          {
            "title": "本期",
            "dataIndex": "curPeriodOfNumRenewalRate",
            "key": "curPeriodOfNumRenewalRate"
          },
          {
            "title": "上年同期",
            "dataIndex": "lastSamePeriodOfNumRenewalRate",
            "key": "lastSamePeriodOfNumRenewalRate"
          }
        ]
      },
      {
        "title": "满期出险频度",
        "children": [
          {
            "title": "上期",
            "dataIndex": "lastPeriodOfExpClaimFreq",
            "key": "lastPeriodOfExpClaimFreq"
          },
          {
            "title": "本期",
            "dataIndex": "curPeriodOfExpClaimFreq",
            "key": "curPeriodOfExpClaimFreq"
          },
          {
            "title": "上年同期",
            "dataIndex": "lastSamePeriodOfExpClaimFreq",
            "key": "lastSamePeriodOfExpClaimFreq"
          }
        ]
      },
      {
        "title": "案均赔款",
        "children": [
          {
            "title": "上期",
            "dataIndex": "lastPeriodOfAvgPay",
            "key": "lastPeriodOfAvgPay"
          },
          {
            "title": "本期",
            "dataIndex": "curPeriodOfAvgPay",
            "key": "curPeriodOfAvgPay"
          },
          {
            "title": "上年同期",
            "dataIndex": "lastSamePeriodOfAvgPay",
            "key": "lastSamePeriodOfAvgPay"
          }
        ]
      },
      {
        "title": "净费率系数",
        "children": [
          {
            "title": "上期",
            "dataIndex": "lastPeriodOfNetRate",
            "key": "lastPeriodOfNetRate"
          },
          {
            "title": "本期",
            "dataIndex": "curPeriodOfNetRate",
            "key": "curPeriodOfNetRate"
          },
          {
            "title": "上年同期",
            "dataIndex": "lastSamePeriodOfNetRate",
            "key": "lastSamePeriodOfNetRate"
          }
        ]
      },
      {
        "title": "单均保费",
        "dataIndex": "avgPrm",
        "key": "avgPrm"
      },
      {
        "title": "平均NCD系数",
        "dataIndex": "avgNCD",
        "key": "avgNCD"
      },
      {
        "title": "平均双自主系数",
        "dataIndex": "avgAutoCoeff",
        "key": "avgAutoCoeff"
      },
      {
        "title": "平均自主核保系数",
        "dataIndex": "avgAutoUWCoeff",
        "key": "avgAutoUWCoeff"
      },
      {
        "title": "平均自主渠道系数",
        "dataIndex": "avgAutoChannelCoeff",
        "key": "avgAutoChannelCoeff"
      },
      {
        "title": "平均交通违法系数",
        "dataIndex": "avgAutoIllegalCoeff",
        "key": "avgAutoIllegalCoeff"
      },
      {
        "title": "地板价比例",
        "dataIndex": "floorRatio",
        "key": "floorRatio"
      },
      {
        "title": "自核通过率",
        "children": [
          {
            "title": "上期",
            "dataIndex": "lastPeriodOfAutoPassRate",
            "key": "lastPeriodOfAutoPassRate"
          },
          {
            "title": "本期",
            "dataIndex": "curPeriodOfAutoPassRate",
            "key": "curPeriodOfAutoPassRate"
          },
          {
            "title": "上年同期",
            "dataIndex": "lastSamePeriodOfAutoPassRate",
            "key": "lastSamePeriodOfAutoPassRate"
          }
        ]
      }
    ],
    "dataSource": [
      {
        "company": "深圳分公司",
        "lastPeriodOfNumRenewalRate": "4.9%",
        "curPeriodOfNumRenewalRate": "8.4%",
        "lastSamePeriodOfNumRenewalRate": "5.9%",
        "lastPeriodOfExpClaimFreq": "4.9",
        "curPeriodOfExpClaimFreq": "8.4",
        "lastSamePeriodOfExpClaimFreq": "5.9",
        "lastPeriodOfAvgPay": "5364.6",
        "curPeriodOfAvgPay": "5364.6",
        "lastSamePeriodOfAvgPay": "5364.6",
        "lastPeriodOfNetRate": "0.6",
        "curPeriodOfNetRate": "0.6",
        "lastSamePeriodOfNetRate": "0.8",
        "avgPrm": "53642.8",
        "avgNCD": "0.5",
        "avgAutoCoeff": "0.5",
        "avgAutoUWCoeff": "0.5",
        "avgAutoChannelCoeff": "0.5",
        "avgAutoIllegalCoeff": "0.5",
        "floorRatio": "43.8%",
        "lastPeriodOfAutoPassRate": "4.9%",
        "curPeriodOfAutoPassRate": "8.4%",
        "lastSamePeriodOfAutoPassRate": "5.9%",
        "index": "历年制赔付率",
        "sort": "自然排序",
        "datumLine": "0"
      }
    ]
  }
}

var claimsManagement ={
  "code": 0,
  "message": "成功",
  "data": {
    "columns": [
      {
        "title": "序号",
        "dataIndex": "key",
        "key": "key"
      },
      {
        "title": "机构",
        "dataIndex": "company",
        "key": "company"
      },
      {
        "title": "报案件数",
        "children": [
          {
            "title": "上期",
            "dataIndex": "lastMonthOfNumClaim",
            "key": "lastMonthOfNumClaim"
          },
          {
            "title": "本期",
            "dataIndex": "curMonthOfNumClaim",
            "key": "curMonthOfNumClaim"
          },
          {
            "title": "上年同期",
            "dataIndex": "lastSamperPeriodOfNumClaim",
            "key": "lastSamperPeriodOfNumClaim"
          }
        ]
      },
      {
        "title": "初次代数预估偏差率",
        "children": [
          {
            "title": "上期",
            "dataIndex": "lastPeriodOfFirstAlgeEstRate",
            "key": "lastPeriodOfFirstAlgeEstRate"
          },
          {
            "title": "本期",
            "dataIndex": "curPeriodOfFirstAlgeEstRate",
            "key": "curPeriodOfFirstAlgeEstRate"
          },
          {
            "title": "上年同期",
            "dataIndex": "lastSamperPeriodOfFirstAlgeEstRate",
            "key": "lastSamperPeriodOfFirstAlgeEstRate"
          }
        ]
      },
      {
        "title": "初次代数预估偏差率",
        "children": [
          {
            "title": "上期",
            "dataIndex": "lastPeriodOfFirstAbsEstRate",
            "key": "lastPeriodOfFirstAbsEstRate"
          },
          {
            "title": "本期",
            "dataIndex": "curPeriodOfFirstAbsEstRate",
            "key": "curPeriodOfFirstAbsEstRate"
          },
          {
            "title": "上年同期",
            "dataIndex": "lastSamePeriodOfFirstAbsEstRate",
            "key": "lastSamePeriodOfFirstAbsEstRate"
          }
        ]
      },
      {
        "title": "代数预估偏差率",
        "dataIndex": "algeEstRate",
        "key": "algeEstRate"
      },
      {
        "title": "绝对预估偏差率",
        "dataIndex": "absEstRate",
        "key": "absEstRate"
      },
      {
        "title": "累计结案率",
        "dataIndex": "totalEndCaseRate",
        "key": "totalEndCaseRate"
      },
      {
        "title": "件数销案率",
        "dataIndex": "revokeRate",
        "key": "revokeRate"
      }
    ],
    "dataSource": [
      {
        "company": "深圳分公司",
        "lastMonthOfNumClaim": "50",
        "curMonthOfNumClaim": "53",
        "lastSamePeriodOfNumClaim": "53",
        "lastPeriodOfFirstAlgeEstRate": "12.4%",
        "curPeriodOfFirstAlgeEstRate": "12.5%",
        "lastSamePeriodOfFirstAlgeEstRate": "12.5%",
        "lastPeriodOfFirstAbsEstRate": "12.4%",
        "curPeriodOfFirstAbsEstRate": "12.5%",
        "lastSamePeriodOfFirstAbsEstRate": "12.5%",
        "algeEstRate": "12.5%",
        "absEstRate": "12.5%",
        "totalEndCaseRate": "12.5%",
        "revokeRate": "12.5%",
        "index": "历年制赔付率",
        "sort": "自然排序",
        "datumLine": "0"
      }
    ]
  }
}

var profit ={
  "code": 0,
  "message": "成功",
  "data": {
    "columns": [
      {
        "title": "序号",
        "dataIndex": "key",
        "key": "key"
      },
      {
        "title": "机构",
        "dataIndex": "company",
        "key": "company"
      },
      {
        "title": "累计保费收入（万元）",
        "dataIndex": "totalPrm",
        "key": "totalPrm"
      },
      {
        "title": "已赚赔付率",
        "children": [
          {
            "title": "上期",
            "dataIndex": "lastPeriodOfEarnedPayRate",
            "key": "lastPeriodOfEarnedPayRate"
          },
          {
            "title": "本期",
            "dataIndex": "curPeriodOfEarnedPayRate",
            "key": "curPeriodOfEarnedPayRate"
          },
          {
            "title": "上年同期",
            "dataIndex": "lastSamperPeriodOfEarnedPayRate",
            "key": "lastSamperPeriodOfEarnedPayRate"
          }
        ]
      },
      {
        "title": "保单获取成本率",
        "children": [
          {
            "title": "上期",
            "dataIndex": "lastPeriodOfPolicyCastRate",
            "key": "lastPeriodOfPolicyCastRate"
          },
          {
            "title": "本期",
            "dataIndex": "curPeriodOfPolicyCastRate",
            "key": "curPeriodOfPolicyCastRate"
          },
          {
            "title": "上年同期",
            "dataIndex": "lastSamperPeriodOfPolicyCastRate",
            "key": "lastSamperPeriodOfPolicyCastRate"
          }
        ]
      },
      {
        "title": "边际贡献率",
        "children": [
          {
            "title": "上期",
            "dataIndex": "lastPeriodOfMgnContributeRate",
            "key": "lastPeriodOfMgnContributeRate"
          },
          {
            "title": "本期",
            "dataIndex": "curPeriodOfMgnContributeRate",
            "key": "curPeriodOfMgnContributeRate"
          },
          {
            "title": "上年同期",
            "dataIndex": "lastSamperPeriodOfMgnContributeRate",
            "key": "lastSamperPeriodOfMgnContributeRate"
          }
        ]
      },
      {
        "title": "边际贡献率",
        "children": [
          {
            "title": "上期",
            "dataIndex": "lastPeriodOfMgnContributeQuota",
            "key": "lastPeriodOfMgnContributeQuota"
          },
          {
            "title": "本期",
            "dataIndex": "curPeriodOfMgnContributeQuota",
            "key": "curPeriodOfMgnContributeQuota"
          },
          {
            "title": "上年同期",
            "dataIndex": "lastSamperPeriodOfMgnContributeQuota",
            "key": "lastSamperPeriodOfMgnContributeQuota"
          }
        ]
      },
      {
        "title": "手续费率",
        "dataIndex": "commissRate",
        "key": "commissRate"
      },
      {
        "title": "展业费率",
        "dataIndex": "expandRate",
        "key": "expandRate"
      }
    ],
    "dataSource": [
      {
        "company": "深圳分公司",
        "totalPrm": "53534.9",
        "lastPeriodOfEarnedPayRate": "13.9%",
        "curPeriodOfEarnedPayRate": "13.9%",
        "lastSamperPeriodOfEarnedPayRate": "13.9%",
        "lastPeriodOfPolicyCastRate": "13.9%",
        "curPeriodOfPolicyCastRate": "13.9%",
        "lastSamperPeriodOfPolicyCastRate": "13.9%",
        "lastPeriodOfMgnContributeRate": "13.9%",
        "curPeriodOfMgnContributeRate": "13.9%",
        "lastSamperPeriodOfMgnContributeRate": "13.9%",
        "lastPeriodOfMgnContributeQuota": "1345.9",
        "curPeriodOfMgnContributeQuota": "1355.9",
        "lastSamperPeriodOfMgnContributeQuota": "1347.9",
        "commissRate": "13.9%",
        "expandRate": "13.9%",
        "index": "历年制赔付率",
        "sort": "自然排序",
        "datumLine": "0"
      }
    ]
  }
}

export default {
  'GET /com-sinosafe-pzjk/indexmonitor/importantIndicatorAnalzy/getAllIndexsAndDimensions': (req, rsp) => {
    setTimeout(()=>{
      const M = parseInt( Math.random()*1000)%3;
      if(M<=0){
        re.code = 0;
        rsp.json(re);
      }else{
        re.code = 0;
        rsp.json(re);
      }
    },100);
  },
  'POST /com-sinosafe-pzjk/indexmonitor/importantIndicatorAnalzy/premium': (req, rsp) => {
    setTimeout(()=>{
      const M = parseInt( Math.random()*1000)%3;
      if(M<=0){
        premium.code = 0;
        rsp.json(premium);
      }else{
        premium.code = 0;
        rsp.json(premium);
      }
    },100);
  },
  'POST /com-sinosafe-pzjk/indexmonitor/importantIndicatorAnalzy/payRate': (req, rsp) => {
    setTimeout(()=>{
      const M = parseInt( Math.random()*1000)%3;
      if(M<=0){
        payRate.code = 0;
        rsp.json(payRate);
      }else{
        payRate.code = 0;
        rsp.json(payRate);
      }
    },100);
  },
  'POST /com-sinosafe-pzjk/indexmonitor/importantIndicatorAnalzy/underWriting': (req, rsp) => {
    setTimeout(()=>{
      const M = parseInt( Math.random()*1000)%3;
      if(M<=0){
        underWriting.code = 0;
        rsp.json(underWriting);
      }else{
        underWriting.code = 0;
        rsp.json(underWriting);
      }
    },100);
  },
  'POST /com-sinosafe-pzjk/indexmonitor/importantIndicatorAnalzy/claimsManagement': (req, rsp) => {
    setTimeout(()=>{
      const M = parseInt( Math.random()*1000)%3;
      if(M<=0){
        claimsManagement.code = 0;
        rsp.json(claimsManagement);
      }else{
        claimsManagement.code = 0;
        rsp.json(claimsManagement);
      }
    },100);
  },
  'POST /com-sinosafe-pzjk/indexmonitor/importantIndicatorAnalzy/profit': (req, rsp) => {
    setTimeout(()=>{
      const M = parseInt( Math.random()*1000)%3;
      if(M<=0){
        profit.code = 0;
        rsp.json(profit);
      }else{
        profit.code = 0;
        rsp.json(profit);
      }
    },100);
  }
};
