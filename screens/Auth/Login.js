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

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(true);
  return (
    <>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <View style={styles.maincontainer}>
          <View style={styles.container}>
            <Text style={styles.heading}>Login</Text>
            <Text style={styles.headingtext}>
              Please login to continue shopping
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
            <TextInput
              outlineColor={properties.colors.orange}
              activeOutlineColor={properties.colors.orange}
              secureTextEntry={passwordVisible}
              mode="outlined"
              right={
                <TextInput.Icon
                  name={passwordVisible ? "eye" : "eye-off"}
                  onPress={() => {
                    setPasswordVisible(!passwordVisible);
                  }}
                />
              }
              style={styles.password}
              label="Password"
              value={password}
              onChangeText={(password) => setPassword(password)}
            />
            <TouchableOpacity
              onPress={() => navigation.navigate("SelectEmail")}
              style={styles.forgetpassword}
            >
              <Text style={styles.forgetpasswordtext}>Forget Password?</Text>
            </TouchableOpacity>
            <Button
              style={styles.loginbtn}
              icon="login"
              mode="contained"
              onPress={() => { console.log("Login btn Pressed"); navigation.navigate("Home")}}
            >
              Login to continue
            </Button>
            <TouchableOpacity
              onPress={() => navigation.navigate("Signup")}
              style={styles.account}
            >
              <Text style={styles.accounttext}>
                Don't have an account? Create a new account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: "white",
    height: Dimensions.get("window").height + 30,
  },
  container: {
    padding: 20,
    backgroundColor: "white",
    marginTop: 50,
  },
  heading: {
    fontSize: 30,
    fontWeight: "800",
    alignSelf: "center",
    marginTop: 100,
  },
  headingtext: {
    alignSelf: "center",
  },
  email: {
    marginTop: 20,
  },
  password: { marginTop: 20 },
  loginbtn: {
    marginTop: 20,
    height: 60,
    alignContent: "center",
    justifyContent: "center",
    backgroundColor: properties.colors.orange,
  },
  forgetpassword: {
    alignItems: "flex-end",
    marginTop: 15,
  },
  forgetpasswordtext: {
    fontSize: 16,
    color: "blue",
  },
  account: {
    alignItems: "center",
    marginTop: 20,
  },
  accounttext: {
    fontSize: 15,
    color: "#EB4511",
  },
});
