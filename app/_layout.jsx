import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/hooks/useColorScheme";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {

  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/RobotoFlex-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <>
      <StatusBar />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0a7ea4',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name="index" options={{
          headerShown: false,

        }} />

        <Stack.Screen name="menu" options={{
          headerTitle: "Menu",
          headerLeft: () => <></>
        }} />

        <Stack.Screen
          name="[details]"
          options={{
            headerTitle: `Détails sur `,
            headerLeft: () => <></>
          }} />
      </Stack>


    </>
  );
}