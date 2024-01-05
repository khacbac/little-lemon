import { useNavigation } from "@react-navigation/native";

export const useHomeScreen = () => {
  const navigation = useNavigation();

  const gotoProfile = () => {
    navigation.navigate("Profile");
  };

  return { funcs: { gotoProfile } };
};
