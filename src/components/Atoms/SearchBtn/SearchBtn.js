import React from 'react';
import styles from './SearchBtn.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SearchBtn = () => {
  return (
        <button className={cx('searchBtn')}>
          <img src="/assets/btn-search_black.svg" alt="btn"/>
        </button>
  )
}

export default SearchBtn;
