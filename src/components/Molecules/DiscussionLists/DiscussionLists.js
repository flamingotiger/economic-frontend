import React, {Component}from 'react';
import styles from './DiscussionLists.scss';
import classNames from 'classnames/bind';
import { DiscussionList } from '../../Atoms';

const cx = classNames.bind(styles);

class DiscussionLists extends Component{
  constructor(props){
    super(props);
    this.renderContent = this.renderContent.bind(this);
  }
  renderContent= () => {
  const content = this.props.discussionList.map((content,i)=>{
    return <DiscussionList
      date={content.date}
      title={content.title}
      leftImg={content.leftImg}
      leftThumb={content.leftThumb}
      rightImg={content.rightImg}
      rightThumb={content.rightThumb}
      key={i}
    />
    })
    return content
  }
  render(){
    console.log(this.props);
  return (
    <div className={cx('disListContainer')}>
      {this.renderContent()}
    </div>
  )
  }
}

export default DiscussionLists;
