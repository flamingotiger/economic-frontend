import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './NewsListPage.scss';
import { HeadUtil,NewsListPost } from '../../Atoms';
import { Navigate } from '../../Molecules';
const cx = classNames.bind(styles);

class NewsListPage extends Component {
  constructor(props){
    super(props);
    this.state={
      keyword: '',
      search: false,
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
            date:'2017/11',
          },
          {
            img:'/assets/dummy-main-6.png',
            date:'2017/12',
          },
          {
            img:'/assets/dummy-main-6.png',
            date:'2018/01',
          },
          {
            img:'/assets/dummy-main-6.png',
            date:'2018/02',
          },
          {
            img:'/assets/dummy-main-6.png',
            date:'2018/03',
          },
          {
            img:'/assets/dummy-main-6.png',
            date:'2018/04',
            text:'What Makes Flyers Unrivaled What Makes Flyers Unrivaled'
          },
          {
            img:'/assets/dummy-main-6.png',
            date:'2018/05',
          },
          {
            img:'/assets/dummy-main-6.png',
            date:'2018/06',
          },
          {
            img:'/assets/dummy-main-6.png',
            date:'2018/07',
          }
        ],
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
   const content = this.state.content.map((content,i)=>{
     return <NewsListPost
       img={content.img}
       date={content.date}
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
      const mapToComponents = (content) => {
         content = content.filter((contact) => {
           return contact.date.toLowerCase().indexOf(this.state.keyword) > -1;
           /* 0, 1 */
         });
         return content.map((content,i) => {
              return <NewsListPost
                img={content.img}
                date={content.date}
                key={i}/>
          });
      };
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
                {this.state.search ?  mapToComponents(this.state.content) : this.renderContent()}
              </ul>
            </div>
          </div>
        );
    }
}

export default NewsListPage;
