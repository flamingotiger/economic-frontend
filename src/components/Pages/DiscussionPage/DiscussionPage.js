import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './DiscussionPage.scss';
import { HeadUtil, DiscussionList } from '../../Atoms';
import { Navigate } from '../../Molecules';

const cx = classNames.bind(styles);

class DiscussionPage extends Component {
  constructor(props){
    super(props);
    this.state={
      keyword: '',
      search: false,
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
            title:"MONDIALISATION1",
            leftImg:"/assets/dummy-discussion-0.png",
            leftThumb:"/assets/dummy-main-0.png",
            rightImg:"/assets/dummy-discussion-1.png",
            rightThumb:"/assets/dummy-main-01.png",
          },
          {
            date:"DECEMBER 2018",
            title:"MONDIALISATION2",
            leftImg:"/assets/dummy-discussion-0.png",
            leftThumb:"/assets/dummy-main-0.png",
            rightImg:"/assets/dummy-discussion-1.png",
            rightThumb:"/assets/dummy-main-01.png",
          },
          {
            date:"DECEMBER 2018",
            title:"MONDIALISATION3",
            leftImg:"/assets/dummy-discussion-0.png",
            leftThumb:"/assets/dummy-main-0.png",
            rightImg:"/assets/dummy-discussion-1.png",
            rightThumb:"/assets/dummy-main-01.png",
          },
          {
            date:"DECEMBER 2018",
            title:"MONDIALISATION4",
            leftImg:"/assets/dummy-discussion-0.png",
            leftThumb:"/assets/dummy-main-0.png",
            rightImg:"/assets/dummy-discussion-1.png",
            rightThumb:"/assets/dummy-main-01.png",
          },
          {
            date:"DECEMBER 2018",
            title:"MONDIALISATION5",
            leftImg:"/assets/dummy-discussion-0.png",
            leftThumb:"/assets/dummy-main-0.png",
            rightImg:"/assets/dummy-discussion-1.png",
            rightThumb:"/assets/dummy-main-01.png",
          },
          {
            date:"DECEMBER 2018",
            title:"MONDIALISATION6",
            leftImg:"/assets/dummy-discussion-0.png",
            leftThumb:"/assets/dummy-main-0.png",
            rightImg:"/assets/dummy-discussion-1.png",
            rightThumb:"/assets/dummy-main-01.png",
          },
      ]
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.renderContent = this.renderContent.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  handleChange(e){
     /* event-handler first parameter e : event object */
     let keywordStr = e.target.value;
     this.setState({keyword: keywordStr, search: false });
   }
   handleSearch=()=>{
       this.setState({
         search: true
     })
   }
   renderContent= () => {
     const content = this.state.discussionList.map((content,i)=>{
       return <DiscussionList
         date={content.date}
         title={content.title}
         leftImg={content.leftImg}
         leftThumb={content.leftThumb}
         rightImg={content.rightImg}
         rightThumb={content.rightThumb}
         key={i}
       />
      })
       return content
     }
   handleKeyPress = (e) => {
       if (e.charCode === 13) {
         this.setState({
           search: true
         });
       }
       if (e.keyCode === 13) {
         this.setState({
           search: true
         });
       }
    }
    render() {
      const mapToComponents = (discussionList) => {
         discussionList = discussionList.filter((contact) => {
           return contact.title.toLowerCase().indexOf(this.state.keyword) > -1;
           /* 0, 1 */
         });
         return discussionList.map((content,i) => {
              return <DiscussionList
                date={content.date}
                title={content.title}
                leftImg={content.leftImg}
                leftThumb={content.leftThumb}
                rightImg={content.rightImg}
                rightThumb={content.rightThumb}
                key={i}
                />
          });
      };
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
                <div className={cx('search')}>
                <div className={cx('searchInput')}>
                  <input
                    name="keyword"
                    value={this.state.keyword}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                    placeholder="search" />
                </div>
                <button className={cx('searchBtn')} onClick={this.handleSearch}><img src="/assets/btn-search_black.svg" alt="btn"/></button>
                </div>
                <ul className={cx('listContainer')}>
                  {this.state.search ?  mapToComponents(this.state.discussionList) : this.renderContent()}
                </ul>
              </div>
          </div>
        );
    }
}

export default DiscussionPage;
