import { PEOPLE_LOADED } from "../../constants/action-types";

const initialState = {
  people: []
};

export const peopleReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case PEOPLE_LOADED: {
      return {
        ...state,
        people: action.people
      }
    }
    default:
      return state;    
  }
}

export type RootState = ReturnType<typeof peopleReducer>
