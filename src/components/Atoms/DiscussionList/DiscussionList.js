import React from 'react';
import styles from './DiscussionList.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const DiscussionList = ({date, title, leftImg, leftThumb, rightImg, rightThumb}) => {
  return (
      <div className={cx('thumbImg')}>
        <Link to="/discussion/sub">
        <div className={cx('imgWrapper')}>
          <div className={cx('img')}>
            <img src={leftImg}  alt="backImg"/>
            <div className={cx('thumbLeft','thumb')}>
              <img src={leftThumb} alt="thumb"/>
            </div>
          </div>
            <div className={cx('date')}>{date}</div>
          <div className={cx('img')}>
            <img src={rightImg}  alt="backImg"/>
            <div className={cx('thumbRight','thumb')}>
              <img src={rightThumb}  alt="thumb"/>
            </div>
          </div>
        </div>
        <div className={cx('title')}>{title}</div>
      </Link>
      </div>
  )
}

export default DiscussionList;
