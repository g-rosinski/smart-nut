import { StyleSheet, View } from 'react-native';

import { ButtonMain } from '../../components/Buttons';
import ImageSelector from '../../components/ImageSelector.component';
import React from 'react';
import { addMeal } from '../../store/actions/daily/daily.actions';
import { useDispatch } from 'react-redux';

const Daily: React.FC<any> = ({navigation}) => {
  const dispatch  = useDispatch()
  const handlePickImage = (image:string) => {
    dispatch(addMeal(image))
  }

  return (
    <View style={styles.container}>
      {/* <ButtonMain title={"Ingresar peso"} onPress={() => navigation.navigate("")} /> */}
      <ImageSelector onSelectImage={handlePickImage} />
      {/* <ButtonMain title={"Ingresar comida"} onPress={() => navigation.navigate("")} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column',
      height: '100%',
      minHeight: 100
    },
});

export default Daily