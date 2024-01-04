import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { AppColors } from "../assests";

export const AppButton = ({ text, onPress, style }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={[styles.container, style]}
      onPress={onPress}
    >
      <Text style={styles.text}>{text}</Text>
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
  text: {
    fontSize: 16,
  },
});
