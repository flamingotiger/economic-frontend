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
          util:"11111MAG 119 ",
          catemenu:"« REVUE ECONOMIQUE »",
          title:"",
          day:"Publication on 2017. 11. 30 ",
          news:""
        },
    }
    this.handleSuccess=this.handleSuccess.bind(this);
  }
  handleSuccess = () => {
    this.props.history.push("/contact:success");
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
              <form method="post" action="">
                <fieldset>
                  <div className={cx('input')}><input type="text" name="text" placeholder="NOM*"/></div>
                  <div className={cx('input','right')}><input type="text" name="text" placeholder="PRENOM*"/></div>
                  <div className={cx('input')}><input type="text" name="text" placeholder="EMAIL*"/></div>
                  <select className={cx('select','right')}>
                    <option value="PAYS">PAYS*</option>
                    <option value="">PAYS</option>
                    <option value="">PAYS</option>
                  </select>
                  <div className={cx('input')}><input type="text" name="text" placeholder="PROFESSION"/></div>
                </fieldset>
                <fieldset className={cx('obligatoires')}>
                  <legend className={cx('title')}>*Champs obligatoires</legend>
                  <select className={cx('select')}>
                    <option value="OBJET">OBJET*</option>
                    <option value="">OBJET</option>
                    <option value="">OBJET</option>
                  </select>
                  <div className={cx('birdImg')}><img src="/assets/img-contact-bird.png" alt="brid"/></div>
                  <textarea>

                  </textarea>
                  <span className={cx('text')}>Conformément à l'article 34 de la loi Informatique et Libertés du 6 juin 1978, nous vous rappelons que vous disposez d'un droit d'accès, de modification et de suppression des données qui vous concernent. Pour l'exercer, adressez-vous à Chaporoyal Lyon</span>
                </fieldset>
                <button className={cx('contactBtn')} type="submit" onClick={this.handleSuccess}>ENVOYER</button>
              </form>
            </div>
            <Footer />
          </div>
        );
    }
}

export default Contact;
