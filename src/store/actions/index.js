import { 
  PEOPLE_LOADING, PEOPLE_LOADED, PERSON_LOADING, PERSON_LOADED,
  MOVIES_LOADING, MOVIES_LOADED, MOVIE_LOADING, MOVIE_LOADED,
  PLANETS_LOADING, PLANETS_LOADED, PLANET_LOADING, PLANET_LOADED } from "../../constants/action-types";

export function getPeople() {
  return dispatch => {
    dispatch({ type: PEOPLE_LOADING });
    fetch("https://swapi.dev/api/people/")
    .then(response => response.json())
    .then(json => {
      dispatch({type: PEOPLE_LOADED, people: json.results });
      return json.results;
    });
  };
};

export function getPerson(id) {
  return dispatch => {
    dispatch({ type: PERSON_LOADING });
    fetch("https://swapi.dev/api/people/" + id + "/")
    .then(response => response.json())
    .then(json => {
      dispatch({type: PERSON_LOADED, person: json });
      return json;
    });
  };
};

export function getMovies() {
  return dispatch => {
    dispatch({ type: MOVIES_LOADING });
    fetch("https://swapi.dev/api/films/")
    .then(response => response.json())
    .then(json => {
      dispatch({type: MOVIES_LOADED, movies: json.results });
      return json.results;
    });
  };
};

export function getMovie(id) {
  return dispatch => {
    dispatch({ type: MOVIE_LOADING });
    fetch("https://swapi.dev/api/films/" + id + "/")
    .then(response => response.json())
    .then(json => {
      dispatch({type: MOVIE_LOADED, movie: json });
      return json;
    });
  };
};

export function getPlanets() {
  return dispatch => {
    dispatch({ type: PLANETS_LOADING });
    fetch("https://swapi.dev/api/planets/")
    .then(response => response.json())
    .then(json => {
      dispatch({type: PLANETS_LOADED, planets: json.results });
      return json.results;
    });
  };
};

export function getPlanet(id) {
  return dispatch => {
    dispatch({ type: PLANET_LOADING });
    fetch("https://swapi.dev/api/planets/" + id + "/")
    .then(response => response.json())
    .then(json => {
      dispatch({type: PLANET_LOADED, planet: json });
      return json;
    });
  };
};
