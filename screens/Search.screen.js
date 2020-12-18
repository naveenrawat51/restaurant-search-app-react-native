import React, { useState } from "react";
import { StyleSheet, View, Text, ActivityIndicator } from "react-native";
import Searchbar from "../components/SearchBar";
import Colors from "../constant/Colors";
import useResults from "../hooks/useResults";

export default function SearchScreen() {
  const [searchText, setSearchText] = useState();
  const [results, isLoading, error, searchApi] = useResults();

  if (isLoading) {
    return (
      <View style={styles.spinner}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  if (error && results.length === 0) {
    return (
      <View style={styles.spinner}>
        <Text>Something went wrong. Please try again after some time!!</Text>
      </View>
    );
  }

  return (
    <View>
      <Searchbar
        searchText={searchText}
        searchTextHandler={(newText) => setSearchText(newText)}
        onSearchTextSubmit={() => searchApi(searchText)}
      />
      <Text>Search Screen {searchText}</Text>
      <Text>We have found {results.length}</Text>
    </View>
  );
}

export const SearchScreenOptions = {
  headerTitle: "Search Restaurant",
};

const styles = StyleSheet.create({
  spinner: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
