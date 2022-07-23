import HomeBottomTab from "../../Routes/HomeBottomTab";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();
export default function Home() {
  return (
    <>
      <Drawer.Navigator
        screenOptions={{
          drawerType: "front",
          headerShown: false,
        }}
      >
        <Drawer.Screen name="HomeBottomTab" component={HomeBottomTab} />
      </Drawer.Navigator>
    </>
  );
}
