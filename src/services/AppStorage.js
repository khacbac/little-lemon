import AsyncStorage from "@react-native-async-storage/async-storage";

export const AppStorageKeys = {
  AUTH: "AUTH",
};
export class AppStorageService {
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
}
