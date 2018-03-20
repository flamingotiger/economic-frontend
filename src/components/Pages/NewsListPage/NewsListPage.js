import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './NewsListPage.scss';
import { HeadUtil } from '../../Atoms';
import { Navigate, Search, NewsListPosts } from '../../Molecules';
const cx = classNames.bind(styles);

class NewsListPage extends Component {
  constructor(props){
    super(props);
    this.state={
      date : {
          util:"11111MAG 119 ",
          catemenu:"« REVUE ECONOMIQUE »",
          title:"DÉCEMBRE 2018",
          day:"Publication on 2017. 11. 30 ",
          news:"ACTUALITE DE CE MOIS-CI"
        },
        content:[
          {
            img:'/assets/dummy-main-6.png',
            title:'Economie',
            date:'2017. 11. 27',
            text:'What Makes Flyers Unrivaled What Makes Flyers Unrivaled'
          },
          {
            img:'/assets/dummy-main-6.png',
            title:'Economie',
            date:'2017. 11. 28',
            text:'What Makes Flyers Unrivaled What Makes Flyers Unrivaled'
          },
          {
            img:'/assets/dummy-main-6.png',
            title:'Economie',
            date:'2017. 11. 29',
            text:'What Makes Flyers Unrivaled What Makes Flyers Unrivaled'
          },
          {
            img:'/assets/dummy-main-6.png',
            title:'Economie',
            date:'2017. 11. 30',
            text:'What Makes Flyers Unrivaled What Makes Flyers Unrivaled'
          },
          {
            img:'/assets/dummy-main-6.png',
            title:'Economie',
            date:'2017. 11. 31',
            text:'What Makes Flyers Unrivaled What Makes Flyers Unrivaled'
          },
          {
            img:'/assets/dummy-main-6.png',
            title:'Economie',
            date:'2017. 12. 01',
            text:'What Makes Flyers Unrivaled What Makes Flyers Unrivaled'
          },
          {
            img:'/assets/dummy-main-6.png',
            title:'Economie',
            date:'2017. 12. 02',
            text:'What Makes Flyers Unrivaled What Makes Flyers Unrivaled'
          },
          {
            img:'/assets/dummy-main-6.png',
            title:'Economie',
            date:'2017. 12. 03',
            text:'What Makes Flyers Unrivaled What Makes Flyers Unrivaled'
          },
        ]
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
            <div className={cx('newsList')}>
                <Search />
                <NewsListPosts content={this.state.content}/>
            </div>
          </div>
        );
    }
}

export default NewsListPage;
