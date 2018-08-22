import React from 'react';
import PropTypes from 'prop-types';
import './Header.scss';

function Header(props) {
  return (
    <header className="Header">
      <h1 className="Header-title">{this.props.children}</h1>
    </header>
  );
}

Header.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Header;