import React, { Component, Fragment } from 'react';
import MobileMenu from '../components/MobileMenu/MobileMenu';

class MobileMenuContainer extends Component {
  render() {
    let visibility = 'hide';

    if (this.props.menuVisibility) {
      visibility = 'show';
    }

    return (
      <Fragment>
        <MobileMenu handleMouseDown={this.props.handleMouseDown} visibility={visibility} />
      </Fragment>
    );
  }
}

export default MobileMenuContainer;