import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './StartUpPage.scss';
import { HeadUtil, StartUpPost } from '../../Atoms';
import { Navigate, HeadList } from '../../Molecules';
const cx = classNames.bind(styles);

class StartUpPage extends Component {
  constructor(props){
    super(props);
    this.state={
      keyword: '',
      search: false,
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
            title:'BYD1',
          },
          {
            img:'/assets/dummy-start_up.png',
            title:'BYD2',
          },
          {
            img:'/assets/dummy-start_up.png',
            title:'BYD3',
          },
          {
            img:'/assets/dummy-start_up.png',
            title:'BYD4',
          },
          {
            img:'/assets/dummy-start_up.png',
            title:'BYD5',
          },
          {
            img:'/assets/dummy-start_up.png',
            title:'BYD6',
          },
          {
            img:'/assets/dummy-start_up.png',
            title:'BYD7',
          },
          {
            img:'/assets/dummy-start_up.png',
            title:'BYD',
          },
        ]
    }
    this.toggle=this.toggle.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    this.renderContent = this.renderContent.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }
  toggle = () => {
    this.setState({
      toggle:!this.state.toggle
    });
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
       return <StartUpPost
         img={content.img}
         title={content.title}
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
           return contact.title.toLowerCase().indexOf(this.state.keyword) > -1;
           /* 0, 1 */
         });
         return content.map((content,i) => {
              return <StartUpPost
                img={content.img}
                title={content.title}
                key={i}
                />
          });
      };
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

export default StartUpPage;
