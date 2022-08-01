import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ToastAndroid,
  LogBox,
} from "react-native";
import Swipeable from "react-native-swipeable";
const properties = require("../../properties.json")
import Ionicons from "react-native-vector-icons/Ionicons";

LogBox.ignoreLogs([
  "ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from 'deprecated-react-native-prop-types'.",
  "NativeBase: The contrast ratio of",
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system!",
]);
export default function Notifications({ naivgation }) {
  // show toast on screen load
  const showToast = () => {
    ToastAndroid.show("Swipe left to dismiss notification", ToastAndroid.LONG);
  };
  showToast();
  const rightButtons = [
    <TouchableHighlight
      onPress={() => console.log("clicked")}
      style={styles.btnActionContainer}
    >
      <Ionicons
        style={styles.swipeActBtn}
        name={"md-trash-sharp"}
        size={36}
        color={"white"}
      />
    </TouchableHighlight>,
  ];

  return (
    <>
      <ScrollView style={styles.container}>
        <View style={styles.mainHeading}>
          <Text style={styles.mainHeadText}>Notifications</Text>
        </View>
        <View style={styles.notification}>
          <Swipeable rightButtons={rightButtons}>
            <Text style={styles.head}>20% off on mobiles</Text>
            <Text style={styles.description}>
              Get the best deals available for mobile categories. Get the best
              deals available for mobile categories lorem
            </Text>
          </Swipeable>
        </View>
        <View style={styles.notification}>
          <Swipeable rightButtons={rightButtons}>
            <Text style={styles.head}>20% off on mobiles</Text>
            <Text style={styles.description}>
              Get the best deals available for mobile categories. Get the best
              deals
            </Text>
          </Swipeable>
        </View>
        <View style={styles.notification}>
          <Swipeable rightButtons={rightButtons}>
            <Text style={styles.head}>20% off on mobiles</Text>
            <Text style={styles.description}>
              Get the best deals available for mobile categories. Get the best
            </Text>
          </Swipeable>
        </View>
        <View style={styles.notification}>
          <Swipeable rightButtons={rightButtons}>
            <Text style={styles.head}>20% off on mobiles</Text>
            <Text style={styles.description}>
              Get the best deals available for mobile categories. Get the best
              deals available for mobile categories lorem
            </Text>
          </Swipeable>
        </View>
        <View style={styles.notification}>
          <Swipeable rightButtons={rightButtons}>
            <Text style={styles.head}>20% off on mobiles</Text>
            <Text style={styles.description}>
              Get the best deals available for mobile categories. Get the best
              deals available for mobile categories lorem mobile categories
              loremmobile categories lorem
            </Text>
          </Swipeable>
        </View>
        <View style={styles.notification}>
          <Swipeable rightButtons={rightButtons}>
            <Text style={styles.head}>20% off on mobiles</Text>
            <Text style={styles.description}>
              Get the best deals available for mobile categories. Get the best
              deals available for mobile categories lorem mobile categories
              lorem
            </Text>
          </Swipeable>
        </View>
        <View style={styles.notification}>
          <Swipeable rightButtons={rightButtons}>
            <Text style={styles.head}>20% off on mobiles</Text>
            <Text style={styles.description}>
              Get the best deals available for mobile categories. Get the best
              deals available for mobile categories lorem
            </Text>
          </Swipeable>
        </View>
        <View style={styles.notification}>
          <Swipeable rightButtons={rightButtons}>
            <Text style={styles.head}>20% off on mobiles</Text>
            <Text style={styles.description}>
              Get the best deals available for mobile categories. Get the best
              deals available for mobile categories lorem
            </Text>
          </Swipeable>
        </View>
        <View style={styles.notification}>
          <Swipeable rightButtons={rightButtons}>
            <Text style={styles.head}>20% off on mobiles</Text>
            <Text style={styles.description}>
              Get the best deals available for mobile categories. Get the best
              deals available for mobile categories lorem
            </Text>
          </Swipeable>
        </View>
        <View style={styles.notification}>
          <Swipeable rightButtons={rightButtons}>
            <Text style={styles.head}>20% off on mobiles</Text>
            <Text style={styles.description}>
              Get the best deals available for mobile categories. Get the best
              deals available for mobile orem
            </Text>
          </Swipeable>
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  mainHeading: {
    backgroundColor: properties.colors.orange,
    alignItems: "center",
    padding: 10,
  },
  mainHeadText: {
    fontSize: 26,
    color: "white",
    fontWeight: "700",
  },
  notification: {
    backgroundColor: "white",
    marginTop: 10,
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
  },
  head: {
    fontSize: 20,
    fontWeight: "800",
  },
  description: {},
  btnActionContainer: {
    backgroundColor: properties.colors.orange,
    height: "130%",
    justifyContent: "center",
    marginTop: -10,
  },
});
