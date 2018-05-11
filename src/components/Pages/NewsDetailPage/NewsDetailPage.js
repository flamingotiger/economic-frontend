import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './NewsDetailPage.scss';
import { HeadUtil } from '../../Atoms';
import { Navigate, NewsContent, NewsDetailPostList, HeadList } from '../../Molecules';
import { NewsApi, ImageApi } from '../../../api';

const cx = classNames.bind(styles);

class NewsDetailPage extends Component {
  constructor(props){
    super(props);
    this.state={
      headList:[
        {
          url:"201805",
          img:'dummy-main-6.png'
        },
        {
          url:"201804",
          img:'dummy-main-6.png'
        },
        {
          url:"201804",
          img:'dummy-main-6.png'
        },
        {
          url:"201804",
          img:'dummy-main-6.png'
        },
        {
          url:"201804",
          img:'dummy-main-6.png'
        },
        {
          url:"201804",
          img:'dummy-main-6.png'
        },
        {
          url:"201804",
          img:'dummy-main-6.png'
        },
        {
          url:"201804",
          img:'dummy-main-6.png'
        },
        {
          url:"201804",
          img:'dummy-main-6.png'
        },
        {
          url:"201804",
          img:'dummy-main-6.png'
        },
      ],
      date : {
          util:"MAG 119 ",
          catemenu:"« REVUE ECONOMIQUE »",
          title:"ACTUALITES",
          day:undefined,
          news:"ACTUALITE DE CE MOIS-CI"
        },
      toggle: false,
      thumbClick:false,
      image:[],
      largeImg : "",
      loading:false,
    }

  }

  toggle = () => {
    this.setState({ toggle:!this.state.toggle });
  }

  dateList = (apiData) => {
    const params = this.props.match.params.date
    let prevNews = params
    let news = apiData.filter(
      value => {
      let regDate = value.date.substring(0,7).replace(/-/,"");
        //같은 달
      if(regDate === prevNews){
          return true
        //그 이외 값이 중복이 아닌값들
        }else{
          return false
        }
      })
    this.setState({ newses: news })
  }

   async componentDidMount(){
      await NewsApi.listNews("?sort=-date").then(res => {
        this.dateList(res.data.newses)
      })
      await NewsApi.getNews(this.props.match.params.id).then(res => this.setState({ news: res.data.news }) )
      await this.state.news.images.reverse().map( data =>
        ImageApi.viewThumbnailImage(data, 1024).then(res =>
            this.setState({ image: this.state.image.concat(res.config.url)})
          )
        )
      await this.setState({ loading:true })
   }

   renderThumb = () => {
     const paramsId =  this.props.match.params.id
     return this.state.image.map((content, i) => {
       return (
         <li key={i} className={cx('thumbImg')} onClick={this.handleClick}>
           <img src={content} alt="img"/>
         </li>
       )
     })
   }

   //thumb click
   handleClick = (e) => {
     const imgSrc = e.target.getAttribute('src');
     this.setState ({ largeImg : imgSrc, thumbClick : true })
   }

   //left img
   renderLarge = (click) => {
     const paramsId =  this.props.match.params.id
     if(click){
       return <img src={this.state.largeImg} alt="img"/>
     }else{
       return <img src={this.state.image[0]} alt="img"/>
     }
   }

   postClick = () => { this.setState({ thumbClick:false }) }

    render() {
      const paramsDate = this.props.match.params.date;
      const paramsId =  this.props.match.params.id;
      const { newses, content, loading, thumbClick, toggle, headList } = this.state

      if(!loading) return null;

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
            <HeadList toggle={toggle} headList={headList} news={true}/>
            <div className={cx('newsDetailContainer')}>
              <div className={cx('left','col')}>
                <div className={cx('leftImg')}>
                { thumbClick ? this.renderLarge(true) : this.renderLarge(false) }
                </div>
                <div className={cx('thumb')}>
                  <ul className={cx('thumbContainer')}>
                      { this.renderThumb() }
                  </ul>
                </div>
              </div>
              <div className={cx('right','col')}>
                <div className={cx('rightContent')}>
                  <NewsContent id={paramsId} hideImg={true}/>
                </div>
              <div className={cx('post')}>
                <div className={cx('postTitle')}>
                  More interresting news
                </div>
                <NewsDetailPostList
                  newses={newses}
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
