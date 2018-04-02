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
          url:"/news",
          img:'dummy-main-6.png'
        },
        {
          url:"/news",
          img:'dummy-main-6.png'
        },
        {
          url:"/news",
          img:'dummy-main-6.png'
        },
        {
          url:"/news",
          img:'dummy-main-6.png'
        },
        {
          url:"/news",
          img:'dummy-main-6.png'
        },
        {
          url:"/news",
          img:'dummy-main-6.png'
        },
        {
          url:"/news",
          img:'dummy-main-6.png'
        },
        {
          url:"/news",
          img:'dummy-main-6.png'
        },
        {
          url:"/news",
          img:'dummy-main-6.png'
        },
        {
          url:"/news",
          img:'dummy-main-6.png'
        },
        {
          url:"/news",
          img:'dummy-main-6.png'
        },
        {
          url:"/news",
          img:'dummy-main-6.png'
        },
        {
          url:"/news",
          img:'dummy-main-6.png'
        },
        {
          url:"/news",
          img:'dummy-main-6.png'
        },
        {
          url:"/news",
          img:'dummy-main-6.png'
        },
        {
          url:"/news",
          img:'dummy-main-6.png'
        },
        {
          url:"/news",
          img:'dummy-main-6.png'
        },
      ],
      largeImg : "",
      date : {
          util:"MAG 119 ",
          catemenu:"« REVUE ECONOMIQUE »",
          title:"ACTUALITES",
          day:"Publication on 2017. 11. 30 ",
          news:"ACTUALITE DE CE MOIS-CI"
        },
      content:{},
      loading:false,
      thumbClick:false
    }
    this.toggle=this.toggle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderThumb = this.renderThumb.bind(this);
    this.renderLarge = this.renderLarge.bind(this);
    this.postClick = this.postClick.bind(this);
  }
  toggle = () => {
    this.setState({
      toggle:!this.state.toggle
    });
  }
   componentDidMount(){
       this.contentData();
   }
   contentData = async () => {
     const content = await this.callData();
     this.setState({
       content,
       loading:true,
     })
   }
   callData = () => {
     return fetch('https://honghakbum.github.io/economic/actualites.json')
     .then(response => response.json() )
     .then(json =>
       {
         const news = 'news'
         const paramsUrl =  news + this.props.match.params.date.slice(1)
         const date =  paramsUrl
         return json[date]
       }
     )
     .catch(err => console.log(err))
   }
   //thumb click
   handleClick = (e) => {
     const imgSrc = e.target.getAttribute('src');
         this.setState ({
           largeImg : imgSrc,
           thumbClick : true
         })
   }
   renderThumb = () => {
     const paramsId =  Number(this.props.match.params.id.slice(1))
     return [
       <li key={1} className={cx('thumbImg')} onClick={this.handleClick}>
         <img src={`/assets/${this.state.content[paramsId].img}`} alt="img"/>
       </li>,
       <li key={2} className={cx('thumbImg')} onClick={this.handleClick}>
         <img src={`/assets/${this.state.content[paramsId].img1}`} alt="img"/>
       </li>,
       <li key={3} className={cx('thumbImg')} onClick={this.handleClick}>
         <img src={`/assets/${this.state.content[paramsId].img2}`} alt="img"/>
       </li>
     ]
   }
   //left img
   renderLarge = (click) => {
     const paramsId =  Number(this.props.match.params.id.slice(1))
     if(click){
       return [
         <img key={1} src={this.state.largeImg} alt="img"/>
       ]
     }else{
       return [
         <img key={1} src={`/assets/${this.state.content[paramsId].img}`} alt="img"/>
       ]
     }
   }
   postClick = () => {
     this.setState({
       thumbClick:false
     })
   }
    render() {
      const paramsDate = this.props.match.params.date;
      const paramsId =  Number(this.props.match.params.id.slice(1));
      const { content, loading, thumbClick, toggle, headList } = this.state
      console.log(this.state.thumbClick)
      if(!loading){
        return null
      }
        return(
          <div className={cx('newsDetailwrapper')}>
            <Navigate idx={1}/>
            <div onClick={this.toggle}>
              <HeadUtil
                util={this.state.date.util}
                catemenu={this.state.date.catemenu}
                title={this.state.date.title}
                day={this.state.date.day}
                news={this.state.date.news}
              />
            </div>
            <HeadList toggle={toggle} headList={headList}/>
            <div className={cx('newsDetailContainer')}>
              <div className={cx('left','col')}>
                <div className={cx('leftImg')}>
                { thumbClick ? this.renderLarge(true) : this.renderLarge(false)}
                </div>
                <div className={cx('thumb')}>
                  <ul className={cx('thumbContainer')}>
                      {this.renderThumb()}
                  </ul>
                </div>
              </div>
              <div className={cx('right','col')}>
                <div className={cx('rightContent')}>
                  <NewsContent
                      content={content[paramsId]}
                      hideImg={true}
                  />
                </div>
              <div className={cx('post')}>
                <div className={cx('postTitle')}>
                  More interresting news
                </div>
                <NewsDetailPostList
                  content={content}
                  loading={loading}
                  paramsDate={paramsDate}
                  postClick={this.postClick}
                  />
              </div>
            </div>
            </div>
          </div>
        );
    }
}

export default NewsDetailPage;
