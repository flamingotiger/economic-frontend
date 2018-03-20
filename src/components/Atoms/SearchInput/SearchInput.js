import React from 'react';
import styles from './SearchInput.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const SearchInput = () => {
  return (
    <div className={cx('searchInput')}>
      <input type="text" name=""/>
    </div>
  )
}

export default SearchInput;
