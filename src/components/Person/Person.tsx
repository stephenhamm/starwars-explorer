import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";
import { CircularProgress } from '@material-ui/core';
import Icon from '@material-ui/icons/AccountCircle';
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
    const routerLocation = location.split("/");
    const id = routerLocation[routerLocation.length - 1];
    dispatch(getPerson(id));
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
        <div className="person-info">
          <div className="person-info-inner">
            <Icon className="avatar-icon"/>       
            <div className="additional-info">
              <span className="person-name">{person.name}</span>
              <div>
                <span className="attribute-name">Height: </span>
                <span className="attribute">{person.height}</span>
              </div>
              <div>
                <span className="attribute-name">Mass: </span>
                <span className="attribute">{person.mass}</span>
              </div>
              <div>
                <span className="attribute-name">Hair Color: </span>
                <span className="attribute">{person.hairColor}</span>
              </div>
              <div>
                <span className="attribute-name">Skin Color: </span>
                <span className="attribute">{person.skinColor}</span>
              </div>
              <div>
                <span className="attribute-name">Gender: </span>
                <span className="attribute">{person.gender}</span>
              </div>
              <div>
                <span className="attribute-name">Birth Year: </span>
                <span className="attribute">Height: {person.birthYear}</span>
              </div>
            </div>
          </div>
        </div>
      </Fade>
    );
  }
}
  
export default Person;