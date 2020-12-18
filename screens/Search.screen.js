import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Searchbar from '../components/SearchBar';

export default function SearchScreen() {
    return <View>
        <Searchbar />
        <Text>Search Screen</Text>
    </View>
}

export const SearchScreenOptions = {
    headerTitle: 'Search ResTaurant'
}

const style = StyleSheet.create({})