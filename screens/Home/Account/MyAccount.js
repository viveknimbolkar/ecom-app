import { StyleSheet, View, Dimensions, Text, ScrollView } from "react-native";
import { Avatar, List } from "react-native-paper";
import Ionicons from "react-native-vector-icons/Ionicons";

export default function MyAccount({ navigation }) {
  return (
    <>
      <View style={styles.maincontainer}>
        <ScrollView>
          <View style={styles.profileContainer}>
            <Avatar.Image
              size={100}
              source={{
                uri: "https://images.unsplash.com/photo-1566753323558-f4e0952af115",
              }}
            />
            <Text
              style={[styles.userText, { marginTop: 10, fontWeight: "800" }]}
            >
              Vivek Nimbolkar
            </Text>
            <Text style={[styles.userText, { fontSize: 16 }]}>
              viveknimbolkar@gmail.com
            </Text>
          </View>
          <View style={styles.profileOptionContainer}>
            <View style={styles.profileOption}>
              <Ionicons name={"list"} size={25} color={"gray"} />
              <Text style={styles.profileOptionName}>My Orders</Text>
            </View>
            <View style={styles.profileOption}>
              <Ionicons name={"clipboard-outline"} size={25} color={"gray"} />
              <Text style={styles.profileOptionName}>Wishlist</Text>
            </View>
            <View
              onTouchStart={() => {
                navigation.navigate("Notifications");
              }}
              style={styles.profileOption}
            >
              <Ionicons
                name={"notifications-outline"}
                size={25}
                color={"gray"}
              />
              <Text style={styles.profileOptionName}>Notifications</Text>
            </View>
          </View>
          <View style={styles.menuContainer}>
            <List.Item
              onPress={() => {
                navigation.navigate("EditMyAccount");
              }}
              title="Edit My Account"
              left={(props) => <List.Icon icon="account" />}
            />
            <List.Item
               onPress={() => {
                navigation.navigate("ReferAndEarn");
              }}
              title="Refer and Earn"
              left={(props) => <List.Icon icon="account-cash" />}
            />
            <List.Item
               onPress={() => {
                navigation.navigate("Address");
              }}
              title="My Addresses"
              left={(props) => <List.Icon icon="home" />}
            />
            <List.Item
              onPress={() => {
                navigation.navigate("Settings");
              }}
              title="Settings"
              left={(props) => <List.Icon icon="cog" />}
            />
            <List.Item
              title="Logout of all devices"
              left={(props) => <List.Icon icon="cellphone-link-off" />}
            />
            <List.Item
              title="Logout"
              left={(props) => <List.Icon icon="cellphone-lock" />}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    width: Dimensions.get("window").width,
  },

  profileContainer: {
    backgroundColor: "#EB4511",
    alignItems: "center",
    padding: 20,
    height: 250,
  },
  userText: { fontSize: 18, color: "white" },
  profileOptionContainer: {
    backgroundColor: "white",
    position: "relative",
    top: -50,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 4,
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  profileOption: {
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  profileOptionName: {
    fontSize: 14,
  },
  menuContainer: {
    marginTop: -20,
    margin: 20,
    backgroundColor: "white",
    borderRadius: 4,
  },
});
