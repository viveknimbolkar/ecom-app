import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MyAccount from "../screens/Home/Account/MyAccount";
import Settings from "../screens/Home/Account/Settings";
import Notifications from "../screens/Home/Account/Notifications";
import Address from "../screens/Home/Account/Address";
import ReferAndEarn from "../screens/Home/Account/ReferAndEarn";
import EditMyAccount from "../screens/Home/Account/EditMyAccount";

const Stack = createNativeStackNavigator();

// stack navigator for account tab to switch between stack screens like setting referrals etc
export default function AccountTabToStack() {
  return (
    <>
      <Stack.Navigator screenOptions={{headerShown:false,}} initialRouteName="MyAccountScreen">
        <Stack.Screen name="MyAccount" component={MyAccount} />
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="Notifications" component={Notifications} />
        <Stack.Screen name="Address" component={Address} />
        <Stack.Screen name="ReferAndEarn" component={ReferAndEarn} />
        <Stack.Screen name="EditMyAccount" component={EditMyAccount} />
      </Stack.Navigator>
    </>
  );
}
