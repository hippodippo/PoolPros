import React, { Component, Fragment } from 'react';
import Card from '../components/Card/Card';

class CardContainer extends Component {
  render() {
    return (
      <Fragment>
        <Card data={'data'} />
      </Fragment>
    );
  }
}

export default CardContainer;