import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Navigator.scss';
const cx = classNames.bind(styles);

class Navigator extends Component {
    render() {
        return(
          <div className={cx('wrapper')}>
            <h1>START</h1>
            <p>ddsdsdsdsd</p>
          </div>
        );
    }
}

export default Navigator;
