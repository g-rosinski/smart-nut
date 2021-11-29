import { StyleSheet, View } from 'react-native';

import { ButtonMain } from '../../components/Buttons';
import React from 'react';

const Daily: React.FC<any> = ({navigation}) => {


  return (
    <View style={styles.container}>
      <ButtonMain title={"Ingresar peso"} onPress={() => navigation.navigate("")} />
      <ButtonMain title={"Ingresar comida"} onPress={() => navigation.navigate("")} />
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