import React, { useState } from 'react';
import { View, Button, Text, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import Colors from '../constants/Colors';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';

const LocationSelector = props => {
  const [ isFetching, setIsFetching ] = useState(false);
  const [ locationPicked, setLocationPicked ] = useState();
  const verifyPermissions = async () => {
    const result = await Permissions.askAsync(Permissions.LOCATION_FOREGROUND);
    if (result.status != 'granted') {
      Alert.alert('Insufficient permissions!',
      'You need to grant location permissions to use this app.',
      [{text: 'Okay'}]);
      return false;
    }
    return true;
  };

  const getLocationHandler = async () => {
    const hasPermission = await verifyPermissions();
    if (!hasPermission) {
      return;
    }
    try {
      setIsFetching(true);
      const location = await Location.getCurrentPositionAsync({ timeout: 5000 });
      console.log(location);
      setLocationPicked({
        lat: location.coords.latitude,
        lng: location.coords.longitude
      });
    } catch (error) {
      Alert.alert(
        'Could not fetch location', 
        'Please try again later or pick a location on the map', 
        [{ text: okay }])
    }
    setIsFetching(false);
  };

  return (
    <View style={styles.locationSelector} >
      <View style={styles.mapPreview}>
        {isFetching ? <ActivityIndicator size='large' color={Colors.primary} /> : <Text>No location chosen text!</Text>}
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
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default LocationSelector;