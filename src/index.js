import dva from 'dva';
import createLoading from 'dva-loading';

import './index.css';

import registerModels from './models/index';
import CommonService from './services/CommonService';

// 1. Initialize
const app = dva({
  onError(...args) {
    CommonService.onError(...args);
  },
});

// 2. Plugins
app.use(createLoading());

// 3. Model
registerModels(app);

// 4. Router
app.router(require('./router'));

// 5. Start
app.start('#root');
