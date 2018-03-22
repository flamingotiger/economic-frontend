import React, {Component}from 'react';
import styles from './HomeNavigate.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

class HomeNavigate extends Component{
  constructor(props){
    super(props);
    this.state={
      toggle:false
    }
    this._toggle=this._toggle.bind(this);
  }
  _toggle = () => {
    this.setState({
      toggle:!this.state.toggle
    });
  }
  render(){
  return (
    <div className={cx('navigator')}>
      <div className={this.state.toggle ? cx('navIcon','on') : cx('navIcon')} onClick={this._toggle}>
        <img src="/assets/logo-main.svg" alt="naviIcon"/>
      </div>
      <div className={this.state.toggle ? cx('navList','on') : cx('navList')}>
        <div className={cx('navBgTop')}>
          <ul>
            <li><Link to="/news">ACTUALITES</Link></li>
            <li><Link to="/startup">DECOUVERT D’UNE<br/>ENTREPRISE</Link></li>
            <li><Link to="/discussion">DEBAT</Link></li>
            <li><Link to="/data">DONNEES</Link></li>
          </ul>
        </div>
        <div className={cx('navBgBotton')}>
          <ul>
            <li><Link to="/">CONTACT</Link></li>
            <li><Link to="/">DEVENIR NOTRE<br/>RECHERCHER</Link></li>
          </ul>
          <div className={cx('lang')}>
            <select>
              <option value="">langue</option>
              <option value="FRANCAIS">FRANCAIS</option>
              <option value="ANGLAIS">ANGLAIS</option>
            </select>
            </div>
        </div>
      </div>
    </div>
  )
  }
}

export default HomeNavigate;
