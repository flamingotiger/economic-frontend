import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Nomatch.scss';
const cx = classNames.bind(styles);

class Nomatch extends Component {
    render() {
        return(
          <div className={cx('wrapper')}>
            Nomatch 404
          </div>
        );
    }
}

export default Nomatch;
