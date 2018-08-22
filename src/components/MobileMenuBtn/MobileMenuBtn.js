import React from 'react';
import PropTypes from 'prop-types';
import './MobileMenuBtn.scss';
import menuBtn from '../../img/menu-icon-mobile.png';

function MobileMenuBtn(props) {
  return (
    <img src={menuBtn} className="menu-btn"
         onMouseDown={props.handleMouseDown}/>
  );
}

export default MobileMenuBtn;