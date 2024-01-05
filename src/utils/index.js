import { AppImages } from "../assests";

export const validateEmail = (email) => {
  return email.match(
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
};

export const getRemoteImages = (key) => {
  switch (key) {
    case "greekSalad.jpg":
      return AppImages["greek-salad"];
    case "bruschetta.jpg":
      return AppImages["bruschetta"];
    case "grilledFish.jpg":
      return AppImages["grilled-fish"];
    case "pasta.jpg":
      return AppImages["pasta"];
    case "lemonDessert.jpg":
      return AppImages["lemon-dessert"];
    default:
      return AppImages["greek-salad"];
  }
};
