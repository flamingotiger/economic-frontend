import React, {Component}from 'react';
import styles from './Navigate.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

class Navigate extends Component{
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
      <div className={cx('navIcon')} onClick={this._toggle}>
        <img src="/assets/logo-main.svg" alt="naviIcon"/>
      </div>
      <div className={this.state.toggle ? cx('navList','on') : cx('navList')}>
        <ul>
          <li><Link to="/news">ACTUALITES</Link></li>
          <li><Link to="/">DECOUVERT D’UNE ENTREPRISE</Link></li>
          <li><Link to="/">DEBAT</Link></li>
          <li><Link to="/">DONNEES</Link></li>
          <li><Link to="/">CONTACT</Link></li>
          <li><Link to="/">DEVENIR NOTRE RECHERCHER</Link></li>
        </ul>
        <div className={cx('lang')}>
          <span>langue</span>
          <select>
            <option value=""></option>
            <option value="Eng">Eng</option>
            <option value="Kor">Kor</option>
          </select>
          </div>
      </div>
    </div>
  )
  }
}

export default Navigate;
