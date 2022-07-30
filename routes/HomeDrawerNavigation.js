import { StatusBar } from "react-native";
import HomeBottomTab from "./HomeBottomTab";
import { createDrawerNavigator } from "@react-navigation/drawer";
import About from "../screens/Home/Company/About";

const Drawer = createDrawerNavigator();

export default function Home() {
  return (
    <>
      <StatusBar animated={true} backgroundColor="#EB4511" />
      <Drawer.Navigator
        // Use this to customize drawer -  https://www.youtube.com/watch?v=l8nY4Alk70Q
        screenOptions={{
          drawerType: "front",
          headerShown: false,
          drawerActiveTintColor: "#EB4511",
        }}
      >
        {/* conflict may be happen because of the same route name as Home */}
        <Drawer.Screen name="Home " component={HomeBottomTab} />
        <Drawer.Screen name="About " component={About} />
      </Drawer.Navigator>
    </>
  );
}
