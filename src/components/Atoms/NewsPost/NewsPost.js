import React from 'react';
import styles from './NewsPost.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const NewsPost = ({date, img, url}) => {
  return (
    <Link to={`/news/list=${url}`}>
    <li className={cx('thumbPost')}>
      <div className={cx('img')}><img src={`/assets/${img}`} alt="img"/></div>
      <div className={cx('date')}>{date}</div>
    </li>
    </Link>
  )
}

export default NewsPost;
