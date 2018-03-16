import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './HomePage.scss';
import { HomeContainer } from '../../../container';
import { Footer } from '../../Atoms';
import { SliderContainer } from '../../Templates';

const cx = classNames.bind(styles);

class HomePage extends Component {
    render() {
        return(
          <div>
            <section className={cx('wrapper')}>
              <div className={cx('mainImg')}>
                <div className={cx('mainImgs')}>
                  <div className={cx('mainImgsBg')}></div>
                  <h2 className={cx('mainImgText')}>SEE THE NEWS SELECTED BY JONGKOOK KIM</h2>
                  <img src="/assets/dummy-main-0.png" alt=""/>
                </div>
                <div className={cx('center')}>
                  <div className={cx('centerTxt')}>J’aimerais bien connaitre une vraie économie</div>
                  <div className={cx('centerLine')}>
                  </div>
                  <div className={cx('centerLogo')}>
                    <img src="/assets/logo-main.svg" alt=""/>
                  </div>
                </div>
                <div className={cx('mainImgs')}>
                  <div className={cx('mainImgsBg')}></div>
                  <h2 className={cx('mainImgText')}>SEE THE NEWS SELECTED BY JONGKOOK KIM</h2>
                  <img src="/assets/dummy-main-01.png" alt=""/>
                </div>
              </div>
            </section>
            <SliderContainer/>
            <Footer/>
          </div>
        );
    }
}

export default HomePage;
