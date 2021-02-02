import React, { Component } from 'react';
import superagent from 'superagent';
import '../style/Form.scss';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      method: 'GET',
      url: '',
      body: '',
    };
  }
  changeHanlder = (e) => {
    this.setState({ url: e.target.value });
  };

  changeMethodHanlder = (e) => {
    this.setState({ method: e.target.value });
  };
  hanldeBody = (e) => {
    this.setState({ body: JSON.parse(e.target.value) });
  };
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
      this.props.queries(savedQueries);
    } catch (err) {
      console.log(err);
    }
  };

  render() {
    return (
      <React.Fragment>
        <section className="middle-section">
          <form onSubmit={this.fetchData}>
            <div>
              <label>URL</label>{' '}
              <input
                id="urlText"
                value={this.state.url}
                type="url"
                onChange={this.changeHanlder}
                required
              />
              <button type="submit">Go</button>{' '}
            </div>{' '}
            <div className="radio-btns">
              <label>
                <input
                  type="radio"
                  name="method"
                  value="GET"
                  id="get"
                  defaultChecked
                  onClick={this.changeMethodHanlder}
                />
                GET
              </label>

              <label>
                <input
                  type="radio"
                  name="method"
                  value="POST"
                  id="post"
                  onClick={this.changeMethodHanlder}
                />
                POST
              </label>
              <label>
                <input
                  type="radio"
                  name="method"
                  value="PUT"
                  id="put"
                  onClick={this.changeMethodHanlder}
                />
                PUT
              </label>
              <label>
                <input
                  type="radio"
                  name="method"
                  value="DELETE"
                  id="delete"
                  onClick={this.changeMethodHanlder}
                />
                DELETE
              </label>
            </div>
            <div>
              <label>body</label>
              <textarea value={this.state.body} onChange={this.hanldeBody} />
            </div>
          </form>
        </section>
      </React.Fragment>
    );
  }
}

export default Form;
