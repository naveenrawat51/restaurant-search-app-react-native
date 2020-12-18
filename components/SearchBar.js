import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar({ searchText, searchTextHandler }) {
  return (
    <View style={styles.searchBarContainer}>
      <Ionicons
        style={styles.searchIconStyle}
        name={Platform.OS === "android" ? "md-search" : "ios-search"}
      />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={searchText}
        placeholder="Search"
        onChangeText={(newText) => searchTextHandler(newText)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  searchBarContainer: {
    backgroundColor: "#D3D3D3",
    height: 50,
    borderRadius: 5,
    margin: 15,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    padding: 5,
    flex: 1,
    fontSize: 18,
  },
  searchIconStyle: {
    fontSize: 35,
    alignSelf: "center",
    marginHorizontal: 5,
    color: "black",
  },
});
