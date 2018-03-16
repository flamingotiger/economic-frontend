import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './DataPage.scss';
const cx = classNames.bind(styles);

class DataPage extends Component {
    render() {
        return(
          <div className={cx('wrapper')}>
            DataPage
          </div>
        );
    }
}

export default DataPage;
