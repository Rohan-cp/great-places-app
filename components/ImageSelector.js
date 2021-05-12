import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';
import Colors from '../constants/Colors';

const ImgPicker = props => {
  const [imageUri, setImageUri] = useState(null);

  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.CAMERA);
    if (result.status != 'granted') {
      Alert.alert('Insufficient permissions!',
      'You need to grant camera permissions to use this app.',
      [{text: 'Okay'}]);
      return false;
    }
    return true;
  };

  const takeImageHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    const image = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [16, 9],
    });
    setImageUri(image.uri);
    props.onImageTaken(image.uri);
  };

  return (
    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
        {imageUri ? <Image style={styles.image} source={{uri: imageUri}} /> 
        : <Text>No image picked yet</Text>}
      </View>
      <View style={styles.buttonContainer}>
        <Button 
          title='Take Image' 
          color={Colors.primary} 
          onPress={takeImageHandler}
        />
      </View>
      
    </View>
  );
};

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: 'center',
  },
  imagePreview: {
    width: '100%',
    height: 200,
    marginBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  buttonContainer: {
    margin: 15,
  }
});

export default ImgPicker;