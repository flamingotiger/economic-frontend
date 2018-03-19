import React from 'react';
import styles from './NewsDetailPost.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const NewsDetailPost = ({cate,subTitle, text, img}) => {
  return (
    <li className={cx('post')}>
      <div className={cx('cate')}>{cate}</div>
      <div className={cx('img')}><img src={img} alt="img"/></div>
      <div className={cx('subTitle')}>{subTitle}</div>
      <div className={cx('text')}>{text}</div>
    </li>
  )
}

export default NewsDetailPost;
