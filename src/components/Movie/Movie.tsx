import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import { RootState } from '../../store/reducers/index';
import { getMovie } from '../../store/actions';
import './Movie.css';

const Movie = () => {
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  
  let movie = useSelector((state: RootState) => {
    return state.moviesReducer.movie;
  });

  let loading = useSelector((state: RootState) => {
    return state.moviesReducer.loading;
  });

  useEffect(() => {
    const routerLocation = location.split("/");
    const id = routerLocation[routerLocation.length - 1];
    dispatch(getMovie(id));
  }, [dispatch, location])

  if (loading === true) {
    return (
      <div className="loading">
        <CircularProgress size="5rem" />
      </div>
    );
  } else {
    return (
      <h1>{movie.title}</h1>
    );
  }
}
  
export default Movie;