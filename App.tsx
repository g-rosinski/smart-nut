import AppLoading from 'expo-app-loading';
import Daily from './screens/Daily/Daily.component';
import GetStarted from './screens/GetStarted/GetStarted.component';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

export default function App() {
  const [loaded] = useFonts({
    RubikRegular: require('./assets/fonts/Rubik/static/Rubik-Regular.ttf'),
    RubikBold: require('./assets/fonts/Rubik/static/Rubik-Bold.ttf')
  });

  if(!loaded) return <AppLoading />


  const Stack = createNativeStackNavigator()

  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName="Started" >
            <Stack.Screen name="Started" component={ GetStarted } />
            <Stack.Screen name="Daily" component={ Daily } />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
