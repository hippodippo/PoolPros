import React, { Component } from 'react';
import axios from 'axios';
import './FindProPage.scss';
import FilterContainer from '../../containers/FilterContainer';
// import CardContainer from '../../containers/CardContainer';

class FindProPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dealers: '',
      zipcode: '',
      location: '',
    };
  }

  componentDidMount() {
    // Fetch Data.
    axios.get('http://localhost:3003/api/dealers').then((res) => {
      this.setState({
        dealers: res.data.dealers,
        zipcode: res.data.zipcode,
        location: res.data.location,
      });
    });
  }

  render() {
    return (
      <div className="FindProPage">
        <FilterContainer dealers={this.state.dealers} zipcode={this.state.zipcode}/>
        {/* <CardContainer /> */}
      </div>
    );
  }
}

export default FindProPage;