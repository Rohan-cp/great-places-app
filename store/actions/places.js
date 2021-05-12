export const ADD_PLACE = 'ADD_PLACE';

export const addPlace = (title, imagePath) => {
  return { type: ADD_PLACE, PlaceData: { title: title, imageUri: imagePath } }
};