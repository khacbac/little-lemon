import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { getHomeData } from "../../apis";

export const useHomeScreen = () => {
  const navigation = useNavigation();
  const [menus, setMenu] = useState([]);

  useEffect(() => {
    getHomeData().then((data) => {
      setMenu(data);
    });
  }, []);

  const gotoProfile = () => {
    navigation.navigate("Profile");
  };

  return { funcs: { gotoProfile }, states: { menus } };
};
