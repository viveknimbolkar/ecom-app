import { StyleSheet, View, StatusBar } from "react-native";
import * as React from "react";
import { Searchbar } from "react-native-paper";
export default function Search({ navigation }) {
  const [searchQuery, setSearchQuery] = React.useState("");

  const onChangeSearch = (query) => setSearchQuery(query);

  return (
    <>
      <StatusBar animated={true} backgroundColor="#EB4511" />
      <View style={styles.maincontainer}>
        <Searchbar
          style={styles.searchBar}
          placeholder="Search your product"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: "white",
  },
  searchBar: {
    margin:10
  },
});
