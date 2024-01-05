import React from "react";
import {
  Image,
  Keyboard,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { AppButton, AppCardItem, AppContainer } from "../../components";
import { AppColors, AppImages } from "../../assests";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useHomeScreen } from "./useHomeScreen";

const FILTER_TEXTS = [
  { text: "Starters", key: "starters" },
  { text: "Mains", key: "mains" },
  { text: "Desserts", key: "desserts" },
  { text: "Sides", key: "sides" },
];

export const HomeScreen = () => {
  const { top } = useSafeAreaInsets();
  const { funcs, states } = useHomeScreen();

  const renderHeader = () => {
    return (
      <View style={[styles.headerWrapper, { paddingTop: top }]}>
        <View style={styles.headerContent}>
          <Image source={AppImages.logo} />
          <Pressable style={styles.profileWrapper} onPress={funcs.gotoProfile}>
            <Image source={AppImages.profile} style={styles.profile} />
          </Pressable>
        </View>
      </View>
    );
  };

  const renderTopView = () => {
    return (
      <View style={styles.topView}>
        <View style={styles.topViewWrapper}>
          <View style={styles.topViewLeftWrapper}>
            <Text style={styles.topTitle}>Little lemon</Text>
            <Text style={styles.topSubTitle}>Chicago</Text>
            <Text style={styles.topDescription}>
              We are a family owned Mediterranean restaurant, focused on
              traditional recipes served with a modern twist.
            </Text>
          </View>
          <Image
            source={AppImages["hero-image"]}
            style={{ width: 120, height: 150, borderRadius: 16 }}
          />
        </View>
        <TextInput
          style={styles.input}
          value={states.search}
          onChangeText={states.setSearch}
        />
      </View>
    );
  };

  const renderFilter = () => {
    return (
      <>
        <View style={{ paddingHorizontal: 16, paddingVertical: 16 }}>
          <Text style={{ fontSize: 16, fontWeight: "500" }}>
            Order for Delivery
          </Text>
          <View
            style={{
              flexDirection: "row",
              marginTop: 24,
              justifyContent: "space-between",
            }}
          >
            {FILTER_TEXTS.map((val, i) => {
              const isSelected = states.filters.some((e) => e.key === val.key);
              return (
                <AppButton
                  text={val.text}
                  key={val.key}
                  style={{
                    paddingHorizontal: 8,
                    paddingVertical: 4,
                    backgroundColor: isSelected
                      ? AppColors.primary1
                      : AppColors.secondary3,
                    flex: 1,
                    marginLeft: i === 0 ? 0 : 6,
                  }}
                  textStyle={{
                    color: isSelected ? AppColors.white : AppColors.text,
                  }}
                  onPress={() => {
                    if (isSelected) {
                      states.setFilters((prev) =>
                        prev.filter((e) => e.key !== val.key)
                      );
                      return;
                    }
                    states.setFilters((prev) => [...prev, val]);
                  }}
                />
              );
            })}
          </View>
        </View>
        <View
          style={{
            height: 1,
            width: "100%",
            backgroundColor: AppColors.secondary3,
          }}
        />
      </>
    );
  };

  return (
    <AppContainer safeArea="bottom">
      {renderHeader()}
      <ScrollView
        showsVerticalScrollIndicator={false}
        onScrollBeginDrag={Keyboard.dismiss}
      >
        {renderTopView()}
        {renderFilter()}
        {states.displayMenus.map((menu) => {
          return (
            <AppCardItem
              key={menu.name}
              style={{ paddingHorizontal: 16 }}
              menu={menu}
            />
          );
        })}
      </ScrollView>
    </AppContainer>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {},
  headerContent: {
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  profileWrapper: { position: "absolute", right: 16 },
  profile: { width: 48, height: 48 },
  topView: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    backgroundColor: AppColors.primary1,
  },
  topViewWrapper: {
    flexDirection: "row",
  },
  topViewLeftWrapper: { flex: 1, marginRight: 8 },
  topTitle: {
    color: AppColors.primary2,
    fontSize: 20,
    fontWeight: "500",
    marginTop: 4,
  },
  topSubTitle: {
    color: AppColors.white,
    fontSize: 16,
    fontWeight: "500",
    marginTop: 2,
  },
  topDescription: {
    color: AppColors.white,
    fontSize: 12,
    fontWeight: "400",
    marginTop: 8,
  },
  input: {
    borderWidth: 1,
    marginTop: 24,
    borderRadius: 4,
    paddingVertical: 2,
    backgroundColor: AppColors.white,
    paddingHorizontal: 16,
    color: AppColors.text,
  },
});
