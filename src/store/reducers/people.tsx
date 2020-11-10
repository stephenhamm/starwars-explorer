import { PEOPLE_LOADING, PEOPLE_LOADED, PERSON_LOADING, PERSON_LOADED } from "../../constants/action-types";
import Person from '../../types/Person';

const initialState = {
  people: [],
  person: {} as Person,
  loading: false as boolean
};

export const peopleReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case PEOPLE_LOADING:
      return {
        ...state,
        loading: true
      }

    case PEOPLE_LOADED:
      return {
        ...state,
        people: action.people,
        loading: false
      }

    case PERSON_LOADING:
      return {
        ...state,
        loading: true
      }

    case PERSON_LOADED:
      return {
        ...state,
        person: action.person,
        loading: false
    }
    
    default:
      return state;    
  }
}
