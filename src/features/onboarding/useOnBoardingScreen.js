import { useNavigation } from "@react-navigation/native";
import { useState } from "react";

export const useOnBoardingScreen = () => {
  const navigation = useNavigation();
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");

  const onSubmit = () => {
    navigation.navigate("Profile");
  };

  return {
    states: { firstName, setFirstName, email, setEmail },
    funcs: { onSubmit },
  };
};
