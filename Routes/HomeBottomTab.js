import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Categories from "../screens/Home/Categories";
import Notifications from "../screens/Home/Notifications";
import Account from "../screens/Home/Account/Account";
import Cart from "../screens/Home/Notifications";
import HomePage from "../screens/Home/HomePage";


const Tab = createBottomTabNavigator();

export default function HomeBottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen name="HomePage" component={HomePage} />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Account" component={Account} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
}
