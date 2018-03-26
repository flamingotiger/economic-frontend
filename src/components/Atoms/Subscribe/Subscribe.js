import React,{ Component } from 'react';
import styles from './Subscribe.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);
class Subscribe extends Component {
  constructor(props){
    super(props);
    this.state={
      keyword:'',
      popup:false
    }
    this.handleChange = this.handleChange.bind(this);
    this.btnClick = this.btnClick.bind(this);
  }
  handleChange(e){
      this.setState({
        keyword: e.target.value
      });
    }
  btnClick(){
    this.setState({
      popup: !this.state.popup
    })
    setTimeout(()=>{
      this.setState({
        popup: !this.state.popup
      })
    },1500)
  }
  render(){
    return (
      <div className={cx('subscribe')}>
        <div className={this.state.popup ? cx('subscribePopup','on') : cx('subscribePopup')}>
          <span className={cx('firstTxt')}> MERCI DE VOUS INSCRIRE SUR NOTRE NEWS LETTER</span>
          <span>NEWS LETTER A ETE ENVOYÉ</span>
        </div>
        <div className={cx('subscribeTxt')}>Subscript</div>
        <div className={cx('inputBox')}><input type="text" placeholder="Votre mail" onChange={this.handleChange}/></div>
        <button className={cx('subscribeBtn')} onClick={this.btnClick}>ENVOYER</button>
      </div>
    )
  }
}



export default Subscribe;
