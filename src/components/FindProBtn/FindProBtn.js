import React from 'react';
import { Link } from 'react-router-dom';
import './FindProBtn.scss';
import locationIcon from '../../img/location-icon.png';

function FindProBtn(props) {
  return (
    <Link className="FindProBtn" to="/">
      <img className="FindProBtn__location-icon" src={locationIcon} /> <span>FIND A PRO</span>
    </Link>
  );
}

export default FindProBtn;