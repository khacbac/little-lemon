import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { AppColors } from "../assests";

export const AppInput = ({
  style,
  inputStyle,
  labelStyle,
  label,
  placeholder = "",
  value,
  onChangeText,
  inputMode,
  isError = false,
  lablePosition = "center",
  keyboardType,
}) => {
  return (
    <View style={[styles.container, style]}>
      {!!label && (
        <Text
          style={[
            styles.label,
            { alignSelf: lablePosition === "left" ? "flex-start" : "center" },
            labelStyle,
            isError && styles.labelError,
          ]}
        >
          {label}
        </Text>
      )}
      <TextInput
        placeholder={placeholder}
        style={[styles.input, inputStyle, isError && styles.error]}
        value={value}
        onChangeText={onChangeText}
        inputMode={inputMode}
        keyboardType={keyboardType}
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
  error: {
    borderColor: "red",
  },
  labelError: {
    color: "red",
  },
});
