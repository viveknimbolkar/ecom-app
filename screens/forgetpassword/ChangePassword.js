import { useState } from "react";
import { TextInput, Button } from "react-native-paper";

const properties = require("../../properties.json");
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
export default function SelectEmail({ navigation }) {
  const [password, setPassword] = useState("");
  const [passwordVisible, setPasswordVisible] = useState(true);
  const [cpassword, setcPassword] = useState("");
  const [passwordCVisible, setPasswordCVisible] = useState(true);
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>Create New Password</Text>
        <Text style={styles.headingtext}>
          Your new password must be different from previous used password
        </Text>
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
        <Button
          style={styles.loginbtn}
          mode="contained"
          onPress={() => navigation.navigate("Login")}
        >
          Reset Password
        </Button>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={{ marginTop: 20 }}
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
  common: {
    marginTop: 20,
  },
  loginbtn: {
    height: 50,
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: properties.colors.orange,
  },
  logintext: {
    color: "blue",
    fontSize: 17,
    alignSelf: "center",
  },
});
