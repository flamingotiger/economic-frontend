import React, {Component}from 'react';
import styles from './StartUpPosts.scss';
import classNames from 'classnames/bind';
import { StartUpPost } from '../../Atoms';

const cx = classNames.bind(styles);

class StartUpPosts extends Component{
  constructor(props){
    super(props);
    this.renderContent = this.renderContent.bind(this);
  }
  renderContent= () => {
  const content = this.props.content.map((content,i)=>{
    return <StartUpPost
      img={content.img}
      title={content.title}
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

export default StartUpPosts;
