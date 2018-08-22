import React, { Component, Fragment } from 'react';
import Header from '../components/Header/Header';

class HeaderContainer extends Component {
  render() {
    return (
      <Fragment>
        <Header data={'data'} />
      </Fragment>
    );
  }
}

export default HeaderContainer;