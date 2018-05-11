import React from 'react';
import styles from './StartUpScroll.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-scroll';

const cx = classNames.bind(styles);
const StartUpScroll = ({text, id}) => {
  return (
      <div className={cx('detailContent')}>
        <Link activeClass="active" className={cx('list')} to={`list${id}`} spy={true} smooth={true} duration={500}>
          {text}</Link>
      </div>
  )
}

export default StartUpScroll;
