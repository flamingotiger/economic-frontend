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
        return(
          <div className={cx('newsWrapper')}>
            <HeadUtil
              util={this.props.HomeNews.date.util}
              catemenu={this.props.HomeNews.date.catemenu}
              day={this.props.HomeNews.date.day}
              title={this.props.HomeNews.date.title}
              />
            <HomeTitle homeTitle={this.props.HomeNews.content.homeTitle}/>
            <HomeSubTitle subTitle={this.props.HomeNews.content.subTitle}/>
            <HomeSubTitle subTitle={this.props.HomeNews.content.subTitle}/>
            <div className={cx('newsContent')} onClick={this.toggle}>
              <div className={this.state.toggle ? cx('blur','transform') : cx('blur','transform','on') }>
                <Link to="/news">
                <span>{this.props.HomeNews.content.clickText}</span>
              </Link>
              </div>
              <div className={cx('text')}>
                  <div className={cx('category')}>ECONOMIC</div>
                  <span>{this.props.HomeNews.content.text01}</span>
                  <div><img src={this.props.HomeNews.content.img} alt="columnImg"/></div>
                  <span>{this.props.HomeNews.content.text02}</span>
              </div>
            </div>
          </div>
        );
    }
}
export default HomeNews;
