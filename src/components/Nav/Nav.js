import React from 'react';
import { Link } from 'react-router-dom';

import './Nav.scss';
import logo from '../../img/pool-pros-logo.png';
import MobileMenuBtn from '../MobileMenuBtn/MobileMenuBtn';
import MobileMenuContainer from '../../containers/MobileMenuContainer';
import FindProBtn from '../FindProBtn/FindProBtn';
import CommercialIcon from '../../img/action-commercial-icon.png';

function Nav(props) {
  return (
    <div className="Nav">
      <div className="Nav__top">
        <Link className="Nav__top__link" to="">
          Dealers and Distributors
        </Link>
        <Link className="Nav__top__link" to="">
          Commercial Service <img className="Nav__top__commercial-icon" src={CommercialIcon} />
        </Link>
      </div>

      <nav className="Nav__bottom flex--center--btw">
        <img className="Nav__bottom__logo" src={logo} alt="PoolPros Logo" />
        <div className="Nav__bottom--right">
          <ul className="Nav__bottom__links flex--center">
            <Link className="Nav__bottom__link" to=""><li>Pools & Spas</li></Link>
            <Link className="Nav__bottom__link" to=""><li>Supplies</li></Link>
            <Link className="Nav__bottom__link" to=""><li>Resources</li></Link>
            <Link className="Nav__bottom__link" to=""><li>Services</li></Link>
          </ul>
          <FindProBtn />
          <MobileMenuBtn handleMouseDown={props.handleMouseDown} />
          <MobileMenuContainer handleMouseDown={props.handleMouseDown} menuVisibility={props.menuVisibility} />
        </div>
      </nav>
    </div>
  );
}

export default Nav;