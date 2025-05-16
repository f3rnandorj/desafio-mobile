import {MMKV} from "react-native-mmkv";

import {Storage} from "../storageTypes";

const MMKVInstance = new MMKV();

export const MMKVStorage: Storage = {
  setItem: (key, value) => {
    MMKVInstance.set(key, value);
    return Promise.resolve(true);
  },
  getItem: key => {
    const value = MMKVInstance.getString(key);
    return Promise.resolve(value);
  },
  removeItem: key => {
    MMKVInstance.delete(key);
    return Promise.resolve();
  },
};
