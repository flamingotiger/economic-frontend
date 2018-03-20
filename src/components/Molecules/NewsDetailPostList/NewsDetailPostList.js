import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './NewsDetailPostList.scss';
import { NewsDetailPost } from '../../Atoms';

const cx = classNames.bind(styles);

class NewsDetailPostList extends Component {
  constructor(props){
    super(props);
    this.state={
        post :[
          {
            cate:'POLITIQUE',
            img:'/assets/dummy-main-3.png',
            subTitle:'What Makes Flyers Unrivaled',
          },
          {
            cate:'POLITIQUE',
            img:'/assets/dummy-main-4.png',
            subTitle:'What Makes Flyers Unrivaled',
          },
          {
            cate:'POLITIQUE',
            img:'/assets/dummy-main-5.png',
            subTitle:'What Makes Flyers Unrivaled',
          }
        ]
    }
    this.renderPost = this.renderPost.bind(this);
}
renderPost = () => {
  const post = this.state.post.map((post,i) => {
    return <NewsDetailPost
      cate={post.cate}
      subTitle={post.subTitle}
      text = {post.text}
      key={i}
      img = {post.img}
      />
  })
  return post;
}

    render() {
        return(
          <ul className={cx('postList')}>
            {this.renderPost()}
          </ul>
        );
    }
}
export default NewsDetailPostList;
