import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { AppButton, AppContainer, AppInput } from "../../components";
import { useAppStore } from "../../states";
import { AppColors, AppImages } from "../../assests";
import { useProfileScreen } from "./useProfileScreen";

export const ProfileScreen = () => {
  const { funcs, states } = useProfileScreen();
  return (
    <AppContainer style={{ paddingHorizontal: 16 }}>
      <ScrollView>
        <Text style={{ fontSize: 18, fontWeight: "600" }}>
          Personal information
        </Text>
        <Image
          source={AppImages.profile}
          style={{ width: 120, height: 120, marginTop: 8 }}
        />
        <View style={{ marginTop: 16 }}>
          <AppInput
            label={"First name"}
            lablePosition="left"
            inputStyle={{ borderWidth: 1 }}
            labelStyle={{ fontSize: 14, color: AppColors.secondary4 }}
            value={states.firstName}
            onChangeText={states.setFirstName}
            isError={!states.firstName}
          />

          <AppInput
            label={"Last name"}
            lablePosition="left"
            style={{ marginTop: 8 }}
            inputStyle={{ borderWidth: 1 }}
            labelStyle={{ fontSize: 14, color: AppColors.secondary4 }}
            value={states.lastName}
            onChangeText={states.setLastName}
          />

          <AppInput
            label={"Email"}
            keyboardType="email-address"
            lablePosition="left"
            style={{ marginTop: 8 }}
            inputStyle={{ borderWidth: 1 }}
            labelStyle={{ fontSize: 14, color: AppColors.secondary4 }}
            value={states.email}
            onChangeText={states.setEmail}
            isError={!states.email}
          />

          <AppInput
            label={"Phone number"}
            keyboardType="phone-pad"
            lablePosition="left"
            style={{ marginTop: 8 }}
            inputStyle={{ borderWidth: 1 }}
            labelStyle={{ fontSize: 14, color: AppColors.secondary4 }}
            value={states.phone}
            onChangeText={states.setPhone}
          />
        </View>
        <AppButton
          text={"Save changes"}
          style={{
            marginTop: 24,
            backgroundColor: AppColors.primary1,
            flex: 1,
            paddingHorizontal: 0,
            paddingVertical: 8,
          }}
          textStyle={{ color: AppColors.white, fontSize: 16 }}
          onPress={funcs.onSubmit}
        />
        <AppButton
          text={"Log out"}
          style={{
            marginTop: 24,
            borderColor: AppColors.primary1,
            backgroundColor: AppColors.transparent,
            paddingVertical: 8,
            borderWidth: 1,
          }}
          textStyle={{ color: AppColors.text }}
          onPress={funcs.handleLogout}
          disabled={!states.email || !states.firstName}
        />
      </ScrollView>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  content: {},
});
