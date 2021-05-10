import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MapScreen = props => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Map screen!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  }
}) 

export default MapScreen;