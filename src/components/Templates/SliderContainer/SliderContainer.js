import React,{ Component } from 'react';
import classNames from 'classnames/bind';
import styles from './SliderContainer.scss';
import { Slide } from '../../Atoms';
import { HomeContainer } from '../../../container';
import Swiper from 'react-id-swiper';

const cx = classNames.bind(styles);

class SliderContainer extends Component{
  constructor(props){
    super(props);
    this.state={
      date: [
        {
          title:'JOURNAL DE CE MOIS-CI',
          date:'2017-12',
          img:'dummy-world1.png'
        },
        {
          title:'JOURNAL DE CE MOIS-CI',
          date:'2017-01',
          img:'dummy-world.png'
        },
        {
          title:'JOURNAL DE CE MOIS-CI',
          date:'2017-01',
          img:'dummy-world.png'
        }
      ],
      gallerySwiper: null,
      thumbnailSwiper: null
    }
    this._renderSlide = this._renderSlide.bind(this);
    this.galleryRef = this.galleryRef.bind(this);
    this.thumbRef = this.thumbRef.bind(this);
  }
  //배너이미지
  _renderSlide = () => {
    const slider = this.state.date.map((slide,i) => {
      return <Slide
        title={slide.title}
        date = {slide.date}
        key={i}
        img = {slide.img}
        />
    })
    return slider;
  }
  //이미지 슬라이더 react-swiper-id 사용
  componentWillUpdate(nextProps, nextState) {
        if (nextState.gallerySwiper && nextState.thumbnailSwiper) {
          const { gallerySwiper, thumbnailSwiper } = nextState

          gallerySwiper.controller.control = thumbnailSwiper;
          thumbnailSwiper.controller.control = gallerySwiper;
        }
      }

      galleryRef(ref) {
        if (ref) this.setState({ gallerySwiper: ref.swiper })
      }

      thumbRef(ref) {
        if (ref) this.setState({ thumbnailSwiper: ref.swiper })
      }
  render(){
    const gallerySwiperParams = {
          spaceBetween: 10,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }
        };

        const thumbnailSwiperParams = {
          paceBetween: 10,
          centeredSlides: true,
          slidesPerView: 'auto',
          touchRatio: 0.2,
          slideToClickedSlide: true
        };
    return(
      <div className={cx('SliderWrapper')}>
        <Swiper {...gallerySwiperParams} ref={this.galleryRef} className={cx('SliderContainer')}>
          {this._renderSlide()}
        </Swiper>
        <Swiper {...thumbnailSwiperParams} ref={this.thumbRef}>
          <div className={cx('sliderNews')}><HomeContainer/></div>
          <div className={cx('sliderNews')}><HomeContainer/></div>
          <div className={cx('sliderNews')}><HomeContainer/></div>
        </Swiper>
      </div>
    );
  }
}

export default SliderContainer;
