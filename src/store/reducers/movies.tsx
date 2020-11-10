import { MOVIES_LOADING, MOVIES_LOADED, MOVIE_LOADING, MOVIE_LOADED } from "../../constants/action-types";
import Movie from '../../types/Movie';

const initialState = {
  movies: [],
  movie: {} as Movie,
  loading: false as boolean
};

export const moviesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case MOVIES_LOADING:
      return {
        ...state,
        loading: true
      }

    case MOVIES_LOADED:
      return {
        ...state,
        movies: action.movies,
        loading: false
      }

    case MOVIE_LOADING:
      return {
        ...state,
        loading: true
      }

    case MOVIE_LOADED:
      return {
        ...state,
        movie: action.movie,
        loading: false
    }
    
    default:
      return state;    
  }
}
