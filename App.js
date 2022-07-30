import "react-native-gesture-handler";
import React from "react";
import { enableScreens } from "react-native-screens";
import Welcome1 from "./screens/welcome/Welcome1";
import Welcome2 from "./screens/welcome/Welcome2";
import Welcome3 from "./screens/welcome/Welcome3";
import Welcome4 from "./screens/welcome/Welcome4";
import Login from "./screens/Auth/Login";
import Signup from "./screens/Auth/Signup";
import SelectEmail from "./screens/forgetpassword/SelectEmail";
import OTP from "./screens/forgetpassword/OTP";
import ChangePassword from "./screens/forgetpassword/ChangePassword";
import Home from "./screens/Home/Home";
import Search from "./screens/Home/Search";
import About from "./screens/Home/Company/About";

enableScreens();

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
            animation: "slide_from_right",
          }}
        >
          <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Search" component={Search} />
          <Stack.Screen name="Welcome1" component={Welcome1} />
          <Stack.Screen name="Welcome2" component={Welcome2} />
          <Stack.Screen name="Welcome3" component={Welcome3} />
          <Stack.Screen name="Welcome4" component={Welcome4} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="SelectEmail" component={SelectEmail} />
          <Stack.Screen name="OTP" component={OTP} />
          <Stack.Screen name="ChangePassword" component={ChangePassword} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
