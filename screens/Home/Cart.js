import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
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
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
        </View>
      </ScrollView>
      <View style={styles.placeOrderSection}>
        <View style={styles.placeOrderTotal}>
          <Text style={styles.placeOrderTotalText}>Rs.8,568 </Text>
          <Text style={styles.placeOrderTotalDesc}>Inclusive of all tax</Text>
        </View>
        <View>
          <TouchableOpacity style={styles.placeOrderBtn}>
            <Text style={styles.placeOrderBtnText}>Place Order</Text>
          </TouchableOpacity>
        </View>
      </View>
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
  },
  placeOrderSection: {
    backgroundColor: "white",
    flexDirection:'row',
    justifyContent: 'space-around',
    padding:10,
  },
  placeOrderTotal: {
   
  },
  placeOrderTotalText: {
    fontWeight: "700",
    fontSize:20,
  },
  placeOrderTotalDesc: {
    fontSize:10,
  },
  placeOrderBtn: {
    backgroundColor: "#EB4511",
    padding:10
  },
  placeOrderBtnText: {
    color: 'white',
    fontSize: 20,
    paddingLeft:10,
    paddingRight: 10,
    fontWeight:"600"
  },
});
