import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Contact.scss';
import { HeadUtil, Footer } from '../../Atoms';
import { Navigate } from '../../Molecules';

const cx = classNames.bind(styles);

class Contact extends Component {
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
      name:"",
      fname:"",
      email:"",
      pay:"",
      title:""
    }
    this.handleCheck=this.handleCheck.bind(this);
    this.nameInput= this.nameInput.bind(this);
    this.fnameInput= this.fnameInput.bind(this);
    this.emailInput= this.emailInput.bind(this);
    this.paySelect= this.paySelect.bind(this);
    this.titleSelect= this.titleSelect.bind(this);
  }
  handleCheck = (e) => {
    if(this.state.name === ""){
      alert("필수입력");
      return false
    }else if(this.state.fname === ""){
      alert("필수입력");
      return false
    }else if(this.state.email === ""){
      alert("필수입력");
      return false
    }else if(this.state.pay === ""){
      alert("필수입력");
      return false
    }else if(this.state.title === ""){
      alert("필수입력");
      return false
    }
    this.setState({
      typeOfSubmit: 'contact'
    },this.refs.form.submit);
    this.props.history.push("/contact:success");
  }
  nameInput= (e) => {
    this.setState({
      name: e.target.value
    })
  }
  fnameInput= (e) => {
    this.setState({
      fname: e.target.value
    })
  }
  emailInput= (e) => {
    this.setState({
      email: e.target.value
    })
  }
  paySelect= (e) => {
    this.setState({
      pay: e.target.value
    })
  }
  titleSelect= (e) => {
    this.setState({
      title: e.target.value
    })
  }
    render() {
        return(
          <div className={cx('contact')}>
            <Navigate idx={5}/>
              <HeadUtil
                util={this.state.date.util}
                catemenu={this.state.date.catemenu}
                title={this.state.date.title}
                day={this.state.date.day}
                news={this.state.date.news}
              />
            <div className={cx('contactInner')}>
              <span className={cx('contactTitle')}>NOUS ECRIRE</span>
              <form method="post" action="" ref="form">
                <fieldset>
                  <div className={cx('input')}><input type="text" name="name" placeholder="NOM*" onChange={this.nameInput}/></div>
                  <div className={cx('input','right')}><input type="text" name="fname" placeholder="PRENOM*" onChange={this.fnameInput}/></div>
                  <div className={cx('input')}><input type="text" name="email" placeholder="EMAIL*" onChange={this.emailInput}/></div>
                  <select className={cx('select','right')} name="pay" onChange={this.paySelect} >
                    <option value="">PAYS*</option>
                    <option value="PAYS">PAYS</option>
                    <option value="PAYS">PAYS</option>
                  </select>
                  <div className={cx('input')}><input type="text" name="job" placeholder="PROFESSION"/></div>
                </fieldset>
                <fieldset className={cx('obligatoires')}>
                  <legend className={cx('title')}>*Champs obligatoires</legend>
                  <select className={cx('select')} name="title" onChange={this.titleSelect}>
                    <option value="OBJET">OBJET*</option>
                    <option value="OBJET">OBJET</option>
                    <option value="OBJET">OBJET</option>
                  </select>
                  <div className={cx('birdImg')}><img src="/assets/img-contact-bird.png" alt="brid"/></div>
                  <textarea name="txt">
                    {this.props.txt}
                  </textarea>
                  <span className={cx('text')}>Conformément à l'article 34 de la loi Informatique et Libertés du 6 juin 1978, nous vous rappelons que vous disposez d'un droit d'accès, de modification et de suppression des données qui vous concernent. Pour l'exercer, adressez-vous à Chaporoyal Lyon</span>
                </fieldset>
                <button className={cx('contactBtn')} type="button" onClick={this.handleCheck}>ENVOYER</button>
              </form>
            </div>
            <Footer />
          </div>
        );
    }
}
export default Contact;
