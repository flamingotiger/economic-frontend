import React, {Component}from 'react';
import styles from './NewsListPosts.scss';
import classNames from 'classnames/bind';
import { NewsListPost } from '../../Atoms';

const cx = classNames.bind(styles);

class NewsListPosts extends Component{
  constructor(props){
    super(props);
    this.renderContent = this.renderContent.bind(this);
  }
  renderContent= () => {
  const content = this.props.content.map((content,i)=>{
    return <NewsListPost
      img={content.img}
      date={content.date}
      key={i}
    />
    })
    return content
  }
  render(){

  return (
    <div className={cx('listContainer')}>
      <ul className={cx('thumbList')}>
        {this.renderContent()}
      </ul>
    </div>
  )
  }
}

export default NewsListPosts;
