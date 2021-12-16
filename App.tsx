import AppLoading from 'expo-app-loading';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import React from 'react';
import TabNavigator from './navigation/TabNavigator';
import { init } from './db'
import store from './store';
import { useFonts } from 'expo-font';

init()
  .then(() => console.log('Database initialized'))
  .catch(err => {
    console.log('Database failed to connect')
    console.log(err.message)
  })

export default function App() {
  const [loaded] = useFonts({
    RubikRegular: require('./assets/fonts/Rubik/static/Rubik-Regular.ttf'),
    RubikBold: require('./assets/fonts/Rubik/static/Rubik-Bold.ttf')
  });

  return (
    loaded ? 
      <Provider store={store}>
        <NavigationContainer>
          <TabNavigator />
        </NavigationContainer>
      </Provider>
      : 
      <AppLoading />
  );
}
