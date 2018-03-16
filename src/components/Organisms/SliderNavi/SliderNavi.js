import React from 'react';
import styles from './SliderNavi.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SliderNavi = () => (
    <div className={cx("Navigate")}>
        <div className={cx("leftBtn")}>
          <img src="/assets/btn-triangle_left.svg" alt="leftBtn"/>
        </div>
        <div className={cx("RightBtn")}>
          <img src="/assets/btn-triangle_right.svg" alt="rightBtn"/>
        </div>
    </div>
);

export default SliderNavi;
