import React, { Component, PropTypes } from 'react';
import ListItem from './ListItem.js';

export default class KeywordsList extends Component {
  static propTypes = {
    keywords: PropTypes.array.isRequired,
    onItemClick: PropTypes.func,
  };

  render() {
    const { keywords, onItemClick } = this.props;
    const keywordItems = keywords.map((k, i) => (
      <ListItem key={i} value={k} index={i} onItemClick={onItemClick} />
    ));
    return (
      <ul>
        {keywordItems}
      </ul>
    );
  }
}

