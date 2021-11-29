import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import TabNavigator from './navigation/TabNavigator';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    RubikRegular: require('./assets/fonts/Rubik/static/Rubik-Regular.ttf'),
    RubikBold: require('./assets/fonts/Rubik/static/Rubik-Bold.ttf')
  });

  return (
    loaded ? 
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
      : 
      <AppLoading />
  );
}
