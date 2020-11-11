import React from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import MovieIcon from '@material-ui/icons/Movie';
import PersonIcon from '@material-ui/icons/Person';
import PublicIcon from '@material-ui/icons/Public';
import './ContainedButton.css';

interface Props {
  title: string;
  route: string;
}

const getImage =(title: string) => {
	switch(title) {
		case "People":
			return <PersonIcon />;
		
		case "Movies":
			return <MovieIcon />;

		case "Planets":
			return <PublicIcon />;
		default:
			return null;
	}
}

const ContainedButton = (props: Props) => (
	<Link to={props.route} className="link">
  	<Button variant="contained" color="secondary" size="large" className="button" startIcon={getImage(props.title)}>{props.title}</Button>
	</Link>
);

export default ContainedButton;
