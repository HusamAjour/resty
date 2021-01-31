import React, { Component } from 'react';
import '../style/Header.scss';
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <header>
          <h1>RESTy</h1>
        </header>
      </React.Fragment>
    );
  }
}

export default Form;
