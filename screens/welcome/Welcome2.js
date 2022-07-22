import { StyleSheet, View, Text, Button } from "react-native";

export default function Welcome2({ navigation }) {
  return (
    <>
      <View>
              <Text>Weclcome 1</Text>
              <Button title="Welcome 3" onPress={()=>navigation.navigate("Welcome3")}/>
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
