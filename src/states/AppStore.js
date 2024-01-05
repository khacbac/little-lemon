import React, { createContext, useContext, useReducer } from "react";
import {} from "react-native";
import { AppStorageKeys, AppStorageService } from "../services/AppStorage";

const initialState = {
  auth: { isLoggedIn: false },
  user: null,
};
export const AppStoreContext = createContext({
  ...initialState,
  onLoggedIn: (user) => {},
  onUpdateUser: (user) => {},
  onLoggedOut: () => {},
});

function reducer(state, action) {
  const { type, ...payload } = action || {};
  switch (action.type) {
    case "UPDATE":
      return { ...state, ...payload };
    default:
      return state;
  }
}

export const AppStoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const onLoggedIn = (user) => {
    dispatch({ type: "UPDATE", user, auth: { isLoggedIn: true } });
    AppStorageService.storeData(
      AppStorageKeys.AUTH,
      JSON.stringify({ isLoggedIn: true })
    );
    AppStorageService.storeData(AppStorageKeys.USER, JSON.stringify(user));
  };

  const onLoggedOut = () => {
    dispatch({ type: "UPDATE", user: null, auth: { isLoggedIn: false } });
    AppStorageService.removeData(AppStorageKeys.AUTH);
    AppStorageService.removeData(AppStorageKeys.USER);
  };

  const onUpdateUser = (user) => {
    dispatch({ type: "UPDATE", user: { ...state.user, ...user } });
  };

  return (
    <AppStoreContext.Provider
      value={{ ...state, onLoggedIn, onUpdateUser, onLoggedOut }}
    >
      {children}
    </AppStoreContext.Provider>
  );
};

export const useAppStore = () => {
  return useContext(AppStoreContext);
};
