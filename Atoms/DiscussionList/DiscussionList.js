import React from 'react';
import styles from './DiscussionList.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const DiscussionList = ({date, title, leftImg, leftThumb, rightImg, rightThumb, url}) => {
  return (
      <div className={cx('thumbImg')}>
        <Link to={`/discussion/sub:${url}`}>
        <div className={cx('imgWrapper')}>
          <div className={cx('img')}>
            <img src={`/assets/${leftImg}`}  alt="backImg"/>
            <div className={cx('thumbLeft','thumb')}>
              <img src={`/assets/${leftThumb}`} alt="thumb"/>
            </div>
          </div>
            <div className={cx('date')}>{date}</div>
          <div className={cx('img')}>
            <img src={`/assets/${rightImg}`}  alt="backImg"/>
            <div className={cx('thumbRight','thumb')}>
              <img src={`/assets/${rightThumb}`}  alt="thumb"/>
            </div>
          </div>
        </div>
        <div className={cx('title')}>{title}</div>
      </Link>
      </div>
  )
}

export default DiscussionList;
