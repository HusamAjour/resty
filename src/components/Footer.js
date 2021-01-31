import React, { Component } from 'react';
import '../style/Footer.scss';
class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <footer>
          <h4>© 2021 Code Fellows</h4>
        </footer>
      </React.Fragment>
    );
  }
}

export default Form;
