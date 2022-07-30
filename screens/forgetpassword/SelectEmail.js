import { useState } from "react";
import { TextInput, Button } from "react-native-paper";
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Text,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

const properties = require("../../properties.json");
export default function SelectEmail({ navigation }) {
  const [email, setEmail] = useState("");
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>Reset Password</Text>
        <Text style={styles.headingtext}>
          Enter the email associated with your account and we'll send an email
          with instructions to reset your password.
        </Text>
        <TextInput
          outlineColor={properties.colors.orange}
          activeOutlineColor={properties.colors.orange}
          style={styles.email}
          mode="outlined"
          label="Email"
          value={email}
          onChangeText={(email) => setEmail(email)}
        />
        <Button
          style={styles.sendbtn}
          mode="contained"
          onPress={() => navigation.navigate("OTP")}
        >
          Send Instructions
        </Button>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.loginbtn}
        >
          <Text style={styles.logintext}>
            I don't want to change my password? Continue to login
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginTop: 100,
  },
  heading: {
    fontSize: 30,
    fontWeight: "800",
  },
  headingtext: {
    color: "gray",
    fontSize: 16,
  },
  email: {
    marginTop: 20,
  },
  sendbtn: {
    height: 50,
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: properties.colors.orange,
  },
  loginbtn: {
    marginTop: 20,
  },
  logintext: {
    color: "blue",
    fontSize: 17,
    alignSelf: "center",
  },
});
