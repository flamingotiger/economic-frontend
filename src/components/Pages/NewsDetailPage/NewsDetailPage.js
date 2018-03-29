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
  }
  toggle = () => {
    this.setState({
      toggle:!this.state.toggle
    });
  }
  handleClick = (e) => {
    const imgSrc = e.target.getAttribute('src');
        this.setState ({
          largeImg : imgSrc,
          thumbClick : true
        })
  }
   componentWillMount(){
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
     return fetch('https://honghakbum.github.io/economic/data.json')
     .then(response => response.json() )
     .then(json => json.actualites)
     .catch(err => console.log(err))
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
    render() {
      const paramsId =  Number(this.props.match.params.id.slice(1))
      const { content, loading, thumbClick } = this.state
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
            <HeadList toggle={this.state.toggle} headList={this.state.headList}/>
            <div className={cx('newsDetailContainer')}>
              <div className={cx('left','col')}>
                <div className={cx('leftImg')}>
                  { loading ?
                    thumbClick ? this.renderLarge(true) : this.renderLarge(false)
                    : "loading"
                  }
                </div>
                <div className={cx('thumb')}>
                  <ul className={cx('thumbContainer')}>
                    {loading ?
                      this.renderThumb()
                    : "Loading" }
                  </ul>
                </div>
              </div>
              <div className={cx('right','col')}>
                {loading ?
                  <div className={cx('rightContent')}>
                    <NewsContent
                        content={content[paramsId]}
                        hideImg={true}
                    />
                  </div>
                : "Loading"
                }
              <div className={cx('post')}>
                <div className={cx('postTitle')}>
                  More interresting news
                </div>
                <NewsDetailPostList content={content} loading={loading}/>
              </div>
            </div>
            </div>
          </div>
        );
    }
}

export default NewsDetailPage;
