import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home/Home';
import Main from './components/Main';
import Footer from './components/Footer';
import History from './components/History';
//import Results from './components/Results';

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

  updateQueries = (queries) => {
    localStorage.setItem('queries', JSON.stringify(queries));
    console.log(JSON.parse(localStorage.getItem('queries')));
    console.log('state =========>', this.state.queries);
    this.setState({ queries: JSON.parse(localStorage.getItem('queries')) });
  };

  getHistoryQuery = (method, url, body) => {
    this.setState({ method, url, body });
    console.log(this.state.method, this.state.url, this.state.body);
  };

  render() {
    return (
      <React.Fragment>
        <BrowserRouter>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home
                getData={this.fetchDataHandler}
                queries={this.state.queries}
                apiData={{
                  Headers: this.state.headers,
                  Results: this.state.results,
                }}
                addQueries = {this.updateQueries}
              />
            </Route>
            <Route exact path="/history">
              <Main>
                <History
                  queries={this.state.queries}
                  getQuery={this.getHistoryQuery}
                />
              </Main>{' '}
            </Route>
            <Route exact path="/help">
              <div className="help">
                This front end is to test your api. insert the url and choose
                the method and you can also insert a body if its needed.
              </div>
            </Route>
          </Switch>
          <Main />
          <Footer />
        </BrowserRouter>
      </React.Fragment>
    );
  }
}

export default App;
