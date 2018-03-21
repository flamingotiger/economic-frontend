import React from 'react';
import styles from './DiscussionDetail.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const DiscussionDetail = ({background, cate, title, subTitle, text01, text02, img, subImg}) => {
  return (
      <div className={cx('thumbImg')}>
        <div className={background ? cx('title','red') : cx('title','blue')}>
          <span className={cx('cate')}>{cate}</span>
          <span>{title}</span>
        </div>
        <div className={cx('detailText')}>
          <div className={cx('text01','scroll')}>
            <div className={cx('mainImg')}>
              <img src={img}  alt="thumb"/>
            </div>
            <div className={cx('subTitle')}>{subTitle}</div>
            <div className={cx('text')}>{text01}</div>
          </div>
          <div className={cx('text02','scroll')}>
            <div className={cx('text')}>{text02}</div>
            <div className={cx('subImg')}>
              <img src={subImg}  alt="thumb"/>
            </div>
          </div>
        </div>
      </div>
  )
}

export default DiscussionDetail;
