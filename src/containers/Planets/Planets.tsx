import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import List from '@material-ui/core/List';
import { CircularProgress } from '@material-ui/core';
import { getPlanets } from "../../store/actions/index";
import Planet from '../../types/Planet';
import { RootState } from '../../store/reducers/index';
import ListItemRow from '../../components/UI/ListItemRow/ListItemRow';
import './Planets.css';

const Planets = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  let planets = useSelector((state: RootState) => {
    return state.planetsReducer.planets;
  });

  let loading = useSelector((state: RootState) => {
    return state.planetsReducer.loading;
  });

  useEffect(() => {
    dispatch(getPlanets());
  }, [dispatch])

  const onListItemClick = (index: number) => {
    history.push(`/planet/${index}`);
  }

  if (loading === true) {
    return (
      <div className="loading">
        <CircularProgress size="5rem" color="inherit" />
      </div>
    )
  } else {
    return ( 
      <List>
        {planets.map((planet: Planet, index: number) => (
          <ListItemRow key={planet.name} title={planet.name} listIndex={index + 1} clicked={onListItemClick} />
        ))}
      </List>
    )
  }
}

export default Planets;