import { StyleSheet, Text, View } from 'react-native';

import React from 'react';
import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title_app}>Smart Nut</Text>
      </View>
      <Text style={styles.title_coder}>Hola, Coder!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    height: '100%'
  },
  header: {
    backgroundColor: '#904b1d', // nut color palette
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'flex-start',
    height: 50,
    width: '100%'
  },
  title_app: {
    fontSize: 24,
    fontWeight: '400',
    color: '#fff'
  },
  title_coder: {
    fontSize: 32,
    fontWeight: '700',
    fontStyle: 'italic',
    alignItems: 'center',
    color: '#38231c'
  }
});
