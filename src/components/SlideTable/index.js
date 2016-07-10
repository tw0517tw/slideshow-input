import React, { Component, PropTypes } from 'react';

import DeleteButton from './DeleteButton';
import KeywordsList from '../common/KeywordsList';

export default class SlideTable extends Component {
  static propTypes = {
    slides: PropTypes.array.isRequired,
    deleteSlide: PropTypes.func,
  };

  handleDeleteClick = (index) => {
    const { deleteSlide } = this.props;
    deleteSlide(index);
  };

  render() {
    const tableRows = this.props.slides.map((slide, i) => (
      <tr key={i}>
        <td>{slide.title}</td>
        <td><KeywordsList keywords={slide.keywords} /></td>
        <td><DeleteButton index={i} onButtonClick={this.handleDeleteClick} /></td>
      </tr>
    ));
    return (
      <div>
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Title</th>
              <th>Keywords</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {tableRows}
          </tbody>
        </table>
      </div>
    );
  }
}
