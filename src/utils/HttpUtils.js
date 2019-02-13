import { HttpClient } from 'snk-libs';

const httpClient = new HttpClient();
/**
 * Created on 2017/4/28.
 * @author JarkimZhu
 * @class
 */
export default class HttpUtils {
  static _seq = 0;

  static async post(url, body, getFullResponse) {
    const uri = SERVER + url;
    const request = HttpUtils._createRequest(body);
    const response = await httpClient.post(uri, request);
    return HttpUtils._processResponse(response, getFullResponse);
  }

  static async get(url) {
    let uri = SERVER + url;
    if (uri.indexOf('&') > 0) {
      uri = `${uri}&_r=${new Date().valueOf()}`;
    } else {
      uri = `${uri}?_r=${new Date().valueOf()}`;
    }
    const request = {
      headers: {
        Seq: HttpUtils._seq += 1,
      },
    };
    const response = await httpClient.get(uri, request);
    return HttpUtils._processResponse(response);
  }

  static async put(url, body) {
    const uri = SERVER + url;
    const request = HttpUtils._createRequest(body);
    const response = await httpClient.put(uri, request);
    return HttpUtils._processResponse(response);
  }

  static async delete(url, body) {
    const uri = SERVER + url;
    const request = HttpUtils._createRequest(body);
    const response = await httpClient.delete(uri, request);
    return HttpUtils._processResponse(response);
  }

  static async patch(url, body) {
    const uri = SERVER + url;
    const request = HttpUtils._createRequest(body);
    const response = await httpClient.patch(uri, request);
    return HttpUtils._processResponse(response);
  }

  static async upload(url, body, pcb) {
    const uri = SERVER + url;
    const request = HttpUtils._createRequest(body);
    const response = await httpClient.upload(uri, request, pcb);
    return HttpUtils._processResponse(response);
  }

  static _createRequest(body) {
    const request = {
      headers: {
        Seq: HttpUtils._seq += 1,
      },
      body,
    };
    return request;
  }

  static async _processResponse(response, isGetFullData) {
    const json = await response.json();
    const { code, message, data } = json;
    if (code === 0) {
      return isGetFullData ? json : data;
    } else {
      const err = { code, message };
      throw err;
    }
  }
}
