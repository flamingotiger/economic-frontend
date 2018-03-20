import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './NewsDetailPage.scss';
import { HeadUtil } from '../../Atoms';
import { Navigate, NewsContent, NewsDetailPostList, HeadList } from '../../Molecules';

const cx = classNames.bind(styles);

class NewsDetailPage extends Component {
  constructor(props){
    super(props);
    this.state={
      toggle: false,
      headList:[
        {
          url:"/news/list",
          img:'dummy-main-6.png'
        },
        {
          url:"/news/list",
          img:'dummy-main-6.png'
        },
        {
          url:"/news/list",
          img:'dummy-main-6.png'
        },
        {
          url:"/news/list",
          img:'dummy-main-6.png'
        },
        {
          url:"/news/list",
          img:'dummy-main-6.png'
        },
        {
          url:"/news/list",
          img:'dummy-main-6.png'
        },
        {
          url:"/news/list",
          img:'dummy-main-6.png'
        },
        {
          url:"/news/list",
          img:'dummy-main-6.png'
        },
        {
          url:"/news/list",
          img:'dummy-main-6.png'
        },
        {
          url:"/news/list",
          img:'dummy-main-6.png'
        },
        {
          url:"/news/list",
          img:'dummy-main-6.png'
        },
        {
          url:"/news/list",
          img:'dummy-main-6.png'
        },
        {
          url:"/news/list",
          img:'dummy-main-6.png'
        },
        {
          url:"/news/list",
          img:'dummy-main-6.png'
        },
        {
          url:"/news/list",
          img:'dummy-main-6.png'
        },
        {
          url:"/news/list",
          img:'dummy-main-6.png'
        },
        {
          url:"/news/list",
          img:'dummy-main-6.png'
        },
      ],
      date : {
          util:"11111MAG 119 ",
          catemenu:"« REVUE ECONOMIQUE »",
          title:"DÉCEMBRE 2018",
          day:"Publication on 2017. 11. 30 ",
          news:"ACTUALITE DE CE MOIS-CI"
        },
      content:{
        newsTitle:"PSA forcé d'importer de plus en plus de moteurs made in China",
        text:`Once the printer ink runs dry it has to be replaced with another inkjet cartridge. There are many reputed companies like Canon, Epson, Dell, and Lexmark that provide the necessary cartridges to replace the empty cartridges. Replacing inkjet cartridge can add to a very big cost. It could be worse if you have to replace the empty cartridges frequently every month. Nowadays many buyers are making use of compatible Inkjet Cartridges as they are less expensive and are easily available online. These compatible inkjet cartridges are available from the third party at a much lower price. These cartridges can be replaced by the printer ink of similar brand. Compatible Inkjet Cartridge will help you to make extra-ordinary savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins to dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out condition. Always remember to refill the cartridge as early as possible.`
      }
    }
    this.toggle=this.toggle.bind(this);
  }
  toggle = () => {
    this.setState({
      toggle:!this.state.toggle
    });
  }
    render() {
        return(
          <div className={cx('wrapper')}>
            <Navigate/>
            <div onClick={this.toggle}>
              <HeadUtil
                util={this.state.date.util}
                catemenu={this.state.date.catemenu}
                title={this.state.date.title}
                day={this.state.date.day}
                news={this.state.date.news}
              />
            </div>
            <HeadList toggle={this.state.toggle} headList={this.state.headList}/>
            <div className={cx('newsWrapper')}>
              <div className={cx('left','col')}>
                <div className={cx('leftImg')}>
                  <img src="/assets/dummy-main-6.png" alt="img"/>
                </div>
                <div className={cx('thumb')}>
                  <ul className={cx('thumbContainer')}>
                    <li className={cx('thumbImg')}>
                      <img src="/assets/dummy-main-7.png" alt="china"/>
                    </li>
                    <li className={cx('thumbImg','on')}>
                      <img src="/assets/dummy-main-6.png" alt="china"/>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={cx('right','col')}>
                <NewsContent
                    content={this.state.content}
                />
              <div className={cx('post')}>
                <div className={cx('postTitle')}>
                  More interresting news
                </div>
                <NewsDetailPostList/>
              </div>
            </div>
            </div>
          </div>
        );
    }
}

export default NewsDetailPage;
