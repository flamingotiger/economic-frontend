import React, {Component}from 'react';
import styles from './Navigate.scss';
import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';

const cx = classNames.bind(styles);

class Navigate extends Component{
  constructor(props){
    super(props);
    this.state={
      toggle:false,
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
    <nav className={cx('navigator')}>
      <div className={cx('navIcon')} onClick={this._toggle}>
        <img src="/assets/logo-main.svg" alt="naviIcon"/>
      </div>
      <div className={this.state.toggle ? cx('navList','on') : cx('navList')}>
        <ul>
          <li className={this.props.idx === 0 ? cx('on') : null}><NavLink to="/">HOME</NavLink></li>
          <li className={this.props.idx === 1 ? cx('on') : null}><NavLink to="/news">ACTUALITES</NavLink></li>
          <li className={this.props.idx === 2 ? cx('on') : null}><NavLink to="/startup">DECOUVERT D’UNE ENTREPRISE</NavLink></li>
          <li className={this.props.idx === 3 ? cx('on') : null}><NavLink to="/discussion">DEBAT</NavLink></li>
          <li className={this.props.idx === 4 ? cx('on') : null}><NavLink to="/data">DONNEES</NavLink></li>
          <li className={this.props.idx === 5 ? cx('on') : null}><NavLink to="/contact">CONTACT</NavLink></li>
          <li className={this.props.idx === 6 ? cx('on') : null}><NavLink to="/recrutement">DEVENIR NOTRE RECHERCHER</NavLink></li>
        </ul>
        <div className={cx('lang')}>
          <span>langue</span>
          <select>
            <option value="FRANCAIS">FRANCAIS</option>
            <option value="ANGLAIS">ANGLAIS</option>
          </select>
          </div>
      </div>
    </nav>
  )
  }
}

export default Navigate;
