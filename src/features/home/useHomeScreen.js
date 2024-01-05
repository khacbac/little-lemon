import { useNavigation } from "@react-navigation/native";
import { useCallback, useEffect, useState } from "react";
import { getHomeData } from "../../apis";
import { useUpdateEffect } from "../../hooks";

export const useHomeScreen = () => {
  const navigation = useNavigation();
  const [menus, setMenu] = useState([]);
  const [filters, setFilters] = useState([]);
  const [search, setSearch] = useState("");
  const [displayMenus, setDisplayMenus] = useState([]);

  useEffect(() => {
    getHomeData().then((data) => {
      setMenu(data);
      setDisplayMenus(data);
    });
  }, []);

  useUpdateEffect(() => {
    let data = menus;
    if (search) {
      data = data.filter((menu) => {
        return menu.name.toLowerCase().includes(search.toLowerCase());
      });
    }
    if (filters.length) {
      data = data.filter((menu) => {
        return filters.some((filter) => filter.key === menu.category);
      });
    }
    setDisplayMenus(data);
  }, [filters, search]);

  const gotoProfile = () => {
    navigation.navigate("Profile");
  };

  return {
    funcs: { gotoProfile },
    states: { menus, displayMenus, filters, setFilters, setSearch, search },
  };
};
