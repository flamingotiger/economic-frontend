import React from 'react';
import styles from './HomeDiscussionTitle.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const HomeDiscussionTitle = ({HomeDiscussionTitle}) => {
  return (
    <div className={cx('HomeDiscussionTitle')}>
      <h2 className={cx('title')}>
      { HomeDiscussionTitle }
      </h2>
    </div>
  )
}

export default HomeDiscussionTitle;
