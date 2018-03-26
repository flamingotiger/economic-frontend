import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Slide.scss';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

class Slide extends Component{

  render(){
    const { title, date, img } = this.props.Slide;
    return(
      <div className={cx('slideImg')}>
        <dl className={cx('sliderTxt')}>
          <Link to="news/list">
            <dt className={cx('sliderTitle')}>{title}</dt>
            <dd className={cx('sliderDate')}>{date}</dd>
          </Link>
        </dl>
        <img src={`/assets/${img}`} alt="bannerImg"/>
      </div>
    );
  }
}

export default Slide;
