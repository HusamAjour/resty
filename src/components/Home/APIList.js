import React, { Component } from 'react';
import Section from '../Section';
import Li from '../Li';

class APIList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Section sectionClass="api-list">
        <ul>
          {this.props.queries.reverse().map((query, index) => {
            return (
              <Li
                key={index}
                id={index}
                queryMethod={query.method}
                queryUrl={query.url}
                queryBody={query.body}
                getLiParams={this.props.getClickedQuery}
              />
            );
          })}
        </ul>
      </Section>
    );
  }
}

export default APIList;
