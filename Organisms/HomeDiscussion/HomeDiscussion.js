import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './HomeDiscussion.scss';
import { HomeDiscussionTitle } from '../../Atoms';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

class HomeDiscussion extends Component {
  constructor(props){
    super(props);
    this.state={
      toggle:true,
  }
  this.toggle = this.toggle.bind(this);
}
toggle = () => {
  this.setState({
    toggle:!this.state.toggle
  });
}
    render() {
      const {HomeDiscussion} = this.props;
      const {toggle} = this.state;
        return(
          <div className={cx('newsWrapper')}>
            <HomeDiscussionTitle HomeDiscussionTitle={HomeDiscussion.content.HomeDiscussionTitle}/>
            <div className={cx('newsContent')} onClick={this.toggle}>
              <div className={cx('text')}>
                <div className={toggle ? cx('blur','transform') : cx('blur','transform','on') }>
                  <Link to="/discussion">
                  <span>{HomeDiscussion.content.clickText}</span>
                  </Link>
                </div>
                <div className={cx('column','column1')}>
                  <img src={HomeDiscussion.content.img} alt="columnImg"/>
                </div>
                <div className={cx('column','column2')}>
                  {HomeDiscussion.content.text}
                </div>
                <div className={cx('column','column3')}>
                  <img src={HomeDiscussion.content.img} alt="columnImg"/>
                </div>
              </div>
            </div>
          </div>
        );
    }
}
export default HomeDiscussion;
