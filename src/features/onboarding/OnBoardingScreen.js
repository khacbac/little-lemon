import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { AppButton, AppContainer, AppInput } from "../../components";
import { AppColors, AppImages } from "../../assests";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useOnBoardingScreen } from "./useOnBoardingScreen";

export const OnBoardingScreen = () => {
  const { top } = useSafeAreaInsets();
  const { states, funcs } = useOnBoardingScreen();

  const renderLogo = () => {
    return (
      <View style={[styles.logoWrapper, { paddingTop: top }]}>
        <Image source={AppImages.logo} style={styles.logo} />
      </View>
    );
  };

  return (
    <AppContainer style={styles.container} safeArea="bottom">
      {renderLogo()}
      <View style={styles.contentWrapper}>
        <Text style={styles.title}>Let us get to know you</Text>
        <View>
          <AppInput
            label={"First Name"}
            value={states.firstName}
            onChangeText={states.setFirstName}
          />
          <AppInput
            style={styles.emailWrapper}
            label={"Email"}
            value={states.email}
            onChangeText={states.setEmail}
            inputMode={"email"}
          />
        </View>
      </View>
      <View style={styles.footer}>
        <AppButton
          text={"Next"}
          style={styles.button}
          onPress={funcs.onSubmit}
        />
      </View>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: AppColors.secondary3 },
  logoWrapper: {},
  logo: { margin: 8, alignSelf: "center" },
  contentWrapper: {
    backgroundColor: "#CBD2D9",
    flex: 1,
    paddingHorizontal: 36,
    justifyContent: "space-between",
    paddingTop: 48,
    paddingBottom: 36,
  },
  title: { fontSize: 18, alignSelf: "center", fontWeight: "500" },
  footer: {
    backgroundColor: AppColors.secondary3,
    paddingVertical: 36,
    paddingHorizontal: 24,
  },
  button: {
    alignSelf: "flex-end",
  },
  emailWrapper: { marginTop: 12 },
});
