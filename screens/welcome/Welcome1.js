import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

const properties = require("../../properties.json");
export default function Welcome1({ navigation }) {
  return (
    <>
      <View style={styles.cotainer}>
        <View style={styles.card}>
          <Image
            style={styles.img}
            source={{
              uri: "https://img.freepik.com/free-vector/purchasing-habits-abstract-concept_335657-2995.jpg",
            }}
          />
          <View style={styles.body}>
            <Text style={styles.cardhead}>Welcome to Ecom</Text>
            <Text style={styles.carddesc}>
              The One-stop Shopping Destination. E-commerce is revolutionizing
              the way we all shop in India.
            </Text>
            <View style={styles.indicatiors}>
              <Entypo
                style={{ fontSize: 34, color: "red" }}
                size={13}
                name="minus"
              ></Entypo>
              <Entypo style={styles.indicate} size={13} name="minus"></Entypo>
              <Entypo style={styles.indicate} size={13} name="minus"></Entypo>
              <Entypo style={styles.indicate} size={13} name="minus"></Entypo>
            </View>
            <TouchableOpacity
              style={styles.nextbtn}
              onPress={() => {
                navigation.navigate("Welcome2");
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
