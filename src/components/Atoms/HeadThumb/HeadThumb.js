import React from 'react';
import styles from './HeadThumb.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

const HeadThumb = ({img,url}) => {
  return (
      <li className={cx('thumbImg')}>
        <Link to={url}>
        <div className={cx('blur','transform')}>
          <span>VOIR<br/>TOUT</span>
        </div>
          <img src={`/assets/${img}`} alt="img"/>
        </Link>
      </li>
  )
}

export default HeadThumb;
