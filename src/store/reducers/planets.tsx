import { PLANETS_LOADING, PLANETS_LOADED, PLANET_LOADING, PLANET_LOADED } from "../../constants/action-types";
import Planet from '../../types/Planet';

const initialState = {
  planets: [],
  planet: {} as Planet,
  loading: false as boolean
};

export const planetsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case PLANETS_LOADING:
      return {
        ...state,
        loading: true
      }

    case PLANETS_LOADED:
      return {
        ...state,
        planets: action.planets,
        loading: false
      }

    case PLANET_LOADING:
      return {
        ...state,
        loading: true
      }

    case PLANET_LOADED:
      return {
        ...state,
        planet: action.planet,
        loading: false
    }
    
    default:
      return state;    
  }
}
