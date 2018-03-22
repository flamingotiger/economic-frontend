import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './HomePage.scss';
import { Subscribe } from '../../Atoms';
import { SliderContainer } from '../../../container';
import { HomeNavigate } from '../../Molecules';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

class HomePage extends Component {
    render() {
        return(
          <div>
            <section className={cx('mainWrapper')}>
              <div className={cx('mainImg')}>
                <div className={cx('mainImgs')}>
                  <div className={cx('mainImgsBg','transform')}></div>
                  <h2 className={cx('mainImgText')}>SEE THE NEWS SELECTED BY JONGKOOK KIM</h2>
                  <img src="/assets/dummy-main-0.png" alt=""/>
                </div>
                <div className={cx('center')}>
                  <div className={cx('centerLine')}>
                    <HomeNavigate />
                    <div className={cx('centerTxt')}>J’aimerais bien connaitre une vraie économie</div>
                  </div>
                </div>
                <div className={cx('mainImgs')}>
                  <div className={cx('mainImgsBg','transform')}></div>
                  <h2 className={cx('mainImgText')}>SEE THE NEWS SELECTED BY JONGKOOK KIM</h2>
                  <img src="/assets/dummy-main-01.png" alt=""/>
                </div>
              </div>
            </section>
            <SliderContainer/>
            <Subscribe/>
            <div className={cx('footer')}>
              <div className={cx('footerInner')}>
                <div className={cx('footerText')}>
                  <div><Link to="/">RECREUTEMENT</Link></div>
                  <div><Link to="/">CONTACT</Link></div>
                </div>
              </div>
            </div>
          </div>
        );
    }
}

export default HomePage;
