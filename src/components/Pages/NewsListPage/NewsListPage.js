import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './NewsListPage.scss';
import { HeadUtil } from '../../Atoms';
import { Navigate, NewsContent } from '../../Molecules';
import { Link } from 'react-router-dom';
import { NewsContentList } from '../../Atoms';
const cx = classNames.bind(styles);

class NewsListPage extends Component {
  constructor(props){
    super(props);
    this.state={
      date : {
          util:"MAG 119 ",
          catemenu:"« REVUE ECONOMIQUE »",
          title:"ACTUALITES",
          day:"Publication on 2017. 11. 30 ",
          news:"ACTUALITE DE CE MOIS-CI"
        },
      content:{},
      loading:false,
      id:0
    }
    this.renderContent = this.renderContent.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount(){
    this.contentData();
  }
  contentData = async () => {
    const content = await this.callData();
    this.setState({
      content,
      loading:true
    })
  }
  callData = () => {
    return fetch('https://honghakbum.github.io/economic/actualites.json')
    .then(response => response.json() )
    .then(json =>
      {
        const news = 'news'
        const paramsUrl =  news + this.props.match.params.date.slice(1)
        const title =  paramsUrl
        return json[title]
      }
    )
    .catch(err => console.log(err))
  }
  handleClick=(e) => {
    this.setState({
      id: Number(e.target.getAttribute("data-key"))
    })
  }
  renderContent= () => {
  //  const year = String(this.props.match.params.date).slice(1).substring(0,4);
  //  const month = String(this.props.match.params.date).slice(5);

    const content = this.state.content.map((content,i) => {
      //날짜 비교 if((year + `. `+ month) === String(content.date).substring(0,8)){}
      return <NewsContentList
            img={content.img}
            cate={content.cate}
            date={content.date}
            subTitle={content.subTitle}
            key={i}
            id={content.id}
            getId={this.handleClick}
          />
      })
    return content
  }
    render() {
      const params = this.props.match.params.date
      const { date, content, loading } = this.state
      if (!loading) {
        return (
          null
        );
      }
        return(
          <div className={cx('wrapper')}>
            <Navigate idx={1}/>
              <HeadUtil
                util={date.util}
                catemenu={date.catemenu}
                title={date.title}
                day={date.day}
                news={date.news}
              />
            <div className={cx('newsWrapper')}>
              <div className={cx('detail','col')}>
                <Link to={`/news/list${params}/detail=${this.state.id}`}>
                  <NewsContent
                    content={content[this.state.id]}
                    />
                </Link>
                <div className={cx('whiteGradient')}></div>
              </div>
              <div className={cx('line')}></div>
              <div className={cx('list','col')}>
                  <div className={cx('listContainer')}>
                    {this.renderContent()}
                  </div>
              </div>
              </div>
            </div>
        );
    }
}

export default NewsListPage;
