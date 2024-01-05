import React from "react";
import { Image } from "react-native";
import { AppContainer } from "../../components";
import { AppImages } from "../../assests";

export const SplashScreen = () => {
  return (
    <AppContainer style={{ justifyContent: "center", alignItems: "center" }}>
      <Image source={AppImages.logo} />
    </AppContainer>
  );
};
