import React, { Component } from 'react';
import Slider from 'react-slick';

import Slide from '../Slide';
import SlideForm from '../SlideForm';
import SlideTable from '../SlideTable';

import styles from './index.css';

const sliderOption = {
  autoplay: true,
  autoplaySpeed: 3500,
  dots: false,
};

export default class Root extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      showSlide: false,
      slides: [],
    };
  }

  deleteSlide = (index) => {
    const { slides } = this.state;
    slides.splice(index, 1);
    this.setState({ slides });
  };

  saveSlide = (slide) => {
    const { slides } = this.state;
    slides.push(slide);
    this.setState({
      ...this.state,
      slides,
    });
  };

  handleShowSlideClick = () => {
    this.setState({
      ...this.state,
      showSlide: !this.state.showSlide,
    });
  };

  render() {
    if (this.state.showSlide) {
      const slides = this.state.slides.map((slide, i) => (
        <div className={styles.slide}>
          <Slide key={i} slide={slide} />
        </div>
      ));
      return (
        <div className={styles.slideOuterContainer}>
          <div className={styles.slideContainer}>
            <button
              className={`btn btn-info btn-lg ${styles.exitBtn}`}
              onClick={this.handleShowSlideClick}
            >
              離開投影片
            </button>
            <Slider {...sliderOption}>
              {slides}
            </Slider>
          </div>
        </div>
      );
    }
    return (
      <div className={styles.container}>
        <div className={styles.top}>
          <SlideForm saveSlide={this.saveSlide} />
        </div>
        <div>
          <button
            className="btn btn-info btn-lg"
            onClick={this.handleShowSlideClick}
          >
            進入投影片
          </button>
        </div>
        <div className={styles.bottom}>
          <SlideTable slides={this.state.slides} deleteSlide={this.deleteSlide} />
        </div>
      </div>
    );
  }
}
