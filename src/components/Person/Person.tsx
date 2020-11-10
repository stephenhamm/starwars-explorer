import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import { CircularProgress } from '@material-ui/core';
import { RootState } from '../../store/reducers/index';
import { getPerson } from '../../store/actions';
import './Person.css';

const Person = () => {
  const dispatch = useDispatch();
  const location = useLocation().pathname;
  
  let person = useSelector((state: RootState) => {
    return state.peopleReducer.person;
  });

  let loading = useSelector((state: RootState) => {
    return state.peopleReducer.loading;
  });

  useEffect(() => {
    const id = location.charAt(location.length - 1);
    dispatch(getPerson(id));
  }, [dispatch, location])

  if (loading === true) {
    return (
      <div className="loading">
        <CircularProgress size="5rem" />
      </div>
    );
  } else {
    return (
      <h1>{person.name}</h1>
    );
  }
}
  
export default Person;