import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { validateEmail } from "../../utils";

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
    navigation.navigate("Profile");
  };

  return {
    states: { firstName, setFirstName, email, setEmail },
    funcs: { onSubmit, isValidForm, isValidEmail },
  };
};
