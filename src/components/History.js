import React, { Component } from 'react';
import Li from './Li';
import '../style/History.scss';

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    if (this.props.queries) {
      return (
        <React.Fragment>
          <section className="history-section">
            <ul>
              {this.props.queries.reverse().map((query, index) => {
                return <Li key={index} id={index} methodName={query.method} queryUrl={query.url} queryBody={query.body} getLiParams={this.props.getQuery}/>;
              })}
            </ul>
          </section>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <section className="history-section">
            <ul></ul>
          </section>
        </React.Fragment>
      );
    }
  }
}

export default History;
