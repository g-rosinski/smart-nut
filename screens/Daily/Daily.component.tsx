import { StyleSheet, View } from 'react-native';

import React from 'react';
import { Text } from 'react-native'

export interface DailyProps{
}



const Daily: React.FC<DailyProps> = () => {


  return (
    <View style={styles.container}>
        <Text style={styles.title}>Daily</Text>
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
    title: {
        fontSize: 24,
        fontWeight: '700',
        color: '#000000',
        fontFamily: 'RubikBold'
    }
});

export default Daily