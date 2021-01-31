import React, { Component } from 'react';
import '../style/Form.scss';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = { method: '', url: '' };
  }
  changeHanlder = (e) => {
    this.setState({ url: e.target.value });
  };

  changeMethodHanlder = (e) => {
    this.setState({ method: e.target.value });
  };

  setValues = (e) => {
    e.preventDefault();
    let par = document.getElementById('resultText');
    par.innerHTML = `<p><span>${this.state.method}</span> ${this.state.url}</p>`;
    this.setState({ url: '' });
  };

  render() {
    return (
      <React.Fragment>
        <section className="middle-section">
          <form onSubmit={this.setValues}>
            <div>
              <label>URL</label>
              <input
                id="urlText"
                value={this.state.url}
                type="url"
                onChange={this.changeHanlder}
                required
              />
              <button type="submit">Go</button>
            </div>
            <div className="radio-btns">
              <label for="get">
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
              <label for="post">
                <input
                  type="radio"
                  name="method"
                  value="POST"
                  id="post"
                  onClick={this.changeMethodHanlder}
                />{' '}
                POST
              </label>

              <label for="put">
                <input
                  type="radio"
                  name="method"
                  value="PUT"
                  id="put"
                  onClick={this.changeMethodHanlder}
                />
                PUT
              </label>

              <label for="delete">
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
          <section className="form-result" id="resultText"></section>
        </section>
      </React.Fragment>
    );
  }
}

export default Form;
