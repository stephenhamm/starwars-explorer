import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";
import List from '@material-ui/core/List';
import { CircularProgress } from '@material-ui/core';
import { getMovies } from "../../store/actions/index";
import Movie from '../../types/Movie';
import { RootState } from '../../store/reducers/index';
import ListItemRow from '../../components/UI/ListItemRow/ListItemRow';

const Movies = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  let movies = useSelector((state: RootState) => {
    return state.moviesReducer.movies;
  });

  let loading = useSelector((state: RootState) => {
    return state.moviesReducer.loading;
  });

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch])

  const onListItemClick = (index: number) => {
    history.push(`/movie/${index}`);
  }

  if (loading === true) {
    return (
      <div className="loading">
        <CircularProgress size="5rem" color="inherit" />
      </div>
    )
  } else {
    return (
      <Fade>
        <List>
          {movies.map((movie: Movie, index: number) => (        
            <ListItemRow key={movie.title} title={movie.title} listIndex={index + 1} clicked={onListItemClick} />
          ))}
        </List>
      </Fade>
    )
  }
}

export default Movies;