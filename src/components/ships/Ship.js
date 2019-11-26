import React, {Fragment}  from 'react';
import {Link} from 'react-router-dom';

const Ship = (props) => {

	if(!props.ship){
		return "Loading..."
	}

	const url = "/ships/" + props.ship.id;

		return (
			<Fragment>
				<Link to={url} className="name">
				{props.ship.name} </Link>
				<p>Ship Name: {props.ship.name}</p>
			</Fragment>
		)
	}

export default Ship;
