import { SplashScreen, Stack } from "expo-router";
import '@/global.css';
import { useFonts } from 'expo-font';
import { useEffect } from "react";

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    PlusJakartaSansRegular: require('../assets/fonts/PlusJakartaSans-Regular.ttf'),
    PlusJakartaSansBold: require('../assets/fonts/PlusJakartaSans-Bold.ttf'),
    PlusJakartaSansSemiBold: require('../assets/fonts/PlusJakartaSans-SemiBold.ttf'),
    PlusJakartaSansMedium: require('../assets/fonts/PlusJakartaSans-Medium.ttf'),
    PlusJakartaSansExtraBold: require('../assets/fonts/PlusJakartaSans-ExtraBold.ttf'),
    PlusJakartaSansLight: require('../assets/fonts/PlusJakartaSans-Light.ttf'),
  });

  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync();
    }
  },[fontsLoaded])

  if (!fontsLoaded)  return null;
  return <Stack initialRouteName="(tabs)" />;
}
