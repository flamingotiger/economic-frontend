import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './DiscussionPage.scss';
import { HeadUtil } from '../../Atoms';
import { Navigate, Search, DiscussionLists } from '../../Molecules';

const cx = classNames.bind(styles);

class DiscussionPage extends Component {
  constructor(props){
    super(props);
    this.state={
      date : {
          util:"11111MAG 119 ",
          catemenu:"« REVUE ECONOMIQUE »",
          title:"",
          day:"Publication on 2017. 11. 30 ",
          news:""
        },
      discussionList:[
          {
            date:"DECEMBER 2018",
            title:"MONDIALISATION",
            leftImg:"/assets/dummy-discussion-0.png",
            leftThumb:"/assets/dummy-main-0.png",
            rightImg:"/assets/dummy-discussion-1.png",
            rightThumb:"/assets/dummy-main-01.png",
          },
          {
            date:"DECEMBER 2018",
            title:"MONDIALISATION",
            leftImg:"/assets/dummy-discussion-0.png",
            leftThumb:"/assets/dummy-main-0.png",
            rightImg:"/assets/dummy-discussion-1.png",
            rightThumb:"/assets/dummy-main-01.png",
          },
          {
            date:"DECEMBER 2018",
            title:"MONDIALISATION",
            leftImg:"/assets/dummy-discussion-0.png",
            leftThumb:"/assets/dummy-main-0.png",
            rightImg:"/assets/dummy-discussion-1.png",
            rightThumb:"/assets/dummy-main-01.png",
          },
          {
            date:"DECEMBER 2018",
            title:"MONDIALISATION",
            leftImg:"/assets/dummy-discussion-0.png",
            leftThumb:"/assets/dummy-main-0.png",
            rightImg:"/assets/dummy-discussion-1.png",
            rightThumb:"/assets/dummy-main-01.png",
          },
          {
            date:"DECEMBER 2018",
            title:"MONDIALISATION",
            leftImg:"/assets/dummy-discussion-0.png",
            leftThumb:"/assets/dummy-main-0.png",
            rightImg:"/assets/dummy-discussion-1.png",
            rightThumb:"/assets/dummy-main-01.png",
          },
      ]
    }
  }
    render() {
        return(
          <div className={cx('disWrapper')}>
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
              <DiscussionLists discussionList={this.state.discussionList}/>
            </div>
          </div>
        );
    }
}

export default DiscussionPage;
