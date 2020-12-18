import React from 'react';
import { StyleSheet, View, Text, Platform } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export default function SearchBar() {
    return <View style={styles.background}>
        <Ionicons
              name={Platform.OS === "android" ? "md-search" : "ios-search"}
              size={23}
              color="red"
            />
        <Text>Search bar</Text>
    </View>
}

const styles = StyleSheet.create({
    background: {
        backgroundColor: '#F0EEEE',
        height: 50,
        borderRadius: 5,
        margin: 15
    }
})