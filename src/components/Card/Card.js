import React from 'react';
import './Card.scss';

function Card(props) {
  return (
    <div className="Container">
      <div className="Card">
        <header className="Card__title">{/* props.name */} Pool Pros</header>
        <div className="Card__content">
          {/* <MobileCallBtn /> */}
          <div className="Card__content__number">
            {/* <img src={phoneIcon} /> */}
            <h1>{/* props.number */}1777777</h1>
          </div>
          <p><em>Can't talk now? Click below to send an email.</em></p>
          <div className="Card__content__btn">
            {/* <img src={emailIcon} /> */}
            <p>Contact this Pro</p>
          </div>
          <div className="Card__content__hours">
            <h3>Business Hours</h3>
            <ul>
              <li>Weekdays {/* this.props.hours["weekdays"] */}</li>
              <li>Saturdays {/* this.props.hours["saturdays"] */}</li>
              <li>Sundays - {/* this.props.hours["sundays"] */}</li>
            </ul>
          </div>
          <footer className="Card__content__certifications">
            <ul>
              <div className="Card__content__certifications__first-row">
                <li>howdy</li>
                <li>howdy</li>
              </div>
              <div className="Card__content__certifications__second-row">
                <li>howdy</li>
                <li>howdy</li>
              </div>
            </ul>
          </footer>
        </div>
      </div>
    </div>
  );
}

export default Card;