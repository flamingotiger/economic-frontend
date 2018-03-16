import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './HomeDiscussion.scss';
import { HomeDiscussionTitle } from '../../Atoms';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

class HomeDiscussion extends Component {
  constructor(props){
    super(props);
    this.state={
      toggle:true,
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
          `,
          img:'/assets/dummy-main-1.png',
          clickText:'VOIR  LES ARTICLES DE CE MOIS-CI'
    }
  }
  this.toggle = this.toggle.bind(this);
}
toggle = () => {
  this.setState({
    toggle:!this.state.toggle
  });
}
    render() {
        return(
          <div className={cx('newsWrapper')}>
            <HomeDiscussionTitle HomeDiscussionTitle={this.state.content.HomeDiscussionTitle}/>
            <div className={cx('newsContent')} onClick={this.toggle}>
              <div className={cx('text')}>
                <div className={this.state.toggle ? cx('blur') : cx('blur','on') }>
                  <Link to="/discussion">
                  <span>{this.state.content.clickText}</span>
                  </Link>
                </div>
                <div className={cx('column','column1')}>
                  <img src={this.state.content.img} alt="columnImg"/>
                </div>
                <div className={cx('column','column2')}>
                  {this.state.content.text}
                </div>
                <div className={cx('column','column3')}>
                  <img src={this.state.content.img} alt="columnImg"/>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
export default HomeDiscussion;
