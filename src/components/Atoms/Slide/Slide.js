import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Slide.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

class Slide extends Component{

  render(){
    return(
      <div className={cx('slideImg')}>
        <dl className={cx('sliderTxt')}>
          <Link to="news">
            <dt className={cx('sliderTitle')}>{this.props.title}</dt>
            <dd className={cx('sliderDate')}>{this.props.date}</dd>
          </Link>
        </dl>
        <img src={`/assets/${this.props.img}`} alt="bannerImg"/>
      </div>
    );
  }
}

export default Slide;
