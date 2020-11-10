import { combineReducers } from 'redux';
import{ peopleReducer } from './people';
import{ moviesReducer } from './movies';
import{ planetsReducer } from './planets';

export const rootReducer = combineReducers({
  peopleReducer: peopleReducer,
  moviesReducer: moviesReducer,
  planetsReducer: planetsReducer
});

export type RootState = ReturnType<typeof rootReducer>
