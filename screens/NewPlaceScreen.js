import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, ScrollView, Button } from 'react-native';
import Colors from '../constants/Colors';
import { useDispatch } from 'react-redux';
import * as placesActions from '../store/actions/places'
import ImgPicker from '../components/ImageSelector';

const NewPlaceScreen = props => {
  const [ titleInput, setTitleInput ] = useState('');

  const dispatch = useDispatch();

  const titleChangeHandler = text => {
    setTitleInput(text)
  };

  const savePlaceHandler = () => {
    dispatch(placesActions.addPlace(titleInput));
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.label}>Title</Text>
        <TextInput 
          style={styles.textInput} 
          value={titleInput} 
          onChangeText={titleChangeHandler} 
        />
        <ImgPicker/>
        <Button title='Save Place' color={Colors.accent} onPress={savePlaceHandler} /> 
      </View>
    </ScrollView>
  );
}

NewPlaceScreen.navigationOptions = {
  headerTitle: 'Add Place',
}

const styles = StyleSheet.create({
  container: {
    margin: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 15,
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    marginBottom: 15,
    paddingVertical: 4,
    paddingHorizontal: 2,
  }
}) 

export default NewPlaceScreen;