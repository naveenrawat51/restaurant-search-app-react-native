import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  ActivityIndicator,
  ScrollView,
} from "react-native";
import Searchbar from "../components/SearchBar";
import Colors from "../constant/Colors";
import useResults from "../hooks/useResults";
import ResultsList from "../components/ResultsList";

export default function SearchScreen() {
  const [searchText, setSearchText] = useState();
  const [results, isLoading, error, searchApi] = useResults();

  const filterResultsByPrice = (price) =>
    results.filter((result) => result.price === price);

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
    <View style={{ flex: 1 }}>
      <Searchbar
        searchText={searchText}
        searchTextHandler={(newText) => setSearchText(newText)}
        onSearchTextSubmit={() => searchApi(searchText)}
      />
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title="Cost Effective"
        />
        <ResultsList results={filterResultsByPrice("$$")} title="Bit Pricier" />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title="Big Spender"
        />
      </ScrollView>
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
