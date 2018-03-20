import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './StartUpDetailPage.css';
import { HeadUtil } from '../../Atoms';
import { Navigate } from '../../Molecules';
import Swiper from 'react-id-swiper';

const cx = classNames.bind(styles);

class StartUpDetailPage extends Component {
  constructor(props){
    super(props);
    this.state={
      date : {
          util:"11111MAG 119 ",
          catemenu:"« REVUE ECONOMIQUE »",
          title:"",
          day:"Publication on 2017. 11. 30 ",
          news:"ENTREPRISE A CONNAOTRE"
        },
    }
  }
    render() {
      const params = {
          direction: 'vertical',
          loop:true,
           pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: (index, className) => {
              return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
          }
       };
        return(
          <div className={cx('wrapper')}>
            <Navigate/>
            <HeadUtil
              util={this.state.date.util}
              catemenu={this.state.date.catemenu}
              title={this.state.date.title}
              day={this.state.date.day}
              news={this.state.date.news}
            />
          <div className={cx('startupWrapper')}>

            <div className={cx('startupContainer')}>
              <div className={cx('startupSlider')}>
                <Swiper {...params} className={cx('slider')}>
                  <div className={cx('sliderImg')}><img src="/assets/dummy-start_up.png" alt="swiperImg"/></div>
                  <div className={cx('sliderImg')}><img src="/assets/dummy-start_up.png" alt="swiperImg"/></div>
                  <div className={cx('sliderImg')}><img src="/assets/dummy-start_up.png" alt="swiperImg"/></div>
                </Swiper>
              </div>
              <div className={cx('startupSlider')}>
                BYD
                leader~~~
                leader~~~
                leader~~~
                leader~~~
              </div>
            </div>
            <div>
              본
            </div>

            </div>
          </div>
        );
    }
}

export default StartUpDetailPage;
