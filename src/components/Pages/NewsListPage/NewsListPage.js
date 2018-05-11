import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './NewsListPage.scss';
import { HeadUtil } from '../../Atoms';
import { Navigate, NewsContent } from '../../Molecules';
import { Link } from 'react-router-dom';
import { NewsContentList } from '../../Atoms';
import { NewsApi } from '../../../api';

const cx = classNames.bind(styles);

class NewsListPage extends Component {
  constructor(props){
    super(props);

    const year = this.props.match.params.date.slice(0,4)
    const month = this.props.match.params.date.slice(4,6)
    const publishDate = year + "." + month

    this.state={
      loading:false,
      date : {
          util:"MAG 119 ",
          catemenu:"« REVUE ECONOMIQUE »",
          title:"ACTUALITES",
          day:`Publication on ${publishDate}`,
          news:"ACTUALITE DE CE MOIS-CI"
        },
      content:{},
      id:""
    }

  }

  async componentDidMount(){
    await NewsApi.listNews("?sort=-date").then(res =>
      this.dateList(res.data.newses)
    )
    await this.setState({ id:this.state.newses[0]._id, loading:true})
  }

  //month로 구분
  dateList = (apiData) => {
    const params = this.props.match.params.date
    let prevNews = params
    let news = apiData.filter(
      value => {
      let regDate = value.date.substring(0,7).replace(/-/,"");
        //같은 달
      if(regDate === prevNews){
          return true
        //그이외 값이 중복이 아닌값들
        }else{
          return false
        }
      })
    this.setState({ newses: news })
  }

  handleClick = (e) => {
    this.setState({
      id: e.target.getAttribute("data-key")
    })
  }

  renderContent= () => {
    const content = this.state.newses.map((content,i) => {
      return <NewsContentList
            key={i}
            image={content.images[0]}
            cate={content.sector}
            date={content.date}
            title={content.title}
            id={content._id}
            getId={this.handleClick}
          />
      })
    return content
  }

    render() {
      const params = this.props.match.params.date

      const { date, content, loading } = this.state

      if (!loading) return null;

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
                <Link to={`/news/list/${params}/detail/${this.state.id}`}>
                  <NewsContent id={this.state.id} />
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
