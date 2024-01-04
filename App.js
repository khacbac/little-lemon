import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { OnBoardingScreen } from "./src/features";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { AppContainer } from "./src/components";

export default function App() {
  return (
    <SafeAreaProvider>
      <AppContainer style={styles.container} safeArea={"none"}>
        <StatusBar style="auto" />
        <OnBoardingScreen />
      </AppContainer>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});
