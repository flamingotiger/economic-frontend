import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './StartUpPage.scss';
import { HeadUtil } from '../../Atoms';
import { Navigate, Search, StartUpPosts, HeadList } from '../../Molecules';
const cx = classNames.bind(styles);

class StartUpPage extends Component {
  constructor(props){
    super(props);
    this.state={
      toggle: false,
      headList:[
        {
          url:"/startup",
          img:'dummy-start_up.png'
        },
        {
          url:"/startup",
          img:'dummy-start_up.png'
        },
        {
          url:"/startup",
          img:'dummy-start_up.png'
        },
        {
          url:"/startup",
          img:'dummy-start_up.png'
        },
        {
          url:"/startup",
          img:'dummy-start_up.png'
        },
        {
          url:"/startup",
          img:'dummy-start_up.png'
        },
        {
          url:"/startup",
          img:'dummy-start_up.png'
        },
        {
          url:"/startup",
          img:'dummy-start_up.png'
        },
        {
          url:"/startup",
          img:'dummy-start_up.png'
        },
        {
          url:"/startup",
          img:'dummy-start_up.png'
        },
        {
          url:"/startup",
          img:'dummy-start_up.png'
        },
        {
          url:"/startup",
          img:'dummy-start_up.png'
        },
        {
          url:"/startup",
          img:'dummy-start_up.png'
        },
        {
          url:"/startup",
          img:'dummy-start_up.png'
        },
        {
          url:"/startup",
          img:'dummy-start_up.png'
        },
        {
          url:"/startup",
          img:'dummy-start_up.png'
        },
        {
          url:"/startup",
          img:'dummy-start_up.png'
        },
      ],
      date : {
          util:"11111MAG 119 ",
          catemenu:"« REVUE ECONOMIQUE »",
          title:"DÉCEMBRE 2018",
          day:"Publication on 2017. 11. 30 ",
          news:"ACTUALITE DE CE MOIS-CI"
        },
        content:[
          {
            img:'/assets/dummy-start_up.png',
            title:'BYD',
          },
          {
            img:'/assets/dummy-start_up.png',
            title:'BYD',
          },
          {
            img:'/assets/dummy-start_up.png',
            title:'BYD',
          },
          {
            img:'/assets/dummy-start_up.png',
            title:'BYD',
          },
          {
            img:'/assets/dummy-start_up.png',
            title:'BYD',
          },
          {
            img:'/assets/dummy-start_up.png',
            title:'BYD',
          },
          {
            img:'/assets/dummy-start_up.png',
            title:'BYD',
          },
          {
            img:'/assets/dummy-start_up.png',
            title:'BYD',
          },
        ]
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
            <div className={cx('newsList')}>
                <Search />
                <StartUpPosts content={this.state.content}/>
            </div>
          </div>
        );
    }
}

export default StartUpPage;
