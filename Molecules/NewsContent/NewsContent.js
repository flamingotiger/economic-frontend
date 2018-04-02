import React, {Component}from 'react';
import styles from './NewsContent.scss';
import classNames from 'classnames/bind';
import { NewsTitle } from '../../Atoms';
const cx = classNames.bind(styles);

class NewsContent extends Component{

  render(){

  return (
    <div className={cx('detail','col')}>
      <div className={this.props.hideImg ? cx('hideImgContainer') : cx('detailContainer')}>
      <NewsTitle newsTitle={this.props.content.newsTitle}/>
        <div>
        {this.props.hideImg ?
          null : 
          <img src={`/assets/${this.props.content.img}`} alt=""/>
        }
        </div>
      <div className={cx('detailTxt')}>
        {this.props.content.text}
      </div>
      </div>
    </div>
  )
  }
}

export default NewsContent;
