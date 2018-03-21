import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './DiscussionDetailPage.scss';
import { HeadUtil, DiscussionDetail } from '../../Atoms';
import { Navigate } from '../../Molecules';
const cx = classNames.bind(styles);

class DiscussionDetailPage extends Component {
  constructor(props){
    super(props);
    this.state={
      toggle:true,
      toggleIndex:0,
      date : {
          util:"11111MAG 119 ",
          catemenu:"« REVUE ECONOMIQUE »",
          title:"",
          day:"Publication on 2017. 11. 30 ",
          news:""
        },
        contre:{
                cate:"CONTRE",
                background:true,
                title:"i want to know real economic ",
                subTitle:"L’élection surprise de Donald Trump provoque une nouvelle onde de choc",
                img:"/assets/dummy-discussion-0.png",
                subImg:"/assets/dummy-discussion-2.png",
                text01:`Once the printer ink runs dry it has to be replaced with another inkjet cartridge. There are many reputed companies like Canon, Epson, Dell, and Lexmark that provide the necessary cartridges to replace the empty cartridges. Replacing inkjet cartridge can add to a very big cost. It could be worse if you have to replace the empty cartridges frequently every month. Nowadays many buyers are making use of compatible Inkjet Cartridges as they are less expensive and are easilyavailable online. These compatible inkjet cartridges are available from the third party at a much lower price. These cartridges can be replaced by the printer ink of similar brand. Compatible Inkjet Cartridge will help you to make extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins to dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out condition. Always remember to color.easilyavailable online. These compatible inkjet cartridges are available from the third party at a much lower price. These cartridges can be replaced by the printer ink of similar brand. Compatible Inkjet Cartridge will help you to make extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins to dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out condition. Always remember printer that uses ink of any color.With Compatible Inkjet Cartridge you do not need to sacrifice the quality of your printer. It works with excellent`,
                text02:`Once the printer ink runs dry it has to be replaced with another inkjet cartridge. There are many reputed companies like Canon, Epson, Dell, and Lexmark that provide the necessary cartridges to replace the empty cartridges. Replacing inkjet cartridge can add to a very big cost. It could be worse if you have to replace the empty cartridges frequently every month. Nowadays many buyers are making use of compatible Inkjet Cartridges as they are less expensive and are easilyavailable online. These compatible inkjet cartridges are available from the third party at a much lower price. These cartridges can be replaced by the printer ink of similar brand. Compatible Inkjet Cartridge will help you to make extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins to dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out condition. Always remember to  color.easilyavailable online. These compatible inkjet cartridges are available from the third party at a much lower price. These cartridges can be replaced by the printer ink of similar brand. Compatible Inkjet Cartridge will help you to make extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins to dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out condition. Always remember printer that uses ink of any color.With Compatible Inkjet Cartridge you do not need to sacrifice the quality of your printer. It works with excellent`

            },
        pour:{
                cate:"POUR",
                background:false,
                title:"i want to know real economic ",
                subTitle:"L’élection surprise de Donald Trump provoque une nouvelle onde de choc",
                img:"/assets/dummy-discussion-1.png",
                subImg:"/assets/dummy-discussion-2.png",
                text01:`Once the printer ink runs dry it has to be replaced with another inkjet cartridge. There are many reputed companies like Canon, Epson, Dell, and Lexmark that provide the necessary cartridges to replace the empty cartridges. Replacing inkjet cartridge can add to a very big cost. It could be worse if you have to replace the empty cartridges frequently every month. Nowadays many buyers are making use of compatible Inkjet Cartridges as they are less expensive and are easilyavailable online. These compatible inkjet cartridges are available from the third party at a much lower price. These cartridges can be replaced by the printer ink of similar brand. Compatible Inkjet Cartridge will help you to make extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins to dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out condition. Always remember to color.easilyavailable online. These compatible inkjet cartridges are available from the third party at a much lower price. These cartridges can be replaced by the printer ink of similar brand. Compatible Inkjet Cartridge will help you to make extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins to dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out condition. Always remember printer that uses ink of any color.With Compatible Inkjet Cartridge you do not need to sacrifice the quality of your printer. It works with excellent`,
                text02:`Once the printer ink runs dry it has to be replaced with another inkjet cartridge. There are many reputed companies like Canon, Epson, Dell, and Lexmark that provide the necessary cartridges to replace the empty cartridges. Replacing inkjet cartridge can add to a very big cost. It could be worse if you have to replace the empty cartridges frequently every month. Nowadays many buyers are making use of compatible Inkjet Cartridges as they are less expensive and are easilyavailable online. These compatible inkjet cartridges are available from the third party at a much lower price. These cartridges can be replaced by the printer ink of similar brand. Compatible Inkjet Cartridge will help you to make extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins to dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out condition. Always remember to  color.easilyavailable online. These compatible inkjet cartridges are available from the third party at a much lower price. These cartridges can be replaced by the printer ink of similar brand. Compatible Inkjet Cartridge will help you to make extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins to dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out condition. Always remember printer that uses ink of any color.With Compatible Inkjet Cartridge you do not need to sacrifice the quality of your printer. It works with excellent`
            },
    }
    this.handleLeftChange = this.handleLeftChange.bind(this);
    this.handleRightChange = this.handleRightChange.bind(this);
  }
  handleLeftChange=()=>{
    if(this.state.toggleIndex === 1 ){
      this.setState({
        toggleIndex:0,
        toggle:!this.state.toggle
      })
    }
  }
  handleRightChange=()=>{
    if(this.state.toggleIndex === 0 ){
      this.setState({
        toggleIndex:1,
        toggle:!this.state.toggle
      })
    }
  }
    render() {
        return(
          <div className={cx('disDetailwrapper')}>
            <Navigate/>
              <HeadUtil
                util={this.state.date.util}
                catemenu={this.state.date.catemenu}
                title={this.state.date.title}
                day={this.state.date.day}
                news={this.state.date.news}
              />
            <div className={cx('disDetailList')}>
              <div className={
                  this.state.toggle ?
                    cx('content','left','transform','on')
                    : cx('content','left','transform')}
                  onClick={this.handleLeftChange}
                >
                <DiscussionDetail
                  cate={this.state.contre.cate}
                  background={this.state.contre.background}
                  title={this.state.contre.title}
                  subTitle={this.state.contre.subTitle}
                  img={this.state.contre.img}
                  subImg={this.state.contre.subImg}
                  text01={this.state.contre.text01}
                  text02={this.state.contre.text02}
                />
              </div>
              <div className={
                  this.state.toggle ?
                  cx('content','right','transform')
                  : cx('content','right','transform','on')}
                  onClick={this.handleRightChange}
                >
                <DiscussionDetail
                  cate={this.state.pour.cate}
                  background={this.state.pour.background}
                  title={this.state.pour.title}
                  subTitle={this.state.pour.subTitle}
                  img={this.state.pour.img}
                  subImg={this.state.pour.subImg}
                  text01={this.state.pour.text01}
                  text02={this.state.pour.text02}
                />
              </div>
            </div>
          </div>
        );
    }
}

export default DiscussionDetailPage;
