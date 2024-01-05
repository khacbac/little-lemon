import { useState } from "react";
import { useAppStore } from "../../states";
import { useNavigation } from "@react-navigation/native";

export const useProfileScreen = () => {
  const navigation = useNavigation();
  const { onLoggedOut, user, onUpdateUser } = useAppStore();
  const [firstName, setFirstName] = useState(user.firstName);
  const [lastName, setLastName] = useState(user.lastName);
  const [email, setEmail] = useState(user.email);
  const [phone, setPhone] = useState(user.phone);

  const handleLogout = () => {
    onLoggedOut();
  };

  const onSubmit = () => {
    onUpdateUser({ firstName, lastName, phone, email });
    navigation.goBack();
  };

  return {
    funcs: { handleLogout, onSubmit },
    states: {
      firstName,
      setFirstName,
      lastName,
      setLastName,
      email,
      setEmail,
      phone,
      setPhone,
    },
  };
};
