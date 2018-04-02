import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './NewsDetailPostList.scss';
import { NewsDetailPost } from '../../Atoms';

const cx = classNames.bind(styles);

class NewsDetailPostList extends Component {
  constructor(props){
    super(props);
    this.state={
    }
    this.renderPost = this.renderPost.bind(this);
}
renderPost = () => {
  const content = this.props.content
  const {paramsDate} = this.props
  return [
    <NewsDetailPost
      key={0}
      cate={content[0].cate}
      subTitle={content[0].subTitle}
      text = {content[0].text}
      img = {content[0].img}
      url = {content[0].id}
      paramsDate={paramsDate}
      hideText = {true}
      />,
      <NewsDetailPost
        key={1}
        cate={content[1].cate}
        subTitle={content[1].subTitle}
        text = {content[1].text}
        img = {content[1].img}
        url = {content[1].id}
        paramsDate={paramsDate}
        hideText = {true}
        />,
      <NewsDetailPost
        key={2}
        cate={content[2].cate}
        subTitle={content[2].subTitle}
        text = {content[2].text}
        img = {content[2].img}
        url = {content[2].id}
        paramsDate={paramsDate}
        hideText = {true}
        />
  ]
}
    render() {
    const {loading} = this.props
    if(!loading){
      return null
    }
        return(
          <ul className={cx('postList')} onClick={this.props.postClick}>
              {this.renderPost()}
          </ul>
        );
    }
}
export default NewsDetailPostList;
