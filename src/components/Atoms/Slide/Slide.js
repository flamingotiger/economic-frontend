import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Slide.scss';

const cx = classNames.bind(styles);

class Slide extends Component{

  render(){
    return(
      <div className={cx('Slide')}>
        <dl className={cx('SliderTxt')}>
          <dt className={cx('SliderTitle')}>{this.props.title}</dt>
          <dd className={cx('SliderDate')}>{this.props.date}</dd>
        </dl>
        <img src={`/assets/${this.props.img}`} alt="bannerImg"/>
      </div>
    );
  }
}

export default Slide;
