import React, {Component}from 'react';
import styles from './NewsContentLists.scss';
import classNames from 'classnames/bind';
import { NewsContentList } from '../../Atoms';

const cx = classNames.bind(styles);

class NewsContentLists extends Component{
  constructor(props){
    super(props);
    this.state={
      content:[
        {
          img:'dummy-main-4.png',
          title:'Economie',
          date:'2017. 11. 27',
          text:'What Makes Flyers Unrivaled What Makes Flyers Unrivaled'
        },
        {
          img:'dummy-main-4.png',
          title:'Economie',
          date:'2017. 11. 28',
          text:'What Makes Flyers Unrivaled What Makes Flyers Unrivaled'
        },
        {
          img:'dummy-main-4.png',
          title:'Economie',
          date:'2017. 11. 29',
          text:'What Makes Flyers Unrivaled What Makes Flyers Unrivaled'
        },
        {
          img:'dummy-main-4.png',
          title:'Economie',
          date:'2017. 11. 30',
          text:'What Makes Flyers Unrivaled What Makes Flyers Unrivaled'
        },
        {
          img:'dummy-main-4.png',
          title:'Economie',
          date:'2017. 11. 31',
          text:'What Makes Flyers Unrivaled What Makes Flyers Unrivaled'
        },
        {
          img:'dummy-main-4.png',
          title:'Economie',
          date:'2017. 12. 01',
          text:'What Makes Flyers Unrivaled What Makes Flyers Unrivaled'
        },
        {
          img:'dummy-main-4.png',
          title:'Economie',
          date:'2017. 12. 02',
          text:'What Makes Flyers Unrivaled What Makes Flyers Unrivaled'
        },
        {
          img:'dummy-main-4.png',
          title:'Economie',
          date:'2017. 12. 03',
          text:'What Makes Flyers Unrivaled What Makes Flyers Unrivaled'
        },
      ]
    }
    this.renderContent = this.renderContent.bind(this);
  }
  renderContent= () => {
  const content = this.state.content.map((content,i)=>{
    return <NewsContentList
      img={content.img}
      title={content.title}
      date={content.date}
      text={content.text}
      key={i}
    />
    })
    return content
  }
  render(){

  return (
    <div className={cx('listContainer')}>
      {this.renderContent()}
    </div>
  )
  }
}

export default NewsContentLists;
