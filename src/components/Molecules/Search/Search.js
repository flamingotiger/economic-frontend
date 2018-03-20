import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Search.scss';
import { SearchBtn, SearchInput } from '../../Atoms';

const cx = classNames.bind(styles);

class Search extends Component {
    render() {
        return(
          <div className={cx('search')}>
            <SearchInput />
            <SearchBtn />
          </div>
        );
    }
}
export default Search;
