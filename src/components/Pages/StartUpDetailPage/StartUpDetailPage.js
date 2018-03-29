import React, { Component } from 'react';
import './StartUpDetailPage.css';
import { HeadUtil, StartUpDetailContent, StartUpScroll } from '../../Atoms';
import { Navigate } from '../../Molecules';
import Swiper from 'react-id-swiper';
import { Events, animateScroll as scroll, scroller } from 'react-scroll';

class StartUpDetailPage extends Component {
  constructor(props){
    super(props);
    this.state={
      date : {
          util:"MAG 119 ",
          catemenu:"« REVUE ECONOMIQUE »",
          title:"DECOUVERT D’UNE ENTREPRISE",
          day:"Publication on 2017. 11. 30 ",
          news:"ENTREPRISE A CONNAOTRE"
        },
      menuImg:[
        "/assets/dummy-start_up.png",
        "/assets/dummy-start_up.png",
        "/assets/dummy-start_up.png",
      ],
      menuList:[
        {
          idx:1,
          text:"Leader du marché de voiture electrique"
        },
        {
          idx:2,
          text:"Leader du marché de voiture electrique"
        },
        {
          idx:3,
          text:"Leader du marché de voiture electrique"
        },
        {
          idx:4,
          text:"Leader du marché de voiture electrique"
        },
      ],
      content:[
        {
          idx:1,
          title:"Leader du marché de voiture electrique ",
          text:"You might remember the Dell computer commercials in which a youth reports this exciting news to his friends that they are about to get their new computer by telling them, “Dude, you’re getting a Dell!” It was a cute series but it reflects the excitement young people get about anything new, particularly if it’s a new machine."
        },
        {
          idx:2,
          title:"Leader du marché de voiture electrique ",
          text:"You might remember the Dell computer commercials in which a youth reports this exciting news to his friends that they are about to get their new computer by telling them, “Dude, you’re getting a Dell!” It was a cute series but it reflects the excitement young people get about anything new, particularly if it’s a new machine."
        },
        {
          idx:3,
          title:"Leader du marché de voiture electrique ",
          img:"/assets/dummy-start_up2.png",
          text:"You might remember the Dell computer commercials in which a youth reports this exciting news to his friends that they are about to get their new computer by telling them, “Dude, you’re getting a Dell!” It was a cute series but it reflects the excitement young people get about anything new, particularly if it’s a new machine."
        },
        {
          idx:4,
          title:"Leader du marché de voiture electrique ",
          text:"You might remember the Dell computer commercials in which a youth reports this exciting news to his friends that they are about to get their new computer by telling them, “Dude, you’re getting a Dell!” It was a cute series but it reflects the excitement young people get about anything new, particularly if it’s a new machine."
        },
      ]
    }
    this.renderContent = this.renderContent.bind(this);
    this.renderListScroll = this.renderListScroll.bind(this);
    this.scrollToTop = this.scrollToTop.bind(this);
  }
  renderListScroll = ()=>{
    const scroll = this.state.menuList.map((listTitle, i)=>{
      return <StartUpScroll
        text={listTitle.text}
        idx={listTitle.idx}
        key={i}
      />
    })
    return scroll
  }
  renderContent = ()=>{
    const content = this.state.content.map((content, i)=>{
      return <StartUpDetailContent
        title={content.title}
        img={content.img}
        text={content.text}
        idx={content.idx}
        key={i}
      />
    })
    return content
  }
  //scroll menu
  // componentDidMount() {
  //   Events.scrollEvent.register('begin', function () {
  //     console.log("begin", arguments);
  //   });
  //   Events.scrollEvent.register('end', function () {
  //     console.log("end", arguments);
  //   });
  // }
  scrollToTop() {
    scroll.scrollToTop();
  }
  scrollTo() {
    scroller.scrollTo('scroll-to-element', {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    })
  }
  scrollToWithContainer() {
    let goToContainer = new Promise((resolve, reject) => {
      Events.scrollEvent.register('end', () => {
        resolve();
        Events.scrollEvent.remove('end');
      });
      scroller.scrollTo('scroll-container', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart'
      });
    });
    goToContainer.then(() =>
      scroller.scrollTo('scroll-container-second-element', {
        duration: 800,
        delay: 0,
        smooth: 'easeInOutQuart',
        containerId: 'scroll-container'
      }));
  }
  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }
    render() {
      const params = {
          //direction: 'vertical',
          loop:true,
           pagination: {
            el: '.swiper-pagination',
            clickable: true,
          }
       };

       const renderMapImg = this.state.menuImg.map((img, i) => {
        return <div className='sliderImg' key={i}><div className='sliderBg'></div><img src={img} alt="swiperImg"/></div>
        })
        return(
          <div className='startUpDetail'>
            <Navigate idx={2}/>
            <HeadUtil
              util={this.state.date.util}
              catemenu={this.state.date.catemenu}
              title={this.state.date.title}
              day={this.state.date.day}
              news={this.state.date.news}
            />
          <div className='startupWrapper'>
            <div className='startupContainer'>
              <div className='startupSlider'>
                <Swiper {...params} >
                  {renderMapImg}
                </Swiper>
              </div>
              <div className='startupSlider'>
                <span className='startupdetailTitle'>BYD</span>
                {this.renderListScroll()}
              </div>
            </div>
            <div>
              {this.renderContent()}
            </div>
          </div>
        </div>
        );
    }
}

export default StartUpDetailPage;
