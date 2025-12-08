import React, { useState } from 'react';
import { View, Button, Image, StyleSheet, Alert, Text, Pressable } from 'react-native';
import * as ImagePicker from 'expo-image-picker';


type ImageSelectorProps = {
  onImageTaken: (imageUri: string) => void;
};

export default function ImageSelector({ onImageTaken }: ImageSelectorProps) {
  const [pickedImage, setPickedImage] = useState<string | null>(null);

  // 1. Gestion des permissions Caméra
  const [cameraPermission, requestCameraPermission] = ImagePicker.useCameraPermissions();

  const verifyPermissions = async () => {
    if (cameraPermission?.status === ImagePicker.PermissionStatus.GRANTED) {
      return true;
    }
    const response = await requestCameraPermission();
    return response.granted;
  };

 
  const takePhotoHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      Alert.alert("Permission refusée", "Vous devez donner l'accès à la caméra.");
      return;
    }

    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true, 
      aspect: [16, 9],     
      quality: 0.5,        
    });

    if (!result.canceled) {
      setPickedImage(result.assets[0].uri);
      onImageTaken(result.assets[0].uri); 
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imagePreview}>
        {pickedImage ? (
          <Image source={{ uri: pickedImage }} style={styles.image} />
        ) : (
          <Text style={styles.noImageText}>Aucune photo prise.</Text>
        )}
      </View>
      
      <Pressable style={styles.button} onPress={takePhotoHandler}>
         <Text style={styles.buttonText}>Prendre une photo</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginBottom: 20, alignItems: 'center' },
  imagePreview: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#e9e9e9',
    borderRadius: 10,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#ccc'
  },
  image: { width: '100%', height: '100%' },
  noImageText: { color: '#888' },
  button: {
    backgroundColor: '#4a90e2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: { color: '#fff', fontWeight: 'bold' }
});