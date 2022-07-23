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
export default function SelectEmail({ navigation }) {
  const [otp, setotp] = useState("");
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.heading}>Check Your mail</Text>
        <Text style={styles.headingtext}>
          An OTP is sent to your registered email id. Please enter your OTP.
        </Text>
        <TextInput
          style={styles.otp}
          mode="outlined"
          label="OTP"
          value={otp}
          onChangeText={(otp) => setotp(otp)}
        />
        <Button
          style={styles.changepwdbtn}
          mode="contained"
          onPress={() => navigation.navigate("ChangePassword")}
        >
          Change Password
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
  otp: {
    marginTop: 20,
  },
  changepwdbtn: {
    height: 50,
    justifyContent: "center",
    marginTop: 20,
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
