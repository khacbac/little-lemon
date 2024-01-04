import { StackActions, useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { validateEmail } from "../../utils";
import { AppStorageKeys, AppStorageService } from "../../services/AppStorage";

export const useOnBoardingScreen = () => {
  const navigation = useNavigation();
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
    navigation.dispatch(StackActions.replace("Profile"));
    AppStorageService.storeData(
      AppStorageKeys.AUTH,
      JSON.stringify({ isOnboardingCompleted: true })
    );
  };

  return {
    states: { firstName, setFirstName, email, setEmail },
    funcs: { onSubmit, isValidForm, isValidEmail },
  };
};
