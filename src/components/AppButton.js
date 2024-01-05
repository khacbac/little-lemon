import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { AppColors } from "../assests";

export const AppButton = ({
  text,
  onPress,
  style,
  textStyle,
  disabled = false,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={disabled ? 1 : 0.7}
      style={[styles.container, style]}
      {...(!disabled && {
        onPress,
      })}
    >
      <Text style={[styles.text, textStyle, disabled && styles.disable]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: AppColors.background,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 6,
    paddingVertical: 7,
    paddingHorizontal: 36,
  },
  disable: { color: AppColors.white },
  text: {
    fontSize: 16,
  },
});
