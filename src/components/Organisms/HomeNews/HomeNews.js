import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './HomeNews.scss';
import { HeadUtil, HomeTitle, HomeSubTitle } from '../../Atoms';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

class HomeNews extends Component {
  constructor(props){
    super(props);
    this.state={
      toggle:true,
      date : {
          util:"MAG 119 ",
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
          it contains begins to dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out
          `,
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
            <HeadUtil
              util={this.state.date.util}
              catemenu={this.state.date.catemenu}
              day={this.state.date.day}
              title={this.state.date.title}
              />
            <HomeTitle homeTitle={this.state.content.homeTitle}/>
            <HomeSubTitle subTitle={this.state.content.subTitle}/>
            <HomeSubTitle subTitle={this.state.content.subTitle}/>
            <div className={cx('newsContent')} onClick={this.toggle}>
              <div className={this.state.toggle ? cx('blur') : cx('blur','on') }>
                <Link to="/news">
                <span>{this.state.content.clickText}</span>
              </Link>
              </div>
              <div className={cx('text')}>
                  <div className={cx('category')}>ECONOMIC</div>
                  <span>{this.state.content.text01}</span>
                  <div><img src={this.state.content.img} alt="columnImg"/></div>
                  <span>{this.state.content.text02}</span>
              </div>
            </div>
          </div>
        );
    }
}
export default HomeNews;
