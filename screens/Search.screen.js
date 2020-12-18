import React, { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Searchbar from "../components/SearchBar";

export default function SearchScreen() {
  const [searchText, setSearchText] = useState();

  return (
    <View>
      <Searchbar
        searchText={searchText}
        searchTextHandler={(newText) => setSearchText(newText)}
        onSearchTextSubmit={() => console.log("searching restaurants!!")}
      />
      <Text>Search Screen {searchText}</Text>
    </View>
  );
}

export const SearchScreenOptions = {
  headerTitle: "Search ResTaurant",
};

const style = StyleSheet.create({});
