import React from 'react';
import './Filter.scss';
import FilterResultsBtn from '../../img/filter-results-icon.png';

function Filter(props) {
  return (
      <form className="Filter">
        <header className="Filter__headings">
          <div className="Filter__headings--left">
            <p className="Filter__headings__dealers">
              {props.numberOfDealers} dealers in {props.zipcode}
            </p>
          </div>
          <div className="Filter__headings--right">
            <div className="Filter__headings">
              <p className="Filter__headings__filter">
                Filter Results
              </p>
              {/* <button className="Filter__headings--right__FilterResultsBtn">
                <img src={FilterResultsBtn} alt="Filter Results Button" />
              </button> */}
            </div>
          </div>
        </header>

        <fieldset>
          <div className="Filter__inputs">
            <div className="Filter__input">
              <input type="checkbox" name="service" id="service" class="css-checkbox" value="Service Pro" onChange={e => props.handleChange(e)}/><label for="service" class="css-label">Service</label>
            </div>

            <div className="Filter__input">
              <input type="checkbox" name="installation" id="installation" class="css-checkbox" value="Installation Pro" onChange={e => props.handleChange(e)} /><label for="installation" class="css-label">Installation</label>
            </div>

            <div className="Filter__input">
              <input type="checkbox" name="residential" id="residential" class="css-checkbox" value="Residential Pro" onChange={e => props.handleChange(e)} /><label for="residential" class="css-label">Residential</label>
            </div>

            <div className="Filter__input">
              <input type="checkbox" name="commercial" id="commercial" class="css-checkbox" value="Commercial Pro" onChange={e => props.handleChange(e)} /><label for="commercial" class="css-label">Commercial</label>
            </div>
          </div>
        </fieldset>
      </form>
  );
}

// To toggle the on and off radio buttons use images that switch from on.png to off.png.
// https://www.wufoo.com/guides/custom-radio-buttons-and-checkboxes/

export default Filter;