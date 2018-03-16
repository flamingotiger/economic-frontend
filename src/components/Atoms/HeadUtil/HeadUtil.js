import React from 'react';
import styles from './HeadUtil.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const HeadUtil = ({util, catemenu, day ,title}) => {
  return (
    <div className={cx('headTitle')}>
      <div className={cx('util')}>{util}<span>{catemenu}</span></div>
      <div className={cx('title')}>{title}</div>
      <div className={cx('day')}>{day}</div>
    </div>
  )
}

export default HeadUtil;
