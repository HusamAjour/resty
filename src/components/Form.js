import React, { Component } from 'react';
import '../style/Form.scss';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      method: 'get',
      url: '',
    };
  }
  changeHanlder = (e) => {
    this.setState({ url: e.target.value });
  };

  changeMethodHanlder = (e) => {
    this.setState({ method: e.target.value });
  };

  fetchData = async (e) => {
    e.preventDefault();
    let results = await fetch(this.state.url, {
      method: this.state.method,
    });
    let res = await results.json();
    this.props.getData(res.count, res.results);
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
          </form>
        </section>
      </React.Fragment>
    );
  }
}

export default Form;
