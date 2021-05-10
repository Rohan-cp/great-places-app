import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlacesListScreen = props => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the Places List screen!</Text>
    </View>
  );
}

PlacesListScreen.navigationOptions = {
  headerTitle: 'All Places',

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
}) 

export default PlacesListScreen;