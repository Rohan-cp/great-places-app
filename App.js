import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PlacesNavigator from './navigator/PlacesNavigator';

export default function App() {
  return (
    <PlacesNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'violet',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
