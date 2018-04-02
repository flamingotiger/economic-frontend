import React from 'react';
import styles from './HomeSubTitle.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const HomeSubTitle = ({subTitle}) => {
  return (
    <li className={cx('subTitle')}>
      { subTitle }
    </li>
  )
}

export default HomeSubTitle;
