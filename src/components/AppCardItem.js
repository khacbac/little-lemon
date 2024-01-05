import React from "react";
import { Image, Text, View } from "react-native";
import { AppImages } from "../assests";

export const AppCardItem = ({ style }) => {
  return (
    <View
      style={[
        { flexDirection: "row", alignItems: "center", paddingVertical: 12 },
        style,
      ]}
    >
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: "600", fontSize: 16 }}>Greek Salad</Text>
        <Text
          style={{
            fontWeight: "400",
            fontSize: 13,
            lineHeight: 18,
            marginTop: 8,
          }}
        >
          The famous greek salad of crispy letture, pepers, olives and our
          Chica...
        </Text>
        <Text style={{ fontWeight: "500", fontSize: 12, marginTop: 8 }}>
          $12.19
        </Text>
      </View>
      <Image
        source={AppImages.bruschetta}
        style={{ width: 60, height: 60, borderRadius: 8, marginLeft: 8 }}
      />
    </View>
  );
};
