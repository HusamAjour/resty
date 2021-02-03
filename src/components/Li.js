import React, {Component} from 'react';
import '../style/Li.scss';

class Li extends Component {
  constructor(props) {
    super(props);
    this.state = {
      method: this.props.queryMethod || '',
      url: this.props.queryUrl || '',
      body: this.props.queryBody || '',
    };
  }
  assignParams = () => {
    this.props.getLiParams(this.state.method, this.state.url, this.state.body);
  };
  render() {
    return (
      <li key={this.props.id}>
        <span className={this.props.queryMethod} onClick={this.assignParams}>
          {this.props.queryMethod}
        </span>
        {this.props.queryUrl}
      </li>
    );
  }
}

export default Li;
