import React, { createContext, useContext, useReducer } from "react";
import {} from "react-native";

const initialState = {
  auth: { isLoggedIn: false },
  user: null,
};
export const AppStoreContext = createContext({
  ...initialState,
  onLoggedIn: (user) => {},
  onUpdateUser: (user) => {},
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
  };

  const onUpdateUser = (user) => {
    dispatch({ type: "UPDATE", user: { ...state.user, ...user } });
  };

  return (
    <AppStoreContext.Provider value={{ ...state, onLoggedIn, onUpdateUser }}>
      {children}
    </AppStoreContext.Provider>
  );
};

export const useAppStore = () => {
  return useContext(AppStoreContext);
};
