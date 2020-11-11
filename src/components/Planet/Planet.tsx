import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";
import { CircularProgress } from '@material-ui/core';
import Icon from '@material-ui/icons/Public';
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
        <CircularProgress size="5rem" color="inherit" />
      </div>
    );
  } else {
    return (
      <Fade>
        <div className="planet-info">
          <div className="planet-info-inner">
            <Icon className="avatar-icon"/>       
            <div className="additional-info">
              <span className="planet-name">{planet.name}</span>
              <div>
                <span className="attribute-name">Terrain: </span>
                <span className="attribute">{planet.terrain}</span>
              </div>
              <div>
                <span className="attribute-name">Population: </span>
                <span className="attribute">{planet.population}</span>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}
  
export default Planet;