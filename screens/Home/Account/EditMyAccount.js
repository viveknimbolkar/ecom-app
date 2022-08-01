import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
const properties = require("../../../properties.json");
import { TextInput, Button, Avatar } from "react-native-paper";
import React from "react";
import { useState } from "react";

export default function EditMyAccount({ navigation }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <View style={styles.mainHeading}>
        <Text style={styles.mainHeadText}>Edit My Account</Text>
      </View>
      <View style={styles.inner}>
        <Avatar.Image
          onTouchStart={() => {
            console.log("touch to profile photo");
         
          }}
          style={{ alignSelf: "center" }}
          size={100}
          source={{
            uri: "https://images.unsplash.com/photo-1566753323558-f4e0952af115",
          }}
        />
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
          Update Profile
        </Button>
        <TouchableOpacity
          onPress={() => navigation.navigate("Login")}
          style={styles.login}
        ></TouchableOpacity>
      </View>
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
    color: properties.colors.orange,
  },
});
