import React from "react";
import { StyleSheet, View, Text } from "react-native";

export default function ResultDetailsScreen() {
  return (
    <View>
      <Text>Rezult Details</Text>
    </View>
  );
}

export const ResultDetailsScreenOptions = ({ route }) => {
  const restaurantName = route.params.name;
  return {
    headerTitle: restaurantName,
  };
};

const styles = StyleSheet.create({});
