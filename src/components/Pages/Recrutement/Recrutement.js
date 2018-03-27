import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './Recrutement.scss';
import { HeadUtil, Footer } from '../../Atoms';
import { Navigate } from '../../Molecules';

const cx = classNames.bind(styles);
class Recrutement extends Component {
  constructor(props){
    super(props);
    this.state={
      idx: 0,
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
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleCheck=this.handleCheck.bind(this);
    this.nameInput= this.nameInput.bind(this);
    this.fnameInput= this.fnameInput.bind(this);
    this.emailInput= this.emailInput.bind(this);
    this.paySelect= this.paySelect.bind(this);
  }
  handleClick = (e) => {
    const idx = Number(e.target.getAttribute('data-key'));
    this.setState({
      idx: idx
    })
  }
  handleCheck = () => {
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
    }
      this.setState({
        typeOfSubmit: 'recrutement'
      },this.refs.form.submit);
      this.props.history.push("/recrutement:success");
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
    render() {
        return(
          <div className={cx('recrutement')}>
            <Navigate idx={6}/>
              <HeadUtil
                util={this.state.date.util}
                catemenu={this.state.date.catemenu}
                title={this.state.date.title}
                day={this.state.date.day}
                news={this.state.date.news}
              />
            <div className={cx('recrutementInner')}>
              <span className={cx('recrutementTitle')}>TRAVAILLONS AVEC NOUS </span>
                <form method="post" action="" ref="form">
                  <fieldset>
                    <div className={cx('cateList')}>
                      <label htmlFor="analyste" className={this.state.idx === 0 ? cx('on') : null } data-key={0} onClick={this.handleClick}>ANALYSTE</label><input type="radio" name="cate" value="ANALYSTE" id="analyste"/>
                      <label htmlFor="data" className={this.state.idx === 1 ? cx('on') : null } data-key={1} onClick={this.handleClick}>DATA</label><input type="radio" name="cate" value="DATA" id="data"/>
                      <label htmlFor="info" className={this.state.idx === 2 ? cx('on') : null } data-key={2} onClick={this.handleClick}>INFOMATIQUE</label><input type="radio" name="cate" value="INFOMATIQUE" id="info"/>
                      <label htmlFor="drois" className={this.state.idx === 3 ? cx('on') : null } data-key={3} onClick={this.handleClick}>DROIS INTERNATIONAL</label><input type="radio" name="cate" value="DROIS INTERNATIONAL" id="drois"/>
                    </div>
                    <div className={cx('fileUpload')}>
                      <span>Mettez votre CV et votre LM pour postuler</span>
                        <div className={cx('btn')}>
                            <label htmlFor="fileUpload">Joindre des fichiers</label>
                            <input type="file" id="fileUpload" accept=".pdf, .jpg, .png"/>
                        </div>
                      <span>(nous acceptons juste PDF, JPG, PNG)</span>
                    </div>
                  </fieldset>
                  <fieldset className={cx('obligatoires')}>
                    <div className={cx('input')}><input type="text" name="name" placeholder="NOM*" onChange={this.nameInput}/></div>
                    <div className={cx('input','right')}><input type="text" name="fname" placeholder="PRENOM*" onChange={this.fnameInput}/></div>
                    <div className={cx('input')}><input type="text" name="email" placeholder="EMAIL*" onChange={this.emailInput}/></div>
                    <select className={cx('select','right')} name="pay" onChange={this.paySelect} >
                      <option value="">PAYS*</option>
                      <option value="PAYS">PAYS</option>
                      <option value="PAYS">PAYS</option>
                    </select>
                    <div className={cx('input')}><input type="text" name="job" placeholder="PROFESSION"/></div>
                    <span className={cx('title')}>*Champs obligatoires</span>
                    <div className={cx('birdImg')}><img src="/assets/img-recrutement-bird.png" alt="brid"/></div>
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

export default Recrutement;
