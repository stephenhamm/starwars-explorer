import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import List from '@material-ui/core/List';
import { getPlanets } from "../../store/actions/index";
import Planet from '../../types/Planet/Planet';
import { RootState } from '../../store/reducers/index';
import ListItemRow from '../../components/UI/ListItemRow/ListItemRow';

const Planets = () => {
  const dispatch = useDispatch();

  let userData = useSelector((state: RootState) => {
    return state.planetsReducer.planets;
  });

  useEffect(() => {
    dispatch(getPlanets());
  }, [dispatch])

  return (
    <List>
      {userData.map((planet: Planet) => (
        <ListItemRow title={planet.name} key={planet.name}/>
      ))}
    </List>
  );
}

export default Planets;