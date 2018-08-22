import React from 'react';
import { Link } from 'react-router-dom';
import './MobileMenu.scss';
import Xicon from '../../img/x-icon.png';
import NextArrow from '../../img/next-arrow.png';

function MobileMenu(props) {
  return (
    <div id="Mobile-Menu"
         onMouseDown={props.handleMouseDown}
         className={props.visibility}>
      <img onMouseDown={props.handleMouseDown} className="Mobile-Menu__x-icon" src={Xicon} />

      <h1 className="Mobile-Menu__heading">MENU</h1>

      <ul className="Mobile-Menu__Links">
        <Link className="Mobile-Menu__Link" to="/poolsAndSpas">
          <li>Pools & Spas <img className="Mobile-Menu__Link__next-arrow" src={NextArrow} alt="arrow icon" /></li>
        </Link>
        <Link className="Mobile-Menu__Link" to="/supplies">
          <li>Supplies <img className="Mobile-Menu__Link__next-arrow" src={NextArrow} alt="arrow icon" /></li>
        </Link>
        <Link className="Mobile-Menu__Link" to="/resources">
          <li>Resources <img className="Mobile-Menu__Link__next-arrow" src={NextArrow} alt="arrow icon" /></li>
        </Link>
        <Link className="Mobile-Menu__Link" to="/services">
          <li>Services <img className="Mobile-Menu__Link__next-arrow" src={NextArrow} alt="arrow icon" /></li>
        </Link>
      </ul>
    </div>
  );
}

export default MobileMenu;