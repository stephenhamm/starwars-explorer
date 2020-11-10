import { combineReducers } from 'redux';
import { peopleReducer } from './people';
import { moviesReducer } from './movies';
import { planetsReducer } from './planets';

export const rootReducer = combineReducers({
  peopleReducer,
  moviesReducer,
  planetsReducer
});

export type RootState = ReturnType<typeof rootReducer>
