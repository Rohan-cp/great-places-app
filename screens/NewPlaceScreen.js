import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NewPlaceScreen = props => {
  return (
    <View style={styles.container}>
      <Text>Welcome to the New Place screen!</Text>
    </View>
  );
}

NewPlaceScreen.navigationOptions = {
  headerTitle: 'Add Place',
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'green',
    justifyContent: 'center',
    alignItems: 'center',
  }
}) 

export default NewPlaceScreen;