import React, { Component } from 'react';
import axios from 'axios';
import './FindProPage.scss';
import FilterContainer from '../../containers/FilterContainer';
import CardContainer from '../../containers/CardContainer';

class FindProPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dealers: '',
      names: [],
      numbers: [],
      hours: [],
      certifications: [],
      zipcode: '',
      location: '',
      certsFilter: [ // For the checkboxes.
        { name: 'Service Pro', status: false },
        { name: 'Installation Pro', status: false },
        { name: 'Residential Pro', status: false },
        { name: 'Commercial Pro', status: false },
      ],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    // Fetch Data.
    axios.all([
      axios.get('http://localhost:3003/api/data'),
      axios.get('http://localhost:3003/api/dealers'),
    ]).then(axios.spread((dataRes, dealersRes) => {
      // For some unknown reason, it wont let me access the properties
      // through dot notation unless I do it within the axios call.
      // This is a quick fix so I can finish this project sooner.
      const theNames = dealersRes.data.map((el, index, arr) => arr[index].name);
      const theNumbers = dealersRes.data.map((el, index, arr) => arr[index].phone1);
      const theHours = dealersRes.data.map((el, index, arr) => arr[index].weekHours);
      const theCertifications = dealersRes.data.map((el, index, arr) => arr[index].certifications);

      this.setState({
        dealers: dealersRes.data,
        zipcode: dataRes.data.zipcode,
        location: dataRes.data.location,
        names: theNames,
        numbers: theNumbers,
        hours: theHours,
        certifications: theCertifications,
      });
    }));
  }

  // Method for checkbox's in Filter Component
  handleChange(e) {
    const certs = this.state.certsFilter;
    const { certifications } = this.state;
    const { value } = e.target;

    console.log(value);

    // for (let x = 0; x < certs.length; x += 1) {
    //   if (certs[x].name === e.target.name) {
    //     certs[x].status = e.target.checked;
    //   }
    // }

    // this.setState({
    //   certsFilter: certs,
    // });
  }

  render() {
    return (
      <div className="FindProPage">
        <FilterContainer
         numberOfDealers={this.state.dealers.length}
         zipcode={this.state.zipcode}
         handleChange={this.handleChange}
        />
        {/* <CardContainer
         dealers={this.state.dealers}
         names={this.state.names}
         numbers={this.state.numbers}
         hours={this.state.hours}
         certifications={this.state.certifications}
         certsFilter={this.state.certsFilter}
        /> */}
      </div>
    );
  }
}

export default FindProPage;