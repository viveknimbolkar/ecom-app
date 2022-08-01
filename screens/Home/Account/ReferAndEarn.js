import {
  Dimensions,
  Image,
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from "react-native";
const properties = require("../../../properties.json");
export default function ReferAndEarnReferAndEarn({ navigation }) {
  return (
    <>
      <View style={styles.maincontainer}>
        <Image
          style={styles.img}
          source={{
            uri: "https://static.vecteezy.com/system/resources/previews/006/959/746/non_2x/refer-a-friend-flat-style-design-illustration-business-concept-vector.jpg",
          }}
        />
        <View style={styles.containerBody}>
          <Text style={styles.mainHeading}>Get Rs. 100 for each referral</Text>
          <Text style={styles.secondaryHeading}>
            Help friends to shop online with Ecom store
          </Text>
          <Image style={styles.referImg} source={require("../../../assets/refer-and-earn.png")} />
          <TouchableOpacity style={styles.referBtn}>
            <Text style={styles.referBtnText}>Refer Friends</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    width: Dimensions.get("window").width,
    margin: 10,
    backgroundColor:"white",
  },
  img: {
    width: Dimensions.get("window").width - 20,
    height: 200,
  },
  referImg: {
    alignSelf:'center',
    width: 200,
    height: 300,
    marginTop:10,
  },
  containerBody: {
    margin: 10,
  },
  mainHeading: {
    fontSize: 24,
    fontWeight: "800",
    color: properties.colors.orange,
    marginTop: 10,
  },
  secondaryHeading: { marginTop: 10, fontSize: 16 },
  referBtn: {
    alignSelf: "center",
    backgroundColor: properties.colors.orange,
    padding: 10,
    marginLeft: -10,
    width: Dimensions.get("window").width - 50,
  },
  referBtnText: {
    alignSelf: "center",
    color: 'white',
    fontSize: 20,
    fontWeight:"700"
  },
});
