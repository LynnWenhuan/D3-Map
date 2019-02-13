import React from 'react';
import { Provider } from 'react-redux';
import Enzyme, { mount } from 'enzyme';
import configureMockStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-15';
import User from '../src/components/User/users';
// shallow, render,
Enzyme.configure({ adapter: new Adapter() });

const { JSDOM } = require('jsdom');

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

function copyProps(src, target) {
  const props = Object.getOwnPropertyNames(src)
    .filter(prop => typeof target[prop] === 'undefined')
    .reduce((result, prop) => ({
      ...result,
      [prop]: Object.getOwnPropertyDescriptor(src, prop),
    }), {});
  Object.defineProperties(target, props);
}

global.window = window;

global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
copyProps(window, global);

// eslint-disable-next-line
it('Email正确的时候登录', () => {
  const mockStore = configureMockStore();
  const store = mockStore({
    user: {
      account: 'huxiaozhong@163.com',
    },
    loading: {
      models: {
        user: { },
      },
    },
  });

  const props = {
    // eslint-disable-next-line
    onLogin: jest.fn(),
  };
  const wrapper = mount(<Provider store={store}><User {...props} /></Provider>);
  wrapper.find('button').first().simulate('submit');
  // eslint-disable-next-line
  expect(props.onLogin).toBeCalled();
});

// eslint-disable-next-line
it('Email错误的时候登录', () => {
  const mockStore = configureMockStore();
  const store = mockStore({
    user: {
      account: 'huxiaozhong',
    },
    loading: {
      models: {
        user: { },
      },
    },
  });

  const props = {
    // eslint-disable-next-line
    onLogin: jest.fn(),
  };
  const wrapper = mount(<Provider store={store}><User {...props} /></Provider>);
  wrapper.find('button').first().simulate('submit');
  // eslint-disable-next-line
  expect(props.onLogin).not.toBeCalled();
});

