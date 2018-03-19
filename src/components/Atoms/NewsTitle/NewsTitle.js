import React from 'react';
import styles from './NewsTitle.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const NewsTitle = ({newsTitle}) => {
  return (
    <div className={cx('homeTitle')}>
      <h2 className={cx('title')}>
      { newsTitle }
      </h2>
    </div>
  )
}

export default NewsTitle;
