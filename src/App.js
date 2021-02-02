import React from 'react';
import Header from './components/Header';
import Form from './components/Form';
import Main from './components/Main';
import Footer from './components/Footer';
import Results from './components/Results';
import History from './components/History';

import './App.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    if (!localStorage.getItem('queries')) {
      localStorage.setItem('queries', JSON.stringify([]));
    }
    this.state = {
      headers: [],
      results: [],
      queries: JSON.parse(localStorage.getItem('queries')),
      url: '',
      method: '',
      body: '',
    };
  }

  fetchDataHandler = (headers, results) => {
    this.setState({ headers, results });
  };
  //<Results receviedHeaders={this.state.headers} receviedResults={this.state.results}/>
  updateQueries = (queries) => {
    localStorage.setItem('queries', JSON.stringify(queries));
    console.log(JSON.parse(localStorage.getItem('queries')));
    console.log('state =========>', this.state.queries);
    this.setState({ queries: JSON.parse(localStorage.getItem('queries')) });
  };

  getHistoryQuery = (method, url, body) => {
    this.setState({ method, url, body });
  };

  render() {
    return (
      <React.Fragment>
        <Header />
        <Form getData={this.fetchDataHandler} queries={this.updateQueries} historyCall = {{method: this.state.method, url: this.state.url, body: this.state.body }} />
        <Main>
          <History
            queries={this.state.queries}
            getQuery={this.getHistoryQuery}
          />
          <Results>
            {JSON.stringify(
              {
                Headers: this.state.headers,
                Results: this.state.results,
              },
              null,
              2
            )}
          </Results>
        </Main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
