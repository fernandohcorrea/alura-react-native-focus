import { useFonts } from "expo-font";
import { Stack } from "expo-router";

export default function Layout() {
  const [loaded] = useFonts({
    UnboundedExtraLight: require("../assets/fonts/Unbounded-ExtraLight.ttf"),
    UnboundedLight: require("../assets/fonts/Unbounded-Light.ttf"),
    UnboundedRegular: require("../assets/fonts/Unbounded-Regular.ttf"),
    UnboundedBold: require("../assets/fonts/Unbounded-Bold.ttf"),
    UnboundedBlack: require("../assets/fonts/Unbounded-Black.ttf"),
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="pomodoro/index" options={{ headerShown: false }} />
    </Stack>
  );
}
