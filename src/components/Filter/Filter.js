import React from 'react';
import './Filter.scss';

function Filter(props) {
  const radioToggle = 'radio-off';

  return (
      <form className="Filter">
        <div className="Filter__headings">
          <p className="Filter__headings__dealers">{props.numberOfDealers} dealers in {props.zipcode}</p>
          <p className="Filter__headings__filter">Filter Results</p>
        </div>

        <div className="Filter__inputs">
          <div className="Filter__input">
            <input type="checkbox" value="email" />
            <label>Service</label>
          </div>

          <div className="Filter__input">
            <input type="checkbox" id="contactChoice2" value="phone" />
            <label>Installation</label>
          </div>

          <div className="Filter__input">
            <input type="checkbox" id="contactChoice3" value="mail" />
            <label>Residential</label>
          </div>

          <div className="Filter__input">
            <input type="checkbox" id="contactChoice3" value="mail" />
            <label>Commercial</label>
          </div>
        </div>
      </form>
  );
}

// To toggle the on and off radio buttons use images that switch from on.png to off.png.
// https://www.wufoo.com/guides/custom-radio-buttons-and-checkboxes/

export default Filter;