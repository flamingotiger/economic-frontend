import React from 'react';
import styles from './HomeStartUpPost.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const HomeStartUpPost = ({subTitle, text, img}) => {
  return (
    <li className={cx('post')}>
      <div className={cx('img')}><img src={img} alt="img"/></div>
      <div className={cx('subTitle')}>{subTitle}</div>
      <div className={cx('text')}>{text}</div>
    </li>
  )
}

export default HomeStartUpPost;
