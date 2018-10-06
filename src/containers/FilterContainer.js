import React, { Component, Fragment } from 'react';
import Filter from '../components/Filter/Filter';

class FilterContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dealers: '',
      certifications: [false, false, false, false],
    };
  }

  render() {
    return (
      <Fragment>
        <Filter numberOfDealers={this.props.numberOfDealers} zipcode={this.props.zipcode} handleChange={this.props.handleChange}/>
      </Fragment>
    );
  }
}

export default FilterContainer;