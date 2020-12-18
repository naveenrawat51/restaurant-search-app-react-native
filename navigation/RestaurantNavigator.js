import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen, { SearchScreenOptions } from '../screens/Search.screen';
import { Platform } from 'react-native';
import Colors from '../constant/Colors';

const defaultNavigationOptions = {
    headerStyle: {
        backgroundColor: Platform.OS === 'android' ? Colors.primary : ""
    },
    headerTitleStyle: {
        fontFamily: "open-sans-bold",
        alignSelf: 'center'
      },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primary,
}

const RestaurantStackNavigator = createStackNavigator();
export const RestaurantNavigator = () => {
    return <RestaurantStackNavigator.Navigator screenOptions={defaultNavigationOptions}>
        <RestaurantStackNavigator.Screen name="search" component={SearchScreen} options={SearchScreenOptions} />
    </RestaurantStackNavigator.Navigator>
}