import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnBoardingScreen, ProfileScreen } from "../features";
import { useAppStore } from "../states";

const Stack = createNativeStackNavigator();

export const AppNavigationContainer = () => {
  const { auth } = useAppStore();
  return (
    <Stack.Navigator>
      {!auth?.isLoggedIn && (
        <Stack.Screen
          name="Onboarding"
          component={OnBoardingScreen}
          options={{ headerShown: false }}
        />
      )}
      {auth?.isLoggedIn && (
        <Stack.Screen name="Profile" component={ProfileScreen} options={{}} />
      )}
    </Stack.Navigator>
  );
};
