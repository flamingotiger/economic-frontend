import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './HomeNews.scss';
import { HeadUtil, HomeTitle, HomeSubTitle } from '../../Atoms';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

class HomeNews extends Component {
  constructor(props){
    super(props);
    this.state={
      toggle:true,
      content:{},
      loading:false
  }
  this.toggle = this.toggle.bind(this);
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
      loading:true
    })
  }
  callData = () => {
    return fetch('https://honghakbum.github.io/economic/data.json')
    .then(response => response.json() )
    .then(json => json.actualites)
    .catch(err => console.log(err))
  }
    render() {
      if(this.state.loading){
        const length = (this.state.content).length - 1
        const content = (this.state.content)[length]
        const year = (this.state.content)[length].date.substring(0,4)
        const month = (this.state.content)[length].date.substring(6,8)
        console.log()
        return(
          <div className={cx('newsWrapper')}>
            <HeadUtil
              util={this.props.HomeNews.date.util}
              catemenu={this.props.HomeNews.date.catemenu}
              day={this.props.HomeNews.date.day}
              title={this.props.HomeNews.date.title}
              />
            <HomeTitle homeTitle={content.newsTitle}/>
            <HomeSubTitle subTitle={content.subTitle}/>
            <div className={cx('newsContent')} onClick={this.toggle}>
              <div className={this.state.toggle ? cx('blur','transform') : cx('blur','transform','on') }>
                <Link to={`/news/list=${year + month}`}>
                <span>{content.subTitle}</span>
              </Link>
              </div>
              <div className={cx('text')}>
                  <div className={cx('category')}>ECONOMIC</div>
                  <span>{content.text}</span>
                  <div><img src={`/assets/${content.img}`} alt="columnImg"/></div>
                  <span>{content.text}</span>
              </div>
            </div>
          </div>
        );}else{
          return (<div>Loading</div>)
        }
    }
}
export default HomeNews;
