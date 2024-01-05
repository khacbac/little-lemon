import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { AppContainer, AppInput } from "../../components";

export const ProfileScreen = () => {
  return (
    <AppContainer>
      <Text>Personal information</Text>
      <View></View>
      <AppInput label={"First name"} lablePosition="left" />
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  content: {},
});
