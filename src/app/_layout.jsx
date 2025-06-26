import { useFonts } from "expo-font";
import { SplashScreen } from "expo-router";
import { Drawer } from "expo-router/drawer";
import { useEffect } from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function Layout() {
  const [loaded] = useFonts({
    UnboundedExtraLight: require("../assets/fonts/Unbounded-ExtraLight.ttf"),
    UnboundedLight: require("../assets/fonts/Unbounded-Light.ttf"),
    UnboundedRegular: require("../assets/fonts/Unbounded-Regular.ttf"),
    UnboundedBold: require("../assets/fonts/Unbounded-Bold.ttf"),
    UnboundedBlack: require("../assets/fonts/Unbounded-Black.ttf"),
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
    <GestureHandlerRootView style={{ flex: 1, backgroundColor: "#021123" }}>
      <Drawer
        screenOptions={{
          headerStyle: {
            backgroundColor: "#021123",
            borderBottomWidth: 0,
          },
          headerTintColor: "#fff",
          headerTitleStyle: {
            fontFamily: "UnboundedRegular",
          },
          drawerActiveBackgroundColor: "#144480",
          drawerStyle: { backgroundColor: "#021123" },
          drawerLabelStyle: { color: "#fff", fontFamily: "UnboundedRegular" },
        }}
      >
        <Drawer.Screen
          name="index"
          options={{
            headerShown: false,
            drawerLabel: "Home",
            title: "Home",
            drawerItemStyle: { display: "none" },
          }}
        />
        <Drawer.Screen
          name="pomodoro/index"
          options={{
            drawerLabel: "Timer",
            title: "",
          }}
        />
        <Drawer.Screen
          name="tasks/index"
          options={{
            drawerLabel: "Lista de Tarefas",
            title: "",
          }}
        />
        <Drawer.Screen
          name="tasks-add/index"
          options={{
            drawerLabel: "New Task",
            title: "New Task",
            drawerItemStyle: { display: "none" },
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
