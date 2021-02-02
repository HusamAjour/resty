import React, { Component } from 'react';
import '../style/Results.scss';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <section className="results-block">
          <div className="form-result">
            <pre>
              {this.props.children}
                </pre>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Results;
