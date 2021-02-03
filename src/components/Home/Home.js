import React, { Component } from 'react';
import superagent from 'superagent';
import Form from './Form';
import Results from '../Results';
import Section from '../Section';
import APIList from './APIList';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      method: 'GET',
      url: '',
      body: '',
    };
  }
  fetchData = async (e) => {
    e.preventDefault();
    let results;
    if (
      this.state.method === 'POST' ||
      this.state.method === 'PUT' ||
      this.state.method === 'DELETE'
    ) {
      results = await superagent(this.state.method, this.state.url).send(
        this.state.body
      );
      console.log('status ====================>', results);
    } else {
      results = await superagent(this.state.method, this.state.url);
    }
    try {
      let savedQueries = JSON.parse(localStorage.getItem('queries'));
      let objExists = savedQueries.some((obj) => {
        if (
          obj.body === this.state.body &&
          obj.url === this.state.url &&
          obj.method === this.state.method
        ) {
          return true;
        } else {
          return false;
        }
      });

      if (!objExists) {
        savedQueries.push({
          method: this.state.method,
          body: this.state.body,
          url: this.state.url,
        });
      }
      this.props.getData(results.headers, results.body);    
      this.props.addQueries(savedQueries);
    } catch (err) {
      console.log(err);
    }
  };

  changeHanlder = (e) => {
    this.setState({ url: e.target.value });
  };

  changeMethodHanlder = (e) => {
    this.setState({ method: e.target.value });
  };
  hanldeBody = (e) => {
    this.setState({ body: JSON.parse(e.target.value) });
  };

  fillForm = (method, url, body) => {
    this.setState({ method, url, body });
    console.log(this.state.method, this.state.url, this.state.body);
  };
  render() {
    return (
      <React.Fragment>
        <Form
          params={{
            body: this.state.body,
            url: this.state.url,
            method: this.state.method,
          }}
          updateBody={this.hanldeBody}
          getData={this.props.getData}
          updateMethod={this.changeMethodHanlder}
          updateUrl={this.changeHanlder}
          submitForm={this.fetchData}
        />
        <Section>
          <APIList
            queries={this.props.queries}
            getClickedQuery={this.fillForm}
          />
          <Results receviedAPIResult={this.props.apiData} />
        </Section>
      </React.Fragment>
    );
  }
}

export default Home;
