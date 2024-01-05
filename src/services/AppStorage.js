import AsyncStorage from "@react-native-async-storage/async-storage";

export const AppStorageKeys = {
  AUTH: "AUTH",
  USER: "USER",
};
export class AppStorageService {
  static removeData = async (key) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (e) {
      // saving error
    }
  };

  static storeData = async (key, value) => {
    try {
      await AsyncStorage.setItem(key, value);
    } catch (e) {
      // saving error
    }
  };

  static getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      }
      return null;
    } catch (e) {
      // error reading value
      return null;
    }
  };

  static getDatas = async (keys = []) => {
    try {
      const values = await AsyncStorage.multiGet(keys);
      if (values) {
        return values.map((e) => {
          if (e[1]) {
            return [e[0], JSON.parse(e[1])];
          }
          return e;
        });
      }
      return null;
    } catch (e) {
      // error reading value
      return null;
    }
  };
}
