import React from "react";
import { Image, Text, View } from "react-native";
import { AppImages } from "../assests";
import { getRemoteImages } from "../utils";

export const AppCardItem = ({ style, menu }) => {
  return (
    <View
      style={[
        { flexDirection: "row", alignItems: "center", paddingVertical: 12 },
        style,
      ]}
    >
      <View style={{ flex: 1 }}>
        <Text style={{ fontWeight: "600", fontSize: 16 }}>{menu.name}</Text>
        <Text
          style={{
            fontWeight: "400",
            fontSize: 13,
            lineHeight: 18,
            marginTop: 8,
          }}
          numberOfLines={2}
        >
          {menu.description}
        </Text>
        <Text style={{ fontWeight: "500", fontSize: 12, marginTop: 8 }}>
          {`$${menu.price}`}
        </Text>
      </View>
      <Image
        source={getRemoteImages(menu.image)}
        style={{ width: 60, height: 60, borderRadius: 8, marginLeft: 8 }}
      />
    </View>
  );
};
