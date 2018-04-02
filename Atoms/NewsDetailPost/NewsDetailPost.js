import React from 'react';
import styles from './NewsDetailPost.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const NewsDetailPost = ({hideText, paramsDate, url, cate, subTitle, text, img}) => {
  return (
    <li className={cx('post')}>
      <Link to={`/news/list${paramsDate}/detail=${url}`}>
        <div className={cx('cate')}>{cate}</div>
        <div className={cx('img')}><img src={`/assets/${img}`} alt="img"/></div>
        <div className={cx('subTitle')}>{subTitle}</div>
        {hideText ?
          null
          :
          <div className={cx('text')}>{text}</div>
        }
      </Link>
    </li>
  )
}

export default NewsDetailPost;
