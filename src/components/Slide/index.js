import React, { Component, PropTypes } from 'react';

import styles from './index.css';

export default class Slide extends Component {
  static propTypes = {
    slide: PropTypes.object.isRequired,
  };

  render() {
    const { title, keywords } = this.props.slide;
    const keywordsNodes = keywords.map((keyword, i) => (
      <div key={i} className={styles.keyword}>{keyword}</div>
    ));
    return (
      <div className={styles.container}>
        <div className={styles.title}>{title}</div>
        <div clsssName={styles.keywordContainer}>
          {keywordsNodes}
        </div>
      </div>
    );
  }
}
