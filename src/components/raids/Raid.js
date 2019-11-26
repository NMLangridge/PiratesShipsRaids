import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';

const Raid = (props) => {

  if(!props.raid){
    return "Loading..."
  }

  const url = "/raids/" + props.raid.id;

  return (
    <Fragment>
      <Link to={url} className="name">
      {props.raid.location}</Link>
      <p>Loot: {props.raid.loot}</p>
    </Fragment>
  )
}

export default Raid;
