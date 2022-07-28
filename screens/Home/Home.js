import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeDrawerNavigation from "../../routes/HomeDrawerNavigation";
export default function Home() {
  return (
    <>
      {/* This import the drawer navigation for home screen */}
      <HomeDrawerNavigation />
    </>
  );
}
