import React from 'react';
import styles from './HeadThumb.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const HeadThumb = ({img}) => {
  return (
    <li className={cx('thumbImg')}>
      <div className={cx('blur','transform')}>
        <span>VOIR<br/>TOUT</span>
      </div>
        <img src={`/assets/${img}`} alt="img"/>
    </li>
  )
}

export default HeadThumb;
