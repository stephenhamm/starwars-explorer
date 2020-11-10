import { PLANETS_LOADED } from "../../constants/action-types";

const initialState = {
  planets: []
};

export const planetsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case PLANETS_LOADED: {
      return {
        ...state,
        planets: action.planets
      }
    }
    default:
      return state;    
  }
}

export type RootState = ReturnType<typeof planetsReducer>
