import { jsdom } from 'jsdom';
import chai from 'chai';
import dirtyChai from 'dirty-chai';
import sinonChai from 'sinon-chai';
import chaiEnzyme from 'chai-enzyme';

chai.use(dirtyChai);
chai.use(sinonChai);
chai.use(chaiEnzyme());

global.document = jsdom('<!doctype html><html><body></body></html>', {
  url: 'http://localhost',
});
global.window = document.defaultView;
global.navigator = global.window.navigator;
window.localStorage = window.sessionStorage = {
  getItem(key) {
    return this[key];
  },
  setItem(key, value) {
    this[key] = value;
  },
  removeItem(key) {
    this[key] = undefined;
  },
};
