import React from 'react';
import styles from './DiscussionSub.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const DiscussionSub = ({cate, subTitle, img, text01, background, url, id}) => {
  return (
      <div className={cx('sublist')}>
        <Link to={`/discussion/sub/detail:${url}${id}`}>
        <div className={background ? cx('title','red') : cx('title','blue')}>{cate}</div>
        <div className={cx('scroll')}>
          <img src={`/assets/${img}`}  alt="img"/>
          <div className={cx('subTitle')}>{subTitle}</div>
          <div className={cx('text')}>{text01}</div>
        </div>
      </Link>
      </div>
  )
}
export default DiscussionSub;
