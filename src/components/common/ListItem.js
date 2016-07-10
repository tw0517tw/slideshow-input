import React, { Component, PropTypes } from 'react';

import styles from './ListItem.css';

export default class ListItem extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    index: PropTypes.number.isRequired,
    onItemClick: PropTypes.func,
  };

  handleClick = () => {
    const { onItemClick, index } = this.props;
    if (onItemClick) {
      onItemClick(index);
    }
  }

  render() {
    return (
      <li onClick={this.handleClick} className={styles.li}>{this.props.value}</li>
    );
  }
}
