import React from 'react';
import classNames from 'classnames/bind';
import styles from './HomeWrapper.scss';

const cx = classNames.bind(styles);

const HomeWrapper = ({children}) => {
    return (
        <div className={cx('HomeWrapper')}>
            {children}
        </div>
    );
};

export default HomeWrapper;
