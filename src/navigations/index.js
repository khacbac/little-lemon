import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OnBoardingScreen, ProfileScreen } from "../features";
import { useAppStore } from "../states";
import { useEffect, useState } from "react";
import { AppStorageKeys, AppStorageService } from "../services/AppStorage";
import { SplashScreen } from "../features/splash";

const Stack = createNativeStackNavigator();

export const AppNavigationContainer = () => {
  const { auth, onUpdateUser, onLoggedIn } = useAppStore();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    AppStorageService.getData(AppStorageKeys.AUTH).then((data) => {
      setTimeout(() => {
        if (!data) {
          setIsLoading(false);
          return;
        }
        if (data.isLoggedIn) {
          AppStorageService.getData(AppStorageKeys.USER).then((user) => {
            setIsLoading(false);
            if (!user) {
              return;
            }
            onLoggedIn(user);
          });
          return;
        }
        setIsLoading(false);
      }, 1000);
    });
  }, []);

  if (isLoading) {
    return <SplashScreen />;
  }

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
