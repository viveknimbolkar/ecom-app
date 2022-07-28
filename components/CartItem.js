import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { Picker } from "@react-native-picker/picker";
import { useState } from "react";
import DialogInput from 'react-native-dialog-input';
export default function CartItem() {
  const [selectedLanguage, setSelectedLanguage] = useState();

  return (
    <>
      <View style={styles.cartItem}>
        <View style={styles.cartHeadSection}>
          <Image
            style={styles.cartImg}
            source={{
              uri: "https://rukminim1.flixcart.com/image/832/832/kthjy4w0/shoe/i/q/o/7-381391-puma-black-salmon-rose-original-imag6tkdzh35z5fz.jpeg",
            }}
          />
          <Picker
            selectedValue={selectedLanguage}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedLanguage(itemValue)
            }
          >
            <Picker.Item label="1" value="1" />
            <Picker.Item label="2" value="2" />
            <Picker.Item label="3" value="3" />
            <Picker.Item label="4" value="4" />
            <Picker.Item label="5" value="5" />
            <Picker.Item label="6" value="6" />
          </Picker>
        </View>
        <View style={styles.cardBodySection}>
          <Text style={styles.cartHead}>Acer Aspire 7 - Laptop</Text>
          <Text style={styles.cartDesc}>
            2.4GHz Wireless, Black, Backlit keyboard,8GB RAM, 1TB HDD 512 SSD
            storage
          </Text>
          <Text style={styles.cartPrice}>Rs. 56,349</Text>
          <Text style={styles.cartAdditionalDesc}>Free Delivery</Text>
          <View>
            <DialogInput
              isDialogVisible={true}
              title={"DialogInput 1"}
              message={"Message for DialogInput #1"}
              hintInput={"HINT INPUT"}
            ></DialogInput>
          </View>
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  cartItem: {
    backgroundColor: "white",
    flexDirection: "row",
    borderRadius: 10,
    overflow: "hidden",
  },
  cartImg: {
    width: 100,
    height: 100,
  },
  cartHeadSection: {
    padding: 10,
  },
  cartHead: {
    fontWeight: "600",
    fontSize: 18,
  },

  cardBodySection: {
    paddingTop: 10,
  },
  cartDesc: {
    fontSize: 12,
  },
  cartPrice: {
    fontWeight: "600",
    fontSize: 18,
  },
  cartAdditionalDesc: {
    color: "green",
  },
});
