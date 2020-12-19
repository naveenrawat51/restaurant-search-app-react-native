import React from "react";
import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Result({ name, image_url, rating, review_count }) {
  const navigation = useNavigation();

  const onResultClickHandler = () => {
    navigation.navigate("resultDetail", { name, image_url });
  };

  return (
    <TouchableOpacity onPress={onResultClickHandler}>
      <View style={styles.container}>
        <Image style={styles.image} source={{ uri: image_url }} />
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.review}>
          {rating} Stars, {review_count} Reviews
        </Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    width: 250,
    height: 200,
    borderRadius: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    fontFamily: "open-sans-bold",
  },
  name: {
    fontFamily: "open-sans-bold",
    fontSize: 15,
  },
  review: {
    fontFamily: "open-sans",
    color: "gray",
  },
});
