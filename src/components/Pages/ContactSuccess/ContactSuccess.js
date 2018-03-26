import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './ContactSuccess.scss';
import { HeadUtil, Footer } from '../../Atoms';
import { Navigate } from '../../Molecules';

const cx = classNames.bind(styles);

class ContactSuccess extends Component {
  constructor(props){
    super(props);
    this.state={
      date : {
          util:"11111MAG 119 ",
          catemenu:"« REVUE ECONOMIQUE »",
          title:"",
          day:"Publication on 2017. 11. 30 ",
          news:""
        },
    }
  }
    render() {
        return(
          <div className={cx('success')}>
            <Navigate idx={5}/>
              <HeadUtil
                util={this.state.date.util}
                catemenu={this.state.date.catemenu}
                title={this.state.date.title}
                day={this.state.date.day}
                news={this.state.date.news}
              />
            <div className={cx('successInner')}>
              <div className={cx('birdImg')}><img src="/assets/img-contact-bird.png" alt="brid"/></div>
              <div className={cx('logo')}><img src="/assets/logo-main.svg" alt="logo"/></div>
              <span className={cx('text')}>Votre demande a bien été prise en compte. </span>
            </div>
            <Footer />
          </div>
        );
    }
}

export default ContactSuccess;
