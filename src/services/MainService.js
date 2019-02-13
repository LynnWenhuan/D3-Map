import HttpUtils from '../utils/HttpUtils';

export default {
  queryMenuData(page) {
    return HttpUtils.get(`/users?page=${page}`);
  },
};
