import React, { Component } from 'react';
import '../style/Results.scss';
import ReactJson from 'react-json-view';

class Results extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (
      this.props.receviedAPIResult.Headers &&
      this.props.receviedAPIResult.Results
    ) {
      return (
        <React.Fragment>
          <section className="results-block">
            <div className="form-result">
              <h4>Headers:</h4>
              <ReactJson src={this.props.receviedAPIResult.Headers} />
              <h4>Results:</h4>
              <ReactJson src={this.props.receviedAPIResult.Results} />
            </div>
          </section>
        </React.Fragment>
      );
    } else {
      <React.Fragment>
        <section className="results-block">
          <div className="form-result"></div>
        </section>
      </React.Fragment>;
    }
  }
}

export default Results;
