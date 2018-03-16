import React,{ Component } from 'react';
import styles from './Footer.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
class Footer extends Component {
  constructor(props){
    super(props);
    this.state={
      keyword:''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
      this.setState({
        keyword: e.target.value
      });
    }
  render(){
    return (
      <div className={cx('footer')}>
        <div className={cx('footerTxt')}>Subscript</div>
        <div className={cx('inputBox')}><input type="text" placeholder="Votre mail" onChange={this.handleChange}/></div>
        <button className={cx('footerBtn')}>ENVOYER</button>
      </div>
    )
  }
}



export default Footer;
