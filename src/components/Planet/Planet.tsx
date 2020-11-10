import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import { RootState } from '../../store/reducers/index';
import { getPlanet } from '../../store/actions';
import './Planet.css';

const Planet = () => {
  const dispatch = useDispatch();
  const location = useLocation().pathname;

  let planet = useSelector((state: RootState) => {
    return state.planetsReducer.planet;
  });

  let loading = useSelector((state: RootState) => {
    return state.planetsReducer.loading;
  });

  useEffect(() => {
    const routerLocation = location.split("/");
    const id = routerLocation[routerLocation.length - 1];
    dispatch(getPlanet(id));
  }, [dispatch, location])

  if (loading === true) {
    return (
      <div className="loading">
        <CircularProgress size="5rem" />
      </div>
    );
  } else {
    return (
      <h1>{planet.name}</h1>
    );
  }
}
  
export default Planet;