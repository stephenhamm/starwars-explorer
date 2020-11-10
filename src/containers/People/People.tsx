import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import List from '@material-ui/core/List';
import { getPeople } from "../../store/actions/index";
import Person from '../../types/Person/Person';
import { RootState } from '../../store/reducers/index';
import ListItemRow from '../../components/UI/ListItemRow/ListItemRow';

const People = () => {
  const dispatch = useDispatch();

  let userData = useSelector((state: RootState) => {
    return state.peopleReducer.people;
  });

  useEffect(() => {
    dispatch(getPeople());
  }, [dispatch])

  return (
    <List>
      {userData.map((person: Person) => (
        <ListItemRow title={person.name} key={person.name}/>
      ))}
    </List>
  );
}

export default People;