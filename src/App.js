import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Results from './components/Results';
import Footer from './components/Footer';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      results: [],
    };
  }

  fetchDataHandler = (count, results) => {
    this.setState({count, results});
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <Form getData={this.fetchDataHandler} />
        <Results receviedCount={this.state.count} receviedResults={this.state.results}/>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
