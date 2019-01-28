import localForage from 'localforage';

export default class CacheManager {
  writeData = (key, value) => localForage.setItem(key, value);
  readData = (key) => localForage.getItem(key);
  removeData = (key) => localForage.removeItem(key);
  clear = () => localForage.clear();
}
