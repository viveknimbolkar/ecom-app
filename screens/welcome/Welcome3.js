import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

const properties = require("../../properties.json");
import Entypo from "react-native-vector-icons/Entypo";
export default function Welcome3({ navigation }) {
  return (
    <>
      <View style={styles.cotainer}>
        <View style={styles.card}>
          <Image
            style={styles.img}
            source={{
              uri: "https://img.freepik.com/free-vector/customer-woman-shopping-with-barrow-concept_40876-2550.jpg",
            }}
          />
          <View style={styles.body}>
            <Text style={styles.cardhead}>Shopping Cart</Text>
            <Text style={styles.carddesc}>
              Save your product in a cart to purchase them in future. Dont't
              worry your cart is totally safe from outside the world.
            </Text>
            <View style={styles.indicatiors}>
              <Entypo style={styles.indicate} size={13} name="minus"></Entypo>
              <Entypo style={styles.indicate} size={13} name="minus"></Entypo>
              <Entypo
                style={{ fontSize: 34, color: "red" }}
                size={13}
                name="minus"
              ></Entypo>
              <Entypo style={styles.indicate} size={13} name="minus"></Entypo>
            </View>
            <TouchableOpacity
              style={styles.nextbtn}
              onPress={() => {
                navigation.navigate("Welcome4");
              }}
            >
              <Text>Next {">"}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cotainer: {
    backgroundColor: "white",
    height: Dimensions.get("window").height + 30,
  },
  img: {
    width: 350,
    height: 350,
  },
  card: {
    marginTop: 50,
  },
  body: {
    margin: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  cardhead: {
    fontSize: 28,
    fontWeight: "700",
    color: properties.colors.orange,
  },
  carddesc: {
    marginTop: 10,
    fontSize: 16,
  },
  nextbtn: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    marginLeft: 120,
    width: 140,
    height: 50,
    borderWidth: 1,
  },
  indicatiors: {
    marginTop: 50,
    flexDirection: "row",
  },
  indicate: { fontSize: 34, color: "#32064A" },
});
