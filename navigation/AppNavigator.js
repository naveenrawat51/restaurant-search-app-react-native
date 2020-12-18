import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { RestaurantNavigator } from './RestaurantNavigator';

export default function AppNavigator() {
    return <NavigationContainer>
        <RestaurantNavigator />
    </NavigationContainer>
}