import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './DiscussionSubPage.scss';
import { HeadUtil, DiscussionSub } from '../../Atoms';
import { Navigate } from '../../Molecules';
const cx = classNames.bind(styles);

class DiscussionSubPage extends Component {
  constructor(props){
    super(props);
    this.state={
      date : {
          util:"11111MAG 119 ",
          catemenu:"« REVUE ECONOMIQUE »",
          title:"DEBAT",
          day:"Publication on 2017. 11. 30 ",
          news:""
        },
      contre:{
              url:"contre",
              background:true,
              cate:"CONTRE",
              subTitle:"L’élection surprise de Donald Trump provoque une nouvelle onde de choc",
              img:"/assets/dummy-discussion-0.png",
              text:`Once the printer ink runs dry it has to be replaced with another inkjet cartridge. There are many reputed companies like Canon, Epson, Dell, and Lexmark that provide the necessary cartridges to replace the empty cartridges. Replacing inkjet cartridge can add to a very big cost. It could be worse if you have to replace the empty cartridges frequently every month. Nowadays many buyers are making use of compatible Inkjet Cartridges as they are less expensive and are easilyavailable online. These compatible inkjet cartridges are available from the third party at a much lower price. These cartridges can be replaced by the printer ink of similar brand. Compatible Inkjet Cartridge will help you to make extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins to dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out condition. Always remember to  color.easilyavailable online. These compatible inkjet cartridges are available from the third party at a much lower price. These cartridges can be replaced by the printer ink of similar brand. Compatible Inkjet Cartridge will help you to make extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins to dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out condition. Always remember to refill the cartridge as early as possible.With Compatible Inkjet Cartridge you do not need to sacrifice the quality of your printer. It works with excellent efficiency that not only offers you quality output but it also maintains the quality of your printer for a longer period of time. Get Compatible Inkjet Cartridge for any printer that uses ink of any color.With Compatible Inkjet Cartridge you do not need to sacrifice the quality of your printer. It works with excellent efficiency that not only offers you quality output but it also maintains the quality of your printer for a longer period of time. Get Compatible Inkjet Cartridge for any printer that uses ink of any color.`,
          },
      pour:{
              url:"pour",
              background:false,
              cate:"POUR",
              subTitle:"L’élection surprise de Donald Trump provoque une nouvelle onde de choc",
              img:"/assets/dummy-discussion-1.png",
              text:`Once the printer ink runs dry it has to be replaced with another inkjet cartridge. There are many reputed companies like Canon, Epson, Dell, and Lexmark that provide the necessary cartridges to replace the empty cartridges. Replacing inkjet cartridge can add to a very big cost. It could be worse if you have to replace the empty cartridges frequently every month. Nowadays many buyers are making use of compatible Inkjet Cartridges as they are less expensive and are easilyavailable online. These compatible inkjet cartridges are available from the third party at a much lower price. These cartridges can be replaced by the printer ink of similar brand. Compatible Inkjet Cartridge will help you to make extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins to dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out condition. Always remember to refill the cartridge as early as possible.With Compatible Inkjet Cartridge you do not need to sacrifice the quality of your printer. It works with excellent efficiency that not only offers you quality output but it also maintains the quality of your printer for a longer period of time. Get Compatible Inkjet Cartridge for any printer that uses ink of any color.With Compatible Inkjet Cartridge you do not need to sacrifice the quality of your printer. It works with excellent efficiency that not only offers you quality output but it also maintains the quality of your printer for a longer period of time. Get Compatible Inkjet Cartridge for any printer that uses ink of any color.`,
          },
    }
  }
    render() {
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
            <div className={cx('disSubList')}>
                <DiscussionSub
                  url={this.state.contre.url}
                  background={this.state.contre.background}
                  cate={this.state.contre.cate}
                  subTitle={this.state.contre.subTitle}
                  img={this.state.contre.img}
                  text={this.state.contre.text}
                  />
                <DiscussionSub
                  url={this.state.pour.url}
                  background={this.state.pour.background}
                  cate={this.state.pour.cate}
                  subTitle={this.state.pour.subTitle}
                  img={this.state.pour.img}
                  text={this.state.pour.text}
                  />
            </div>
          </div>
        );
    }
}

export default DiscussionSubPage;
