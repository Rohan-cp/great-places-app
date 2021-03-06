import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlaceDetailScreen = props => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Place Detail screen!</Text>
    </View>
  );
}

PlaceDetailScreen.navigationOptions = navData => {
  return {
    headerTitle: navData.navigation.getParam('placeTitle')
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    justifyContent: 'center',
    alignItems: 'center',
  }
}) 

export default PlaceDetailScreen;