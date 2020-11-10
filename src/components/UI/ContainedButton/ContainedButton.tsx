import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import './ContainedButton.css';

interface Props {
  title: string;
  route: string;
}

const ContainedButton = (props: Props) => (
	<Link to={props.route}>
  	<Button variant="contained" color="primary" size="large" className="button">{props.title}</Button>
	</Link>
);

export default ContainedButton;
