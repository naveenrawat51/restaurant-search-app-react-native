import React from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Platform,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar({
  searchText,
  searchTextHandler,
  onSearchTextSubmit,
}) {
  return (
    <View style={styles.searchBarContainer}>
      <TouchableOpacity onPress={onSearchTextSubmit}>
        <Ionicons
          style={styles.searchIconStyle}
          name={Platform.OS === "android" ? "md-search" : "ios-search"}
        />
      </TouchableOpacity>
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        style={styles.input}
        value={searchText}
        placeholder="Search"
        onChangeText={searchTextHandler}
        onEndEditing={onSearchTextSubmit}
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
