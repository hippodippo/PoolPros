import React, { Component, Fragment } from 'react';
import Card from '../components/Card/Card';
import utils from '../utils/utils';

class CardContainer extends Component {
  render() {
    // const cards = [];
    // const {
    //   names, numbers, hours, certifications, certsFilter,
    // } = this.props;
    // const { length } = names;
    // const certs = certsFilter.map((el, index, arr) => (arr[index].status === true ? arr[index].name : null));

    // for (let i = 0; i < length; i += 1) {
    //   // if () {
    //   cards.push(<Card key={i} name={names[i]} number={numbers[i]} hours={hours[i]} certifications={certifications[i]} />);
    //   // }

    //   for (let j = 0; j < certifications[i].length; j += 1) {
    //     //
    //   }
    // }
    // certifications[0].toLowercase().includes(certs[0]); -> true
    // this.props.certifications / this.props.certsFilter

    const { certsFilter, dealers } = this.props;
    const companies = utils.getSelectedCompanies(certsFilter, dealers);

    return (
      <Fragment>
        <h1>Cards</h1>
      </Fragment>
    );
  }
}

export default CardContainer;