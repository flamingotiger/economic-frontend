import React, { Component } from 'react';
import styles from './NewsContentList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class NewsContentList extends Component {
  render(){
    return (
      <div className={cx('list')}>
        <div className={cx('listImg')}>
          <img src={`/assets/${this.props.img}`} alt="img" onClick={this.props.getId} data-key={this.props.id}/>
        </div>
        <div className={cx('listText')}>
          <dl>
            <dt><span className={cx('listTitle')} onClick={this.props.getId} data-key={this.props.id}>{this.props.cate}</span><span>{this.props.date}</span></dt>
            <dd onClick={this.props.getId} data-key={this.props.id}>{this.props.subTitle}</dd>
          </dl>
        </div>
      </div>
    )
  }
}

export default NewsContentList;
