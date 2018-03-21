import React from 'react';
import styles from './StartUpDetailContent.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const StartUpDetailContent = ({title, img, text}) => {
  return (
    <div className={cx('detailContent')}>
      <div className={cx('title')}>{title}</div>
      { img ?
        <div className={cx('img')}><img src={img} alt=""/></div>
        :<div className={cx('imgNone')}></div>
      }
      <div className={cx('text')}>{text}</div>
    </div>
  )
}

export default StartUpDetailContent;
