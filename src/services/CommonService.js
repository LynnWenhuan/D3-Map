// import Storage from 'react-native-storage';
import { message } from 'antd';

import ErrorCode from '../assets/data/ErrorCode';

/* eslint-disable */

const CommonService = {
  // initApp(global) {
  //   const exp = global;
  //   const storage = new Storage({
  //     // 最大容量，默认值1000条数据循环存储
  //     size: 1000,

  //     // 存储引擎：对于RN使用AsyncStorage，对于web使用window.localStorage
  //     // 如果不指定则数据只会保存在内存中，重启后即丢失
  //     storageBackend: window.localStorage,

  //     // 数据过期时间，默认一整天（1000 * 3600 * 24 毫秒），设为null则永不过期
  //     defaultExpires: 1000 * 3600 * 24,

  //     // 读写时在内存中缓存数据。默认启用。
  //     enableCache: false,
  //   });

  //   exp.storage = storage;

  //   HttpUtils.initToken();
  // },

  onError(e, dispatch) {
    console.log(e);
    if (e instanceof Error) {
      console.error(e);
    } else {
      const { status, code, messages } = e;
      const changeMessages = ErrorCode[code] || ErrorCode[status];
      if (changeMessages) {
        message.info(changeMessages, 2);
      } else {
        message.info(messages, 2);
      }

      switch (true) {
        case code === 1003:
          dispatch({
            type: 'user/toSignIn',
          });
          break;
        default:
          // message.info('请求服务失败', 1.5);
          break;
      }
    }
  },

};

export default CommonService;
