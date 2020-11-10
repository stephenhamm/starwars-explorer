import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import List from '@material-ui/core/List';
import { getMovies } from "../../store/actions/index";
import Movie from '../../types/Movie/Movie';
import { RootState } from '../../store/reducers/index';
import ListItemRow from '../../components/UI/ListItemRow/ListItemRow';

const Movies = () => {
  const dispatch = useDispatch();

  let userData = useSelector((state: RootState) => {
    return state.moviesReducer.movies;
  });

  useEffect(() => {
    dispatch(getMovies());
  }, [dispatch])

  return (
    <List>
      {userData.map((movie: Movie) => (
        <ListItemRow title={movie.title} key={movie.title}/>
      ))}
    </List>
  );
}

export default Movies;