import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { OnBoardingScreen, ProfileScreen } from "./src/features";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppContainer } from "./src/components";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <AppContainer style={styles.container} safeArea={"none"}>
          <StatusBar style="auto" />
          <Stack.Navigator>
            <Stack.Screen
              name="Onboarding"
              component={OnBoardingScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Profile" component={ProfileScreen} />
          </Stack.Navigator>
        </AppContainer>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
