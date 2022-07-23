import {Text} from "react-native";
import HomeBottomTab from "./HomeBottomTab";
import { createDrawerNavigator } from "@react-navigation/drawer";

const Drawer = createDrawerNavigator();

export default function Home() {
  return (
    <>
      <Drawer.Navigator
        // Use this to customize drawer -  https://www.youtube.com/watch?v=l8nY4Alk70Q  
        screenOptions={{
          drawerType: "front",
          headerShown: false,
        }}
    
      >
        {/* conflict may be happen because of the same route name as Home */}
        <Drawer.Screen name="Home " component={HomeBottomTab} /> 
      </Drawer.Navigator>
    </>
  );
}
