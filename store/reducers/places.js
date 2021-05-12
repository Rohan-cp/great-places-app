import Place from "../../models/place";
import { ADD_PLACE, SET_PLACES } from "../actions/places";

const initialState = {
  places: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_PLACES:
      return {
        places: action.places.map(pl => new Place(pl.id.toString(), pl.title, pl.imageUri))
      };
    case ADD_PLACE:
      const newPlace = new Place(action.PlaceData.id, action.PlaceData.title, action.PlaceData.imageUri)
      return {
        places: state.places.concat(newPlace)
      };
    default:
      return state;
  }
};