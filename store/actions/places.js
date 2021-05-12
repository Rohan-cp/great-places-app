import * as FileSystem from 'expo-file-system';
import { fetchPlaces, insertPlace } from '../../helpers/db';
export const ADD_PLACE = 'ADD_PLACE';
export const SET_PLACES = 'SET_PLACES';

export const addPlace = (title, imagePath) => {
  return async dispatch => {
    const fileName = imagePath.split('/').pop();
    const newPath = FileSystem.documentDirectory + fileName;
    try {
      await FileSystem.moveAsync({
        from: imagePath,
        to: newPath
      });
      const dbResult = await insertPlace(
        title, 
        newPath, 
        'Dummy Address', 
        15.6, 
        12.3);
      console.log(dbResult);
      dispatch({ type: ADD_PLACE, PlaceData: { id: dbResult.insertId, title: title, imageUri: newPath }});
    } catch (error) {
      console.log(error);
      throw err;
    }
  }
};

export const loadPlaces = () => {
  return async dispatch => {
    try {
      const dbResult = await fetchPlaces();
      console.log(dbResult);
      dispatch({ type: SET_PLACES, places: dbResult.rows._array})
    } catch (error) {
      throw err;
    }
  };
};