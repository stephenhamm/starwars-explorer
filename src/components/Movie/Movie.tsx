import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";
import { CircularProgress } from '@material-ui/core';
import Icon from '@material-ui/icons/Movie';
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
        <CircularProgress size="5rem" color="inherit" />
      </div>
    );
  } else {
    return (
      <Fade>
        <div className="movie-info">
          <div className="movie-info-inner">
            <Icon className="avatar-icon"/>       
            <div className="additional-info">
              <span className="movie-name">{movie.title}</span>
              <div>
                <span className="attribute-name">Director: </span>
                <span className="attribute">{movie.director}</span>
              </div>
              <div>
                <span className="attribute-name">Producers: </span>
                <span className="attribute">{movie.producers}</span>
              </div>
              <div>
                <span className="attribute-name">Release Date: </span>
                <span className="attribute">{movie.releaseDate}</span>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}
  
export default Movie;