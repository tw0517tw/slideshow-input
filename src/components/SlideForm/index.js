import React, { Component, PropTypes } from 'react';
import KeywordsList from '../common/KeywordsList';

import styles from './index.css';

export default class SlideForm extends Component {
  static propTypes = {
    saveSlide: PropTypes.func,
  };

  constructor(props, context) {
    super(props, context);
    this.state = {
      keywords: [],
    };
  }

  handleKeywordKeydown = (e) => {
    if (e.keyCode === 13) {
      const keyword = this.refs.keyword.value;
      if (keyword.length > 0) {
        const { keywords } = this.state;
        keywords.push(keyword);
        this.setState({ keywords });
        this.refs.keyword.value = '';
      }
    }
  };

  handleKeywordListClick = (index) => {
    const { keywords } = this.state;
    keywords.splice(index, 1);
    this.setState({ keywords });
  };

  handleSaveClick = () => {
    const { saveSlide } = this.props;
    const { keywords } = this.state;
    const title = this.refs.title.value;
    if (title.length > 0) {
      saveSlide({ title, keywords });
      this.refs.title.value = '';
      this.refs.keyword.value = '';
      this.setState({ keywords: [] });
    }
  };

  render() {
    return (
      <div className={`${styles.container}`}>
        <div className={`form-group ${styles.left}`}>
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" ref="title" />
        </div>
        <div className={`form-group ${styles.mid}`}>
          <label htmlFor="keyword">Keyword (press Enter to add)</label>
          <input
            type="text"
            className="form-control"
            id="keyword"
            ref="keyword"
            onKeyDown={this.handleKeywordKeydown}
          />
          <KeywordsList keywords={this.state.keywords} onItemClick={this.handleKeywordListClick} />
        </div>
        <div className={`${styles.right}`}>
          <button className="btn btn-success" onClick={this.handleSaveClick}>儲存</button>
        </div>
      </div>
    );
  }
}
