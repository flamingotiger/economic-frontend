import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './HomeStartUp.scss';
import { HomeTitle } from '../../Atoms';
import { Link } from 'react-router-dom';
import { HomeStartUpPostList } from '../../Molecules';

const cx = classNames.bind(styles);

class HomeStartUp extends Component {
  constructor(props){
    super(props);
    this.state={
      toggle:true,
      content : {
        homeTitle:"L’élection surprise de Donald Trump provoque une nouvelle onde de choc",
        clickText:'DECOUVRIR UNE NOUVELLE ENTREPRISE'
    }
  }
  this.toggle = this.toggle.bind(this);
}
toggle = () => {
    this.setState({
      toggle:!this.state.toggle
    });
  }
    render() {
        return(
          <div className={cx('startUpWrapper')}>
            <HomeTitle homeTitle={this.props.HomeStartUp.content.homeTitle}/>
            <div className={cx('startUpContent')} onClick={this.toggle}>
              <div className={this.state.toggle ? cx('blur','transform') : cx('blur','transform','on') }>
                <Link to="/startup">
                <span>{this.props.HomeStartUp.content.clickText}</span>
              </Link>
              </div>
              <div className={cx('post')}>
                <HomeStartUpPostList/>
              </div>
            </div>
          </div>
        );
    }
}
export default HomeStartUp;
