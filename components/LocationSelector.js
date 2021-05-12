import React from 'react';
import { View, Button, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import Colors from '../constants/Colors';

const LocationSelector = props => {
  const getLocationHandler = () => {

  };

  return (
    <View style={styles.locationSelector} >
      <View style={styles.mapPreview}>
        <Text>No location chosen text!</Text>
      </View>
      <Button title="Get User Location" color={Colors.primary} onPress={getLocationHandler} />
    </View>
  );
};

const styles = StyleSheet.create({
  locationSelector: {
    marginBottom: 15,
  },
  mapPreview: {
    marginBottom: 10,
    width: '100%',
    height: 150,
    borderColor: '#ccc',
    borderWidth: 1,
  }
});

export default LocationSelector;