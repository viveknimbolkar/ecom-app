import React from "react";
import { useState } from "react";
import { TextInput, Button } from "react-native-paper";

const properties = require("../../properties.json");
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

export default function Signup({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [cpassword, setcPassword] = useState("");
  const [passwordCVisible, setPasswordCVisible] = useState(true);
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.inner}>
          <Text style={styles.heading}>Create Account</Text>
          <Text style={styles.headingtext}>
            Create a new account to continue shopping
          </Text>
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
            outlineColor={properties.colors.orange}
            activeOutlineColor={properties.colors.orange}
            style={styles.common}
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
            style={styles.common}
            label="Password"
            value={password}
            onChangeText={(password) => setPassword(password)}
          />
          <TextInput
            outlineColor={properties.colors.orange}
            activeOutlineColor={properties.colors.orange}
            secureTextEntry={passwordCVisible}
            mode="outlined"
            right={
              <TextInput.Icon
                name={passwordCVisible ? "eye" : "eye-off"}
                onPress={() => {
                  setPasswordCVisible(!passwordCVisible);
                }}
              />
            }
            style={styles.common}
            label="Confirm password"
            value={cpassword}
            onChangeText={(cpassword) => setcPassword(cpassword)}
          />
          <TouchableOpacity
            onPress={() => navigation.navigate("SelectEmail")}
            style={styles.forgetpassword}
          >
            <Text style={styles.forgetpasswordtext}>Forget Password?</Text>
          </TouchableOpacity>
          <Button
            style={styles.loginbtn}
            mode="contained"
            onPress={() => console.log("Pressed")}
          >
            Create Account
          </Button>
          <TouchableOpacity
            onPress={() => navigation.navigate("Login")}
            style={styles.login}
          >
            <Text style={styles.logintext}>
              Already have an account? Please Login here
            </Text>
          </TouchableOpacity>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  // inner: {
  //   padding: 24,
  //   flex: 1,
  //   justifyContent: "space-around",
  // },
  inner: {
    padding: 20,
  },
  heading: {
    fontSize: 28,
    fontWeight: "800",
    alignSelf: "center",
    marginTop: 100,
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
    backgroundColor: properties.colors.orange,
  },
  logintext: {
    marginTop: 20,
    fontSize: 16,
    alignSelf: "center",
    color: "#EB4511",
  },
});
