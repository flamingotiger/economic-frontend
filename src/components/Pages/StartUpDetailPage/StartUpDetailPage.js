import React, { Component } from 'react';
import './StartUpDetailPage.css';
import { HeadUtil, StartUpDetailContent } from '../../Atoms';
import { Navigate } from '../../Molecules';
import Swiper from 'react-id-swiper';

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
      content:[
        {
          title:"Leader du marché de voiture electrique ",
          text:"You might remember the Dell computer commercials in which a youth reports this exciting news to his friends that they are about to get their new computer by telling them, “Dude, you’re getting a Dell!” It was a cute series but it reflects the excitement young people get about anything new, particularly if it’s a new machine."
        },
        {
          title:"Leader du marché de voiture electrique ",
          text:"You might remember the Dell computer commercials in which a youth reports this exciting news to his friends that they are about to get their new computer by telling them, “Dude, you’re getting a Dell!” It was a cute series but it reflects the excitement young people get about anything new, particularly if it’s a new machine."
        },
        {
          title:"Leader du marché de voiture electrique ",
          img:"/assets/dummy-start_up2.png",
          text:"You might remember the Dell computer commercials in which a youth reports this exciting news to his friends that they are about to get their new computer by telling them, “Dude, you’re getting a Dell!” It was a cute series but it reflects the excitement young people get about anything new, particularly if it’s a new machine."
        }
      ]
    }
    this.renderContent = this.renderContent.bind(this);
  }
  renderContent = ()=>{
    const content = this.state.content.map((content, i)=>{
      return <StartUpDetailContent
        title={content.title}
        img={content.img}
        text={content.text}
        key={i}
      />
    })
    return content
  }
    render() {
      const params = {
          //direction: 'vertical',
          //loop:true,
           pagination: {
            el: '.swiper-pagination',
            clickable: true,
          }
       };
        return(
          <div className='wrapper'>
            <Navigate/>
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
                <Swiper {...params} className='slider'>
                  <div className='sliderImg'><img src="/assets/dummy-start_up.png" alt="swiperImg"/></div>
                  <div className='sliderImg'><img src="/assets/dummy-start_up.png" alt="swiperImg"/></div>
                  <div className='sliderImg'><img src="/assets/dummy-start_up.png" alt="swiperImg"/></div>
                </Swiper>
              </div>
              <div className='startupSlider'>
                BYD
                Leader du marché de voiture electrique
                Leader du marché de voiture electrique
                Leader du marché de voiture electrique
                Leader du marché de voiture electrique
                Leader du marché de voiture electrique
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
