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
          util:"11111MAG 119 ",
          catemenu:"« REVUE ECONOMIQUE »",
          title:"",
          day:"Publication on 2017. 11. 30 ",
          news:""
        },
    }
    this.handleClick = this.handleClick.bind(this);
    this.handleSuccess=this.handleSuccess.bind(this);
  }
  handleClick = (e) => {
    const idx = Number(e.target.getAttribute('data-key'));
    this.setState({
      idx: idx
    })
  }
  handleSuccess = () => {
      this.props.history.push("/recrutement:success");
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
                <form method="post" action="">
                  <fieldset>
                    <ul className={cx('cateList')}>
                      <li className={this.state.idx === 0 ? cx('on') : null } data-key={0} onClick={this.handleClick}>ANALYSTE</li>
                      <li className={this.state.idx === 1 ? cx('on') : null } data-key={1} onClick={this.handleClick}>DATA</li>
                      <li className={this.state.idx === 2 ? cx('on') : null } data-key={2} onClick={this.handleClick}>INFOMATIQUE</li>
                      <li className={this.state.idx === 3 ? cx('on') : null } data-key={3} onClick={this.handleClick}>DROIS INTERNATIONAL</li>
                    </ul>
                    <div className={cx('fileUpload')}>
                      <span>Mettez votre CV et votre LM pour postuler</span>
                        <div className={cx('btn')}>
                            <label htmlFor="fileUpload">Joindre des fichiers</label>
                            <input type="file" id="fileUpload"/>
                        </div>
                      <span>(nous acceptons juste PDF, JPG, PNG)</span>
                    </div>
                  </fieldset>
                  <fieldset className={cx('obligatoires')}>
                    <div className={cx('input')}><input type="text" name="text" placeholder="NOM*"/></div>
                    <div className={cx('input','right')}><input type="text" name="text" placeholder="PRENOM*"/></div>
                    <div className={cx('input')}><input type="text" name="text" placeholder="EMAIL*"/></div>
                    <select className={cx('select','right')}>
                      <option value="PAYS">PAYS*</option>
                      <option value="">PAYS</option>
                      <option value="">PAYS</option>
                    </select>
                    <div className={cx('input')}><input type="text" name="text" placeholder="PROFESSION"/></div>
                    <span className={cx('title')}>*Champs obligatoires</span>
                    <div className={cx('birdImg')}><img src="/assets/img-recrutement-bird.png" alt="brid"/></div>
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

export default Recrutement;
