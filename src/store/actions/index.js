import { PEOPLE_LOADED } from "../../constants/action-types";
import { MOVIES_LOADED } from "../../constants/action-types";
import { PLANETS_LOADED } from "../../constants/action-types";

export function getPeople() {
  return dispatch => {
    fetch("https://swapi.dev/api/people/")
    .then(response => response.json())
    .then(json => {
      dispatch({type: PEOPLE_LOADED, people: json.results });
      return json.results;
    });
  };
};

export function getMovies() {
  return dispatch => {
    fetch("https://swapi.dev/api/films/")
    .then(response => response.json())
    .then(json => {
      dispatch({type: MOVIES_LOADED, movies: json.results });
      return json.results;
    });
  };
};

export function getPlanets() {
  return dispatch => {
    fetch("https://swapi.dev/api/planets/")
    .then(response => response.json())
    .then(json => {
      dispatch({type: PLANETS_LOADED, planets: json.results });
      return json.results;
    });
  };
};
