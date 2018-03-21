import React,{ Component } from 'react';
import './SliderContainer.css';
import { Slide } from '../../components/Atoms';
import HomeContainer from '../HomeContainer';
import Swiper from 'react-id-swiper';

class SliderContainer extends Component{
  constructor(props){
    super(props);
    this.state={
      slideImage: [
        {
          title:'JOURNAL DE CE MOIS-CI',
          date:'2017-12',
          img:'dummy-world.png'
        },
        {
          title:'JOURNAL DE CE MOIS-CI',
          date:'2017-01',
          img:'dummy-world.png'
        },
        {
          title:'JOURNAL DE CE MOIS-CI',
          date:'2017-02',
          img:'dummy-world.png'
        }
      ],
      slideNews:[
        {
          HomeNews:{
            date : {
                util:"11111MAG 119 ",
                catemenu:"« REVUE ECONOMIQUE »",
                title:"",
                day:"Publication on 2017. 11. 30 "
              },
            content : {
              homeTitle:"L’élection surprise de Donald Trump provoque une nouvelle onde de choc surprise de Donald Trump ",
              subTitle:"Après le Brexit, la désignation du 45e président américain marque une nouvelle poussée populiste.",
              text01:`Once the printer ink runs dry it has to be replaced with another inkjet cartridge. There are many reputed
              companies like Canon, Epson, Dell, and Lexmark that provide the necessary cartridges to replace the empty cartridges.
               Replacing inkjet cartridge can add to a very big cost. It could be worse if you have to replace the empty cartridges
               frequently every month. Nowadays many buyers are making use of compatible Inkjet Cartridges as they are less expensive
                and are easily available online. These compatible inkjet cartridges are available from the third party at a much
                lower price.
                These cartridges can be replaced by the printer ink of similar brand. Compatible Inkjet Cartridge will
                help you to make extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that
                it contains begins to dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out
                These cartridges can be replaced by the printer ink of similar brand. Compatible Inkjet Cartridge will
                help you to make extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that
                it contains begins to dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out
                These cartridges can be replaced by the printer ink of similar brand. Compatible Inkjet Cartridge will
                help you to make extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that
                it contains begins to dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out`,
              text02:`condition.Always remember to refill the cartridge as early as possible.
                Once the printer ink runs dry it has to be replaced with another inkjet cartridge. There are many reputed companies
                like Canon, Epson, Dell, and Lexmark that provide the necessary cartridges to replace the empty cartridges. Replacing
                 inkjet cartridge can add to a very big cost. It could be worse if you have to replace the empty cartridges frequently
                 every month. Nowadays many buyers are making use of compatible Inkjet Cartridges as they are less expensive and
                 are easily available online. These compatible inkjet cartridges are available from the third party at a much lower price.
                 These cartridges can be replaced by the printer ink of similar brand. Compatible Inkjet Cartridge will help you to make
                 extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins to
                 dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out condition.
                  Always remember to refill the cartridge as early as possible.
                  extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins to
                  dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out condition.
                   Always remember to refill the cartridge as early as possible.
                   extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins to
                   ry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out condition.
                    Always remember to refill the cartridge as early as possible.
                    extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins to
                   dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out condition.
                    Always remember to refill the cartridge as early as possible.
                condition.Always remember to refill the cartridge as early as possible.
                  Once the printer ink runs dry it has to be replaced with another inkjet cartridge. There are many reputed companies
                  like Canon, Epson, Dell, and Lexmark that provide the necessary cartridges to replace the empty cartridges. Replacing
                   inkjet cartridge can add to a very big cost. It could be worse if you have to replace the empty cartridges frequently
                   every month. Nowadays many buyers are making use of compatible Inkjet Cartridges as they are less expensive and
                   are easily available online. These compatible inkjet cartridges are available from the third party at a much lower price.
                   These cartridges can be replaced by the printer ink of similar brand. Compatible Inkjet Cartridge will help you to make
                   extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins to
                   dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out condition.
                    Always remember to refill the cartridge as early as possible.
                    extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins to
                    dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out condition.
                     Always remember to refill the cartridge as early as possible.

                     extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins to
                     dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out condition.
                      Always remember to refill the cartridge as early as possible.
                  `,
                img:'/assets/dummy-main-4.png',
                clickText:'VOIR  LES ARTICLES DE CE MOIS-CI'
              }
          },
          HomeDiscussion:{
            content : {
              HomeDiscussionTitle:"POUR ? CONTRE ?…. Uber a embarqué en Europe ",
              text:`Once the printer ink runs dry it has to be replaced with another inkjet cartridge. There are many reputed
              companies like Canon, Epson, Dell, and Lexmark that provide the necessary cartridges to replace the empty cartridges.
               Replacing inkjet cartridge can add to a very big cost. It could be worse if you have to replace the empty cartridges
               frequently every month. Nowadays many buyers are making use of compatible Inkjet Cartridges as they are less expensive
                and are easily available online. These compatible inkjet cartridges are available from the third party at a much
                lower price.
                These cartridges can be replaced by the printer ink of similar brand. Compatible Inkjet Cartridge will
                help you to make extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that
                it contains begins to dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out
                condition.Always remember to refill the cartridge as early as possible.
                Once the printer ink runs dry it has to be replaced with another inkjet cartridge. There are many reputed companies
                like Canon, Epson, Dell, and Lexmark that provide the necessary cartridges to replace the empty cartridges. Replacing
                 inkjet cartridge can add to a very big cost. It could be worse if you have to replace the empty cartridges frequently
                 every month. Nowadays many buyers are making use of compatible Inkjet Cartridges as they are less expensive and
                 are easily available online. These compatible inkjet cartridges are available from the third party at a much lower price.
                 These cartridges can be replaced by the printer ink of similar brand. Compatible Inkjet Cartridge will help you to make
                 extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins to
                 dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out condition.
                  Always remember to refill the cartridge as early as possible.
                `
                ,
                img:'/assets/dummy-main-1.png',
                clickText:'VOIR  LES ARTICLES DE CE MOIS-CI'
              }
          },
          HomeStartUp:{
            content : {
              homeTitle:"L’élection surprise de Donald Trump provoque une nouvelle onde de choc",
              clickText:'DECOUVRIR UNE NOUVELLE ENTREPRISE'
            }
          }
        },
        {
          HomeNews:{
            date : {
                util:"222222MAG 119 ",
                catemenu:"« REVUE ECONOMIQUE »",
                title:"",
                day:"Publication on 2017. 11. 30 "
              },
            content : {
              homeTitle:"L’élection surprise de Donald Trump provoque une nouvelle onde de choc surprise de Donald Trump ",
              subTitle:"Après le Brexit, la désignation du 45e président américain marque une nouvelle poussée populiste.",
              text01:`Once the printer ink runs dry it has to be replaced with another inkjet cartridge. There are many reputed
              companies like Canon, Epson, Dell, and Lexmark that provide the necessary cartridges to replace the empty cartridges.
               Replacing inkjet cartridge can add to a very big cost. It could be worse if you have to replace the empty cartridges
               frequently every month. Nowadays many buyers are making use of compatible Inkjet Cartridges as they are less expensive
                and are easily available online. These compatible inkjet cartridges are available from the third party at a much
                lower price.
                These cartridges can be replaced by the printer ink of similar brand. Compatible Inkjet Cartridge will
                help you to make extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that
                it contains begins to dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out
                These cartridges can be replaced by the printer ink of similar brand. Compatible Inkjet Cartridge will
                help you to make extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that
                it contains begins to dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out
                These cartridges can be replaced by the printer ink of similar brand. Compatible Inkjet Cartridge will
                help you to make extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that
                it contains begins to dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out`,
              text02:`condition.Always remember to refill the cartridge as early as possible.
                Once the printer ink runs dry it has to be replaced with another inkjet cartridge. There are many reputed companies
                like Canon, Epson, Dell, and Lexmark that provide the necessary cartridges to replace the empty cartridges. Replacing
                 inkjet cartridge can add to a very big cost. It could be worse if you have to replace the empty cartridges frequently
                 every month. Nowadays many buyers are making use of compatible Inkjet Cartridges as they are less expensive and
                 are easily available online. These compatible inkjet cartridges are available from the third party at a much lower price.
                 These cartridges can be replaced by the printer ink of similar brand. Compatible Inkjet Cartridge will help you to make
                 extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins to
                 dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out condition.
                  Always remember to refill the cartridge as early as possible.
                  extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins to
                  dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out condition.
                   Always remember to refill the cartridge as early as possible.
                   extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins to
                   ry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out condition.
                    Always remember to refill the cartridge as early as possible.
                    extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins to
                   dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out condition.
                    Always remember to refill the cartridge as early as possible.
                condition.Always remember to refill the cartridge as early as possible.
                  Once the printer ink runs dry it has to be replaced with another inkjet cartridge. There are many reputed companies
                  like Canon, Epson, Dell, and Lexmark that provide the necessary cartridges to replace the empty cartridges. Replacing
                   inkjet cartridge can add to a very big cost. It could be worse if you have to replace the empty cartridges frequently
                   every month. Nowadays many buyers are making use of compatible Inkjet Cartridges as they are less expensive and
                   are easily available online. These compatible inkjet cartridges are available from the third party at a much lower price.
                   These cartridges can be replaced by the printer ink of similar brand. Compatible Inkjet Cartridge will help you to make
                   extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins to
                   dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out condition.
                    Always remember to refill the cartridge as early as possible.
                    extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins to
                    dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out condition.
                     Always remember to refill the cartridge as early as possible.

                     extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins to
                     dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out condition.
                      Always remember to refill the cartridge as early as possible.
                  `,
                img:'/assets/dummy-main-4.png',
                clickText:'VOIR  LES ARTICLES DE CE MOIS-CI'
              }
          },
          HomeDiscussion:{
            content : {
              HomeDiscussionTitle:"POUR ? CONTRE ?…. Uber a embarqué en Europe ",
              text:`Once the printer ink runs dry it has to be replaced with another inkjet cartridge. There are many reputed
              companies like Canon, Epson, Dell, and Lexmark that provide the necessary cartridges to replace the empty cartridges.
               Replacing inkjet cartridge can add to a very big cost. It could be worse if you have to replace the empty cartridges
               frequently every month. Nowadays many buyers are making use of compatible Inkjet Cartridges as they are less expensive
                and are easily available online. These compatible inkjet cartridges are available from the third party at a much
                lower price.
                These cartridges can be replaced by the printer ink of similar brand. Compatible Inkjet Cartridge will
                help you to make extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that
                it contains begins to dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out
                condition.Always remember to refill the cartridge as early as possible.
                Once the printer ink runs dry it has to be replaced with another inkjet cartridge. There are many reputed companies
                like Canon, Epson, Dell, and Lexmark that provide the necessary cartridges to replace the empty cartridges. Replacing
                 inkjet cartridge can add to a very big cost. It could be worse if you have to replace the empty cartridges frequently
                 every month. Nowadays many buyers are making use of compatible Inkjet Cartridges as they are less expensive and
                 are easily available online. These compatible inkjet cartridges are available from the third party at a much lower price.
                 These cartridges can be replaced by the printer ink of similar brand. Compatible Inkjet Cartridge will help you to make
                 extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins to
                 dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out condition.
                  Always remember to refill the cartridge as early as possible.
                `
                ,
                img:'/assets/dummy-main-1.png',
                clickText:'VOIR  LES ARTICLES DE CE MOIS-CI'
              }
          },
          HomeStartUp:{
            content : {
              homeTitle:"L’élection surprise de Donald Trump provoque une nouvelle onde de choc",
              clickText:'DECOUVRIR UNE NOUVELLE ENTREPRISE'
            }
          }
        },
        {
          HomeNews:{
            date : {
                util:"33333MAG 119 ",
                catemenu:"« REVUE ECONOMIQUE »",
                title:"",
                day:"Publication on 2017. 11. 30 "
              },
            content : {
              homeTitle:"L’élection surprise de Donald Trump provoque une nouvelle onde de choc surprise de Donald Trump ",
              subTitle:"Après le Brexit, la désignation du 45e président américain marque une nouvelle poussée populiste.",
              text01:`Once the printer ink runs dry it has to be replaced with another inkjet cartridge. There are many reputed
              companies like Canon, Epson, Dell, and Lexmark that provide the necessary cartridges to replace the empty cartridges.
               Replacing inkjet cartridge can add to a very big cost. It could be worse if you have to replace the empty cartridges
               frequently every month. Nowadays many buyers are making use of compatible Inkjet Cartridges as they are less expensive
                and are easily available online. These compatible inkjet cartridges are available from the third party at a much
                lower price.
                These cartridges can be replaced by the printer ink of similar brand. Compatible Inkjet Cartridge will
                help you to make extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that
                it contains begins to dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out
                These cartridges can be replaced by the printer ink of similar brand. Compatible Inkjet Cartridge will
                help you to make extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that
                it contains begins to dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out
                These cartridges can be replaced by the printer ink of similar brand. Compatible Inkjet Cartridge will
                help you to make extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that
                it contains begins to dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out`,
              text02:`condition.Always remember to refill the cartridge as early as possible.
                Once the printer ink runs dry it has to be replaced with another inkjet cartridge. There are many reputed companies
                like Canon, Epson, Dell, and Lexmark that provide the necessary cartridges to replace the empty cartridges. Replacing
                 inkjet cartridge can add to a very big cost. It could be worse if you have to replace the empty cartridges frequently
                 every month. Nowadays many buyers are making use of compatible Inkjet Cartridges as they are less expensive and
                 are easily available online. These compatible inkjet cartridges are available from the third party at a much lower price.
                 These cartridges can be replaced by the printer ink of similar brand. Compatible Inkjet Cartridge will help you to make
                 extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins to
                 dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out condition.
                  Always remember to refill the cartridge as early as possible.
                  extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins to
                  dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out condition.
                   Always remember to refill the cartridge as early as possible.
                   extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins to
                   ry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out condition.
                    Always remember to refill the cartridge as early as possible.
                    extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins to
                   dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out condition.
                    Always remember to refill the cartridge as early as possible.
                condition.Always remember to refill the cartridge as early as possible.
                  Once the printer ink runs dry it has to be replaced with another inkjet cartridge. There are many reputed companies
                  like Canon, Epson, Dell, and Lexmark that provide the necessary cartridges to replace the empty cartridges. Replacing
                   inkjet cartridge can add to a very big cost. It could be worse if you have to replace the empty cartridges frequently
                   every month. Nowadays many buyers are making use of compatible Inkjet Cartridges as they are less expensive and
                   are easily available online. These compatible inkjet cartridges are available from the third party at a much lower price.
                   These cartridges can be replaced by the printer ink of similar brand. Compatible Inkjet Cartridge will help you to make
                   extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins to
                   dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out condition.
                    Always remember to refill the cartridge as early as possible.
                    extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins to
                    dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out condition.
                     Always remember to refill the cartridge as early as possible.

                     extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins to
                     dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out condition.
                      Always remember to refill the cartridge as early as possible.
                  `,
                img:'/assets/dummy-main-4.png',
                clickText:'VOIR  LES ARTICLES DE CE MOIS-CI'
              }
          },
          HomeDiscussion:{
            content : {
              HomeDiscussionTitle:"POUR ? CONTRE ?…. Uber a embarqué en Europe ",
              text:`Once the printer ink runs dry it has to be replaced with another inkjet cartridge. There are many reputed
              companies like Canon, Epson, Dell, and Lexmark that provide the necessary cartridges to replace the empty cartridges.
               Replacing inkjet cartridge can add to a very big cost. It could be worse if you have to replace the empty cartridges
               frequently every month. Nowadays many buyers are making use of compatible Inkjet Cartridges as they are less expensive
                and are easily available online. These compatible inkjet cartridges are available from the third party at a much
                lower price.
                These cartridges can be replaced by the printer ink of similar brand. Compatible Inkjet Cartridge will
                help you to make extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that
                it contains begins to dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out
                condition.Always remember to refill the cartridge as early as possible.
                Once the printer ink runs dry it has to be replaced with another inkjet cartridge. There are many reputed companies
                like Canon, Epson, Dell, and Lexmark that provide the necessary cartridges to replace the empty cartridges. Replacing
                 inkjet cartridge can add to a very big cost. It could be worse if you have to replace the empty cartridges frequently
                 every month. Nowadays many buyers are making use of compatible Inkjet Cartridges as they are less expensive and
                 are easily available online. These compatible inkjet cartridges are available from the third party at a much lower price.
                 These cartridges can be replaced by the printer ink of similar brand. Compatible Inkjet Cartridge will help you to make
                 extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins to
                 dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out condition.
                  Always remember to refill the cartridge as early as possible.
                `
                ,
                img:'/assets/dummy-main-1.png',
                clickText:'VOIR  LES ARTICLES DE CE MOIS-CI'
              }
          },
          HomeStartUp:{
            content : {
              homeTitle:"L’élection surprise de Donald Trump provoque une nouvelle onde de choc",
              clickText:'DECOUVRIR UNE NOUVELLE ENTREPRISE'
            }
          }
        },
      ],
      gallerySwiper: null,
      thumbnailSwiper: null
    }//state
    this._renderSlide = this._renderSlide.bind(this);
    this._renderHome = this._renderHome.bind(this);
    this.galleryRef = this.galleryRef.bind(this);
    this.thumbRef = this.thumbRef.bind(this);
  }
  //배너이미지
  _renderSlide = () => {
    const slider = this.state.slideImage.map((slide,i) => {
      return <div key={i}><Slide
        title={slide.title}
        date = {slide.date}
        img = {slide.img}
        />
      </div>
    })
    return slider;
  }
  //HomeContainer
   _renderHome = () => {
     const sliderNews = this.state.slideNews.map((slide,i) => {
       return <div className='sliderNews' key={i}>
         <HomeContainer
           HomeNews={slide.HomeNews}
           HomeDiscussion={slide.HomeDiscussion}
           HomeStartUp={slide.HomeStartUp}
           />
       </div>
     })
     return sliderNews
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
          //spaceBetween: 10,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          loop:true,
        };

        const thumbnailSwiperParams = {
          //spaceBetween: 10,
          centeredSlides: true,
          touchRatio: 0.2,
          slideToClickedSlide: true,
          loop:true,
          slidesPerView: 1,
          simulateTouch:false//touch stop
        };
    return(
      <div className='sliderWrapper'>
        <Swiper {...gallerySwiperParams} ref={this.galleryRef} className='sliderContainer'>
          {this._renderSlide()}
        </Swiper>
        <Swiper {...thumbnailSwiperParams} ref={this.thumbRef}>
          {this._renderHome()}
        </Swiper>
      </div>
    );
  }
}

export default SliderContainer;
