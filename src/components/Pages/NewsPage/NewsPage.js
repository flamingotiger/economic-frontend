import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './NewsPage.scss';
import { HeadUtil } from '../../Atoms';
import { Navigate, NewsContent } from '../../Molecules';
import { Link } from 'react-router-dom';
import { NewsContentList } from '../../Atoms';

const cx = classNames.bind(styles);

class NewsPage extends Component {
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
    return fetch('https://honghakbum.github.io/economic/data.json')
    .then(response => response.json() )
    .then(json => json.actualites)
    .catch(err => console.log(err))
  }
  handleClick=(e) => {
    this.setState({
      id: Number(e.target.getAttribute("data-key"))
    })
  }
  renderContent= () => {
  const content = this.state.content.map((content,i)=>{
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
      const { date, content, loading } = this.state
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
                <Link to={`/news/list/detail:${this.state.id}`}>
                  {loading ?
                  <NewsContent
                    content={content[this.state.id]}
                    /> : "Loading"
                  }
                </Link>
                <div className={cx('whiteGradient')}></div>
              </div>
              <div className={cx('line')}></div>
              <div className={cx('list','col')}>
                  <div className={cx('listContainer')}>
                  {loading ?
                    this.renderContent()
                    : "Loading"
                  }
                  </div>
              </div>
              </div>
            </div>
        );
    }
}

export default NewsPage;
