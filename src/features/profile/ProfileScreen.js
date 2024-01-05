import React from "react";
import { StyleSheet, Text, View, ScrollView, Image } from "react-native";
import { AppButton, AppContainer, AppInput } from "../../components";
import { useAppStore } from "../../states";
import { AppColors, AppImages } from "../../assests";

export const ProfileScreen = () => {
  const { auth, user } = useAppStore();
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
          />

          <AppInput
            label={"Last name"}
            lablePosition="left"
            style={{ marginTop: 8 }}
            inputStyle={{ borderWidth: 1 }}
            labelStyle={{ fontSize: 14, color: AppColors.secondary4 }}
          />

          <AppInput
            label={"Email"}
            keyboardType="email-address"
            lablePosition="left"
            style={{ marginTop: 8 }}
            inputStyle={{ borderWidth: 1 }}
            labelStyle={{ fontSize: 14, color: AppColors.secondary4 }}
          />

          <AppInput
            label={"Phone number"}
            keyboardType="phone-pad"
            lablePosition="left"
            style={{ marginTop: 8 }}
            inputStyle={{ borderWidth: 1 }}
            labelStyle={{ fontSize: 14, color: AppColors.secondary4 }}
          />
        </View>
        <AppButton
          text={"Log out"}
          style={{
            marginTop: 24,
            backgroundColor: AppColors.primary1,
            paddingVertical: 8,
          }}
          textStyle={{ color: AppColors.white }}
        />
        <View style={{ flexDirection: "row" }}>
          <AppButton
            text={"Discard changes"}
            style={{
              marginTop: 24,
              backgroundColor: AppColors.primary1,
              flex: 1,
              paddingHorizontal: 0,
              paddingVertical: 8,
              backgroundColor: AppColors.transparent,
              borderWidth: 1,
              borderColor: AppColors.secondary4,
            }}
            textStyle={{ color: AppColors.text, fontSize: 16 }}
          />
          <AppButton
            text={"Save changes"}
            style={{
              marginTop: 24,
              backgroundColor: AppColors.primary1,
              marginLeft: 16,
              flex: 1,
              paddingHorizontal: 0,
              paddingVertical: 8,
            }}
            textStyle={{ color: AppColors.white, fontSize: 16 }}
          />
        </View>
      </ScrollView>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  content: {},
});
