import * as ImagePicker from 'expo-image-picker';

import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import colors from '../contants/colors';

interface ImageSelectorProps{
    onSelectImage?(uri:string | undefined):void
    imageUrl?: string
}

const ImageSelector:React.FC<ImageSelectorProps> = ({onSelectImage, imageUrl}) => {
  const [pickedUri, setPickedUri] = useState(imageUrl || "");
  useEffect(() => {
    setPickedUri(imageUrl || "")
  }, [imageUrl]);

  const verifyPermissions = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== 'granted') {
      Alert.alert(
        'Permisos insuficientes',
        'Necesita dar permisos de la cámara para usar la aplicación',
        [{ text: 'Ok' }],
      );
      return false;
    }

    return true;
  }

  const handleTakeImage = async () => {
    const isCameraOk = await verifyPermissions();
    if (!isCameraOk) return;

    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16,9],
      quality: 0.8,
    });

    setPickedUri(image.uri? image.uri : "");
    onSelectImage(image.uri? image.uri : "");
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.preview}>
        {pickedUri
          ? <Image source={{ uri: pickedUri }} style={styles.image} />
          : <Text>No hay imagen...</Text>
        }
      </View>
      <Button
        title="Tomar Foto"
        color={colors.walnut}
        onPress={handleTakeImage}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  preview: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: colors.walnut,
    borderWidth: 1,
    backgroundColor: colors.white
  },
  image: {
    width: '100%',
    height: '100%',
  }
});

export default ImageSelector;