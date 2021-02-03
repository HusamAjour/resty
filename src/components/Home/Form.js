import React, { Component } from 'react';
import '../../style/Form.scss';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <React.Fragment>
        <section className="middle-section">
          <form onSubmit={this.props.submitForm}>
            <div>
              <label>URL</label>
              <input
                id="urlText"
                value={this.props.params.url}
                type="url"
                onChange={this.props.updateUrl}
                required
              />
              <button type="submit">Go</button>
            </div>
            <div className="radio-btns">
              <label>
                <input
                  type="radio"
                  name="method"
                  value="GET"
                  id="get"
                  defaultChecked
                  onClick={this.props.updateMethod}
                />
                GET
              </label>

              <label>
                <input
                  type="radio"
                  name="method"
                  value="POST"
                  id="post"
                  onClick={this.props.updateMethod}
                />
                POST
              </label>
              <label>
                <input
                  type="radio"
                  name="method"
                  value="PUT"
                  id="put"
                  onClick={this.props.updateMethod}
                />
                PUT
              </label>
              <label>
                <input
                  type="radio"
                  name="method"
                  value="DELETE"
                  id="delete"
                  onClick={this.props.updateMethod}
                />
                DELETE
              </label>
            </div>
            <div>
              <label>body</label>
              <textarea
                onChange={this.props.updateBody}
              />
            </div>
          </form>
        </section>
      </React.Fragment>
    );
  }
}

export default Form;
