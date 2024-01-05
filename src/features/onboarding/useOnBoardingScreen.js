import { StackActions, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { validateEmail } from "../../utils";
import { AppStorageKeys, AppStorageService } from "../../services/AppStorage";
import { useAppStore } from "../../states/AppStore";

export const useOnBoardingScreen = () => {
  const navigation = useNavigation();
  const { onLoggedIn } = useAppStore();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const isValidEmail = () => {
    return email && validateEmail(email);
  };

  const isValidForm = () => {
    return !!firstName && isValidEmail();
  };

  const onSubmit = () => {
    if (!isValidEmail()) {
      return;
    }
    onLoggedIn({ firstName, email });
    AppStorageService.storeData(
      AppStorageKeys.AUTH,
      JSON.stringify({ isLoggedIn: true })
    );
    AppStorageService.storeData(
      AppStorageKeys.USER,
      JSON.stringify({ firstName, email })
    );
  };

  return {
    states: { firstName, setFirstName, email, setEmail },
    funcs: { onSubmit, isValidForm, isValidEmail },
  };
};
