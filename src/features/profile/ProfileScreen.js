import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { AppContainer, AppInput } from "../../components";
import { useAppStore } from "../../states";

export const ProfileScreen = () => {
  const { auth, user } = useAppStore();
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
