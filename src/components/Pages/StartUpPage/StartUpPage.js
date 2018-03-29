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
          util:"MAG 119 ",
          catemenu:"« REVUE ECONOMIQUE »",
          title:"DECOUVERT D’UNE ENTREPRISE",
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
          <div className={cx('startupWrapper')}>
            <Navigate idx={2}/>
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
            <div className={cx('startupList')}>
              <div className={cx('search')}>
              <div className={cx('searchInput')}>
                <input
                  name="keyword"
                  value={this.state.keyword}
                  onChange={this.handleChange}
                  onKeyPress={this.handleKeyPress}
                  placeholder="search"
                  autoComplete="off"
                  />
              </div>
              </div>
              <ul className={cx('listContainer')}>
                {mapToComponents(this.state.content)}
              </ul>
            </div>
          </div>
        );
    }
}

export default StartUpPage;
