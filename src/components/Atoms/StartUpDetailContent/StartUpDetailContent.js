import React from 'react';
import styles from './StartUpDetailContent.scss';
import classNames from 'classnames/bind';
import { Element } from 'react-scroll';

const cx = classNames.bind(styles);
const StartUpDetailContent = ({title, img, text, idx}) => {
  return (
    <div className={cx('detailContent')}>
      <Element className={cx('title')} name={`list${idx}`}>{title}</Element>
      { img ?
        <div className={cx('img')}><img src={img} alt=""/></div>
        :<div className={cx('imgNone')}></div>
      }
      <div className={cx('text')}>{text}</div>
    </div>
  )
}

export default StartUpDetailContent;
