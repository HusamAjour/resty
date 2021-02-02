import React, { Component } from 'react';
import '../style/Main.scss';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <section className="history-results-container">
       {this.props.children}
      </section>
    );
  }
}

export default Main;
