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
      id:0,
      discontent:{},
      date : {
          util:"MAG 119 ",
          catemenu:"« REVUE ECONOMIQUE »",
          title:"DEBAT",
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
    this.renderDetial1 = this.renderDetial1.bind(this);
    this.renderDetia2l = this.renderDetial2.bind(this);
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
  discontentData = async () => {
    const discontent = await this.callData();
    this.setState({
      discontent,
      loading:true
    })
  }
  callData = () => {
     return fetch('https://honghakbum.github.io/economic/debat.json')
     .then(response => response.json() )
     .then(json => json.debat)
     .catch(err => console.log(err))
  }
  componentDidMount(){
    this.discontentData();
    if(this.props.match.params.pros.substr(0,7) === ":contre"){
      this.setState({
        toggle:true,
        toggleIndex:0,
        id:Number(this.props.match.params.pros.slice(7))
      })
    }
    else if(this.props.match.params.pros.substr(0,5) === ":pour"){
      this.setState({
        toggle:false,
        toggleIndex:1,
        id:Number(this.props.match.params.pros.slice(5))
      })
    }
  }
  renderDetial1 = () => {
    const detail1 = this.state.discontent[this.state.id].detail1
    return [
      <DiscussionDetail
        key={this.state.id}
        cate={detail1.cate}
        background={detail1.background}
        title={detail1.title}
        subTitle={detail1.subTitle}
        img={detail1.img}
        subImg={detail1.subImg}
        text01={detail1.text01}
        text02={detail1.text02}
      />
    ]
  }
  renderDetial2 = () => {
    const detail2 = this.state.discontent[this.state.id].detail2
    return [
      <DiscussionDetail
        key={this.state.id}
        cate={detail2.cate}
        background={detail2.background}
        title={detail2.title}
        subTitle={detail2.subTitle}
        img={detail2.img}
        subImg={detail2.subImg}
        text01={detail2.text01}
        text02={detail2.text02}
      />
    ]
  }

    render() {
      const {loading, date} = this.state
      if(!loading){
        return null
      }
        return(
          <div className={cx('disDetailwrapper')}>
            <Navigate idx={3}/>
              <HeadUtil
                util={date.util}
                catemenu={date.catemenu}
                title={date.title}
                day={date.day}
                news={date.news}
              />
            <div className={cx('disDetailList')}>
              <div className={
                  this.state.toggle ?
                    cx('content','left','transform','on')
                    : cx('content','left','transform')}
                  onClick={this.handleLeftChange}
                >
                { this.renderDetial1() }
              </div>
              <div className={
                  this.state.toggle ?
                  cx('content','right','transform')
                  : cx('content','right','transform','on')}
                  onClick={this.handleRightChange}
                >
                { this.renderDetial2() }
              </div>
            </div>
          </div>
        );
    }
}

export default DiscussionDetailPage;
