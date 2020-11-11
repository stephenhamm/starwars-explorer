import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import List from '@material-ui/core/List';
import { CircularProgress } from '@material-ui/core';
import { getPeople } from "../../store/actions/index";
import Person from '../../types/Person';
import { RootState } from '../../store/reducers/index';
import ListItemRow from '../../components/UI/ListItemRow/ListItemRow';
import './People.css';

const People = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  let people = useSelector((state: RootState) => {
    return state.peopleReducer.people;
  });

  let loading = useSelector((state: RootState) => {
    return state.peopleReducer.loading;
  });

  useEffect(() => {
    dispatch(getPeople());
  }, [dispatch])

  const onListItemClick = (index: number) => {
    history.push(`/person/${index}`);
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
        {people.map((person: Person, index: number) => (
          <ListItemRow key={person.name} title={person.name} listIndex={index + 1} clicked={onListItemClick} />
        ))}
      </List>
    )
  }
}

export default People;