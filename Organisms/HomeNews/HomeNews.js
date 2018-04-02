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
      toggle:true
  }
  this.toggle = this.toggle.bind(this);
}
  toggle = () => {
    this.setState({
      toggle:!this.state.toggle
    });
  }
    render() {
      const {HomeNews} = this.props;
      const {toggle} = this.state;
        return(
          <div className={cx('newsWrapper')}>
            <HeadUtil
              util={this.props.HomeNews.date.util}
              catemenu={this.props.HomeNews.date.catemenu}
              day={this.props.HomeNews.date.day}
              title={this.props.HomeNews.date.title}
              />
            <HomeTitle homeTitle={HomeNews.content.homeTitle}/>
            <HomeSubTitle subTitle={HomeNews.content.subTitle}/>
            <HomeSubTitle subTitle={HomeNews.content.subTitle}/>
            <div className={cx('newsContent')} onClick={this.toggle}>
              <div className={toggle ? cx('blur','transform') : cx('blur','transform','on') }>
                <Link to="/news">
                <span>{HomeNews.content.clickText}</span>
              </Link>
              </div>
              <div className={cx('text')}>
                  <div className={cx('category')}>ECONOMIC</div>
                  <span>{HomeNews.content.text01}</span>
                  <div><img src={HomeNews.content.img} alt="columnImg"/></div>
                  <span>{HomeNews.content.text02}</span>
              </div>
            </div>
          </div>
        );
    }
}
export default HomeNews;
