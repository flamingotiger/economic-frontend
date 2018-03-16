import React from 'react';
import styles from './HomeTitle.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const HomeTitle = ({homeTitle}) => {
  return (
    <div className={cx('homeTitle')}>
      <h2 className={cx('title')}>
      { homeTitle }
      </h2>
    </div>
  )
}

export default HomeTitle;
