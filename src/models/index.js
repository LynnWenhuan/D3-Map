/**
 * Created by zhujiaqi on 2017/4/20.
 */

import Users from './Users';
import MainModels from './main';
import ZbjkZtfx from './Zbjk_ztfx';
import ZbjkZyzbfx from './Zbjk_zyzbfx';

export default function registerModels(app) {
  app.model(Users);
  app.model(MainModels);
  app.model(ZbjkZtfx);
  app.model(ZbjkZyzbfx);
}
