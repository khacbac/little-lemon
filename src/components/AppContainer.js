import React from "react";
import { StyleSheet, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { AppColors } from "../assests";

export const AppContainer = ({ children, style, safeArea = "all" }) => {
  const { bottom, top } = useSafeAreaInsets();

  const safeAreaStyle = {
    ...((safeArea === "all" || safeArea === "top") && { paddingTop: top }),
    ...((safeArea === "all" || safeArea === "bottom") && {
      paddingBottom: bottom,
    }),
  };

  return (
    <View style={[styles.container, safeAreaStyle, style]}>{children}</View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: AppColors.white },
});
