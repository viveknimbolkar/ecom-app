import {
  StyleSheet,
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import Entypo from "react-native-vector-icons/Entypo";

export default function Welcome4({ navigation }) {
  return (
    <>
      <View style={styles.cotainer}>
        <View style={styles.card}>
          <Image
            style={styles.img}
            source={{
              uri: "https://img.freepik.com/free-vector/online-wishes-list-concept-illustration_114360-3900.jpg",
            }}
          />
          <View style={styles.body}>
            <Text style={styles.cardhead}>Let's Start</Text>
            <Text style={styles.carddesc}>Stay home and shop online.</Text>
            <View style={styles.indicatiors}>
              <Entypo style={styles.indicate} size={13} name="minus"></Entypo>
              <Entypo style={styles.indicate} size={13} name="minus"></Entypo>
              <Entypo style={styles.indicate} size={13} name="minus"></Entypo>
              <Entypo
                style={{ fontSize: 34, color: "red" }}
                size={13}
                name="minus"
              ></Entypo>
            </View>
            <TouchableOpacity
              style={styles.nextbtn}
              onPress={() => {
                navigation.navigate("Login");
              }}
            >
              <Text style={styles.startbtn}>Start Shopping</Text>
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
    color: "#EB4511",
  },
  carddesc: {
    marginTop: 10,
    fontSize: 16,
  },
  nextbtn: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 50,
    width: 300,
    height: 50,
    backgroundColor: "#EB4511",
  },
  startbtn: {
    color: "white",
    fontSize: 20,
    fontWeight: "800",
  },
  indicatiors: {
    marginTop: 50,
    flexDirection: "row",
  },
  indicate: { fontSize: 34, color: "#32064A" },
});
