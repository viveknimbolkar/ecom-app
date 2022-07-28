import { Text, StyleSheet, View, ScrollView } from "react-native";
import CartItem from "../../components/CartItem";

export default function Cart({ naivgation }) {
  return (
    <>
      <View style={styles.mainHeading}>
        <Text style={styles.mainHeadText}>My Cart</Text>
      </View>
      <ScrollView style={styles.container}>
        <View style={styles.cartContainer}>
          <CartItem />
        </View>
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
  mainHeading: {
    backgroundColor: "#EB4511",
    alignItems: "center",
    padding: 10,
  },
  mainHeadText: {
    fontSize: 26,
    color: "white",
    fontWeight: "700",
  },
  cartContainer: {
    margin: 10,
  }
});
