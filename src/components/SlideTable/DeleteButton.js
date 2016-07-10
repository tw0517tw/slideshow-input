import React, { Component, PropTypes } from 'react';

export default class DeleteButton extends Component {
  static propTypes = {
    index: PropTypes.number.isRequired,
    onButtonClick: PropTypes.func,
  };

  handleClick = () => {
    const { onButtonClick, index } = this.props;
    onButtonClick(index);
  }

  render() {
    return (
      <button onClick={this.handleClick} className="btn btn-danger">刪除</button>
    );
  }
}
