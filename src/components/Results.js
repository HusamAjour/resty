import React, { Component } from 'react';
import JSONPretty from 'react-json-pretty';

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
            {JSON.stringify({"Count": this.props.receviedCount, "Results": this.props.receviedResults}, null, 2)}
                </pre>
          </div>
        </section>
      </React.Fragment>
    );
  }
}

export default Results;
