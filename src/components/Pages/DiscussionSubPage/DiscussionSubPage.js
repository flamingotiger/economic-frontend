import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './DiscussionSubPage.scss';
import { HeadUtil, DiscussionSub } from '../../Atoms';
import { Navigate } from '../../Molecules';

const cx = classNames.bind(styles);

class DiscussionSubPage extends Component {
  constructor(props){
    super(props);
    this.state={
      date : {
          util:"MAG 119 ",
          catemenu:"« REVUE ECONOMIQUE »",
          title:"DEBAT",
          day:"Publication on 2017. 11. 30 ",
          news:""
        },
      discontent:{},
    }
    this.renderDiscussion = this.renderDiscussion.bind(this);
  }
  componentDidMount(){
    this.discontentData();
  }
  discontentData = async () => {
    const discontent = await this.callData();
    this.setState({
      discontent,
      loading:true
    })
  }
  callData = () => {
     return fetch('https://honghakbum.github.io/economic/debat.json')
     .then(response => response.json() )
     .then(json => json.debat)
     .catch(err => console.log(err))
  }
  renderDiscussion = () => {
    const paramsId =  Number(this.props.match.params.id.slice(1))
    const detail1 = this.state.discontent[paramsId].detail1
    const detail2 = this.state.discontent[paramsId].detail2
    return [
    <DiscussionSub
      key={1}
      url={detail1.url}
      background={detail1.background}
      cate={detail1.cate}
      subTitle={detail1.subTitle}
      img={detail1.img}
      text01={detail1.text01}
      id={this.state.discontent[paramsId].id}
      />,
      <DiscussionSub
        key={2}
        url={detail2.url}
        background={detail2.background}
        cate={detail2.cate}
        subTitle={detail2.subTitle}
        img={detail2.img}
        text01={detail2.text01}
        id={this.state.discontent[paramsId].id}
        />
    ]
  }
    render() {
      const {loading} = this.state;
      if(!loading){
        return null
      }
        return(
          <div className={cx('wrapper')}>
            <Navigate idx={3}/>
              <HeadUtil
                util={this.state.date.util}
                catemenu={this.state.date.catemenu}
                title={this.state.date.title}
                day={this.state.date.day}
                news={this.state.date.news}
              />
            <div className={cx('disSubList')}>
              {this.renderDiscussion()}
            </div>
          </div>
        );
    }
}

export default DiscussionSubPage;
