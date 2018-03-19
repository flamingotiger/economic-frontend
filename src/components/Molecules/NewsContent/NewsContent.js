import React, {Component}from 'react';
import styles from './NewsContent.scss';
import classNames from 'classnames/bind';
import { NewsTitle } from '../../Atoms';
const cx = classNames.bind(styles);

class NewsContent extends Component{
  render(){
  return (
    <div className={cx('detail','col')}>
      <div className={cx('detailContainer')}>
      <NewsTitle newsTitle={this.props.content.newsTitle}/>
        <div>
          <img src={`/assets/${this.props.content.img}`} alt=""/>
        </div>
      <div className={cx('detailTxt')}>
        {this.props.content.text}
      </div>
      <div className={cx('whiteGradient')}></div>
      </div>
    </div>
  )
  }
}

export default NewsContent;
