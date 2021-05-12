import * as FileSystem from 'expo-file-system';
export const ADD_PLACE = 'ADD_PLACE';

export const addPlace = (title, imagePath) => {
  return async dispatch => {
    const fileName = imagePath.split('/').pop();
    const newPath = FileSystem.documentDirectory + fileName;
    try {
      const result = await FileSystem.moveAsync({
        from: imagePath,
        to: newPath
      });
    } catch (error) {
      console.log(error);
      throw err;
    }

    dispatch({ type: ADD_PLACE, PlaceData: { title: title, imageUri: newPath }});
  }
};