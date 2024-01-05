import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { OnBoardingScreen, ProfileScreen } from "./src/features";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppContainer } from "./src/components";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AppStoreProvider } from "./src/states";
import { AppNavigationContainer } from "./src/navigations";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <AppStoreProvider>
      <SafeAreaProvider>
        <AppContainer style={styles.container} safeArea={"none"}>
          <StatusBar style="auto" />
          <NavigationContainer>
            <AppNavigationContainer />
          </NavigationContainer>
        </AppContainer>
      </SafeAreaProvider>
    </AppStoreProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
