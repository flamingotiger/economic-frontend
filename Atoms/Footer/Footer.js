import React,{ Component } from 'react';
import styles from './Footer.scss';
import classNames from 'classnames/bind';
import {Link} from 'react-router-dom';

const cx = classNames.bind(styles);
class Footer extends Component {
  constructor(props){
    super(props);
    this.state={
      keyword:'',
      popup:false
    }
  }
  render(){
    return (
      <footer className={cx('footer')}>
        <div className={cx('footerInner')}>
          <div className={cx('footerText')}>
            <div><Link to="/recrutement">RECREUTEMENT</Link></div>
            <div><Link to="/contact">CONTACT</Link></div>
          </div>
        </div>
      </footer>
    )
  }
}



export default Footer;
