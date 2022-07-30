import React from "react";
import { useState } from "react";
import { TextInput, Button } from "react-native-paper";
const properties = require("../../../properties.json");

import {
  View,
  KeyboardAvoidingView,
  Image,
  StyleSheet,
  Text,
  Platform,
  TouchableWithoutFeedback,
  TouchableOpacity,
  Keyboard,
} from "react-native";

export default function Contact({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [detail, setDetail] = useState("");

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.heading}>Contact us</Text>
          <Text style={styles.headingtext}>Feel free to reach out us.</Text>
          <TextInput
            outlineColor={properties.colors.orange}
            activeOutlineColor={properties.colors.orange}
            style={styles.common}
            mode="outlined"
            label="Fullname"
            value={name}
            onChangeText={(name) => setName(name)}
          />
          <TextInput
            activeOutlineColor={properties.colors.orange}
            outlineColor={properties.colors.orange}
            style={styles.common}
            mode="outlined"
            label="Email"
            value={email}
            onChangeText={(email) => setEmail(email)}
          />
          <TextInput
            outlineColor={properties.colors.orange}
            activeOutlineColor={properties.colors.orange}
            style={[styles.common, { height: 150 }]}
            multiline
            mode="outlined"
            label="Details"
            value={detail}
            onChangeText={(detail) => setDetail(detail)}
          />
          <Button
            style={styles.loginbtn}
            mode="contained"
            onPress={() => console.log("Pressed")}
          >
            Send
          </Button>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inner: {
    padding: 20,
  },
  heading: {
    fontSize: 34,
    fontWeight: "800",
    alignSelf: "center",
    marginTop: 50,
  },
  headingtext: {
    alignSelf: "center",
  },
  common: {
    marginTop: 10,
  },
  forgetpasswordtext: {
    alignSelf: "flex-end",
    marginTop: 15,
    fontSize: 16,
    color: "blue",
  },
  loginbtn: {
    marginTop: 20,
    height: 50,
    justifyContent: "center",
    backgroundColor: "#EB4511",
  },
  logintext: {
    marginTop: 20,
    fontSize: 16,
    alignSelf: "center",
    color: "#EB4511",
  },
});
