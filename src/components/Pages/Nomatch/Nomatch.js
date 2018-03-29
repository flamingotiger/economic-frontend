import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Nomatch.scss';
import { HeadUtil } from '../../Atoms';
import { Navigate } from '../../Molecules';

const cx = classNames.bind(styles);

class Nomatch extends Component {
  constructor(props){
    super(props);
    this.state={
      date : {
          util:"MAG 119 ",
          catemenu:"« REVUE ECONOMIQUE »",
          title:"",
          day:"Publication on 2017. 11. 30 ",
          news:""
        },
    }
  }
    render() {
        return(
          <div className={cx('wrapper')}>
            <Navigate/>
              <HeadUtil
                util={this.state.date.util}
                catemenu={this.state.date.catemenu}
                title={this.state.date.title}
                day={this.state.date.day}
                news={this.state.date.news}
              />
            <div className={cx('nomatchImg')}>
              <img src="/assets/img-404.png" alt="404img"/>
            </div>
          </div>
        );
    }
}

export default Nomatch;
