import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Categories from "../screens/Home/Categories";
import Notifications from "../screens/Home/Notifications";
import Account from "../screens/Home/Account/Account";
import Cart from "../screens/Home/Notifications";
import HomePage from "../screens/Home/HomePage";

import Ionicons from "react-native-vector-icons/Ionicons";

const Tab = createBottomTabNavigator();

export default function HomeBottomTab() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          {
            /* conflict may be happen because of the same route name as Home */
          }
          if (route.name === "Home") {
            iconName = focused ? "home-sharp" : "home-outline";
          } else if (route.name === "Categories") {
            iconName = focused ? "list-sharp" : "list-outline";
          } else if (route.name === "Notifications") {
            iconName = focused
              ? "notifications-circle"
              : "notifications-circle-outline";
          } else if (route.name === "Account") {
            iconName = focused ? "person-outline" : "person-sharp";
          } else if (route.name === "Cart") {
            iconName = focused ? "cart" : "cart-outline";
          }

          // You can return any component that you like here!
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor:"#EB4511"
      })}
    >
      <Tab.Screen name="Home" component={HomePage} />
      <Tab.Screen name="Categories" component={Categories} />
      <Tab.Screen name="Notifications" component={Notifications} />
      <Tab.Screen name="Account" component={Account} />
      <Tab.Screen name="Cart" component={Cart} />
    </Tab.Navigator>
  );
}
