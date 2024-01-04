import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { AppColors } from "../assests";

export const AppInput = ({
  style,
  label,
  placeholder = "",
  value,
  onChangeText,
  inputMode,
}) => {
  return (
    <View style={[styles.container, style]}>
      {!!label && <Text style={styles.label}>{label}</Text>}
      <TextInput
        placeholder={placeholder}
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        inputMode={inputMode}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  label: {
    fontSize: 16,
    alignSelf: "center",
    fontWeight: "500",
    color: AppColors.text,
  },
  input: {
    borderWidth: 2,
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginTop: 8,
    borderColor: AppColors.text,
    color: AppColors.text,
    fontSize: 16,
  },
});
