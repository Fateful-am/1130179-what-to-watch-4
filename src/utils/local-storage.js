import {extend} from './helpers';

const ItemsType = {
  AUTH_STATUS: `authStatus`,
  LAST_URL: `lastUrl`,
};

export default class LocalStorage {
  constructor(key, storage) {
    this._storage = storage;
    this._storeKey = key;
  }

  _getItems() {
    try {
      return JSON.parse(this._storage.getItem(this._storeKey)) || {};
    } catch (err) {
      return {};
    }
  }

  _getItem(item) {
    const store = this._getItems();
    return store[item];
  }

  _setItem(item, value) {
    const store = this._getItems();
    this._storage.setItem(
        this._storeKey,
        JSON.stringify(extend(store, {
          [item]: value,
        }))
    );
  }

  getAuthStatus() {
    return this._getItem(ItemsType.AUTH_STATUS);
  }

  setAuthStatus(authStatus) {
    this._setItem(ItemsType.AUTH_STATUS, authStatus);
  }

  getLastUrl() {
    return this._getItem(ItemsType.LAST_URL) || `/`;
  }

  setLastUrl(url) {
    this._setItem(ItemsType.LAST_URL, url);
  }
}
