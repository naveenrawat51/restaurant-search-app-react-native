import React from "react";
import { StyleSheet, View, Text, FlatList } from "react-native";

import Result from "./Result";

export default function ResultsList({ title, results, navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        showsHorizontalScrollIndicator={false}
        horizontal
        data={results}
        keyExtractor={(result) => result.id}
        renderItem={(itemData) => <Result {...itemData.item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  title: {
    marginLeft: 15,
    marginBottom: 10,
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "open-sans-bold",
  },
});
