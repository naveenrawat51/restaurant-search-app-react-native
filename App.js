import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import AppNavigator from './navigation/AppNavigator';
import * as Font from 'expo-font';
import AppLoading from 'expo-app-loading'

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf')
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  if (!fontsLoaded) {
    return <AppLoading
    startAsync = {fetchFonts}
    onFinish={() => setFontsLoaded(true)}
    onError={() => console.log(error)} />
  }
  return (
    <AppNavigator />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
