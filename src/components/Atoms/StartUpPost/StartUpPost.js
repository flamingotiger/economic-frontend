import React from 'react';
import styles from './StartUpPost.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const StartUpPost = ({title, img}) => {
  return (
    <Link to='/startup/detail'>
    <li className={cx('thumbPost')}>
      <div className={cx('img')}><img src={img} alt="img"/></div>
      <div className={cx('title')}>{title}</div>
    </li>
    </Link>
  )
}

export default StartUpPost;
