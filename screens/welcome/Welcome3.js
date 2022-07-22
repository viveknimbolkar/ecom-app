import { StyleSheet, View, Text, Button } from "react-native";

export default function Welcome3({ navigation }) {
  return (
    <>
      <View>
        <Text >Weclcome 1</Text>
        <Button
          title="Welcome 4"
          onPress={() => navigation.navigate("Welcome4")}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({});
