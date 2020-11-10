import { MOVIES_LOADED } from "../../constants/action-types";

const initialState = {
  movies: []
};

export const moviesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case MOVIES_LOADED: {
      return {
        ...state,
        movies: action.movies
      }
    }
    default:
      return state;    
  }
}

export type RootState = ReturnType<typeof moviesReducer>
