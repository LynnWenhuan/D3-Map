/**
 * Created on 2017/11/16.
 * @author JarkimZhu
 */

const prefix = window.location.protocol === 'https:' ? 'https://' : 'http://';
export default {
  SERVER: SERVER ? prefix + SERVER.split('://')[1] : SERVER,
  // eslint-disable-next-line
  ID_CODE,
};
