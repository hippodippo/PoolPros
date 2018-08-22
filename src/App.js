import React, { Component } from 'react';
import './styles/normalize.scss';
import './styles/App.scss';
import Nav from './components/Nav/Nav';
import routes from './routes';
// import Footer from './components/Footer/Footer';
import Wrapper from './components/Wrapper/Wrapper';

class App extends Component {
  constructor(props, context) {
    super(props, context);

    // Set initial state.
    this.state = {
      visible: false,
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
  }

  // Toggles Mobile Menu.
  toggleMenu() {
    this.setState({
      visible: !this.state.visible,
    });
  }

  handleMouseDown(e) {
    this.toggleMenu();

    e.stopPropagation();
  }

  render() {
    return (
      <div className="App">
        <Nav handleMouseDown={this.handleMouseDown} menuVisibility={this.state.visible} />
        <Wrapper>
          { routes }
        </Wrapper>
        {/* <Footer /> */}
      </div>
    );
  }
}

export default App;