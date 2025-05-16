import {MMKV} from "react-native-mmkv";

import {Storage} from "../storage";

const MMKVInstance = new MMKV();

export const MMKVStorage: Storage = {
  getItem: key => {
    const item = MMKVInstance.getString(key);
    if (item) {
      return JSON.parse(item);
    }
    return null;
  },
  setItem: async (key, value) => {
    MMKVInstance.set(key, JSON.stringify(value));
  },
  removeItem: async key => MMKVInstance.delete(key),
};

export const zustandMMKVStorage = {
  getItem: (key: string): string | null => {
    return MMKVInstance.getString(key) ?? null;
  },
  setItem: (key: string, value: string): void => {
    MMKVInstance.set(key, value);
  },
  removeItem: (key: string): void => {
    MMKVInstance.delete(key);
  },
};
