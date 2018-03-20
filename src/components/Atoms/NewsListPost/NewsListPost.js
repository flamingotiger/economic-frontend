import React from 'react';
import styles from './NewsListPost.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const NewsListPost = ({date, img}) => {
  return (
    <Link to='/news/list/detail'>
    <li className={cx('thumbPost')}>
      <div className={cx('img')}><img src={img} alt="img"/></div>
      <div className={cx('date')}>{date}</div>
    </li>
    </Link>
  )
}

export default NewsListPost;
