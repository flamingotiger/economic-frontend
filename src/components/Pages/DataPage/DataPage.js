import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './DataPage.scss';
import { HeadUtil, DataList } from '../../Atoms';
import { Navigate } from '../../Molecules';

const cx = classNames.bind(styles);

class DataPage extends Component {
  constructor(props){
      super(props);
      this.state={
        keyword: '',
        search: false,
        date : {
            util:"11111MAG 119 ",
            catemenu:"« REVUE ECONOMIQUE »",
            title:"",
            day:"Publication on 2017. 11. 30 ",
            news:""
          },
          data: [
            {
              title:"CROISSANCE DE PIB1",
              img:"http://www.spiritconsulting.co.uk/h2osolutions/img/revslider/clean-water-banner.jpg",
              text:"La Croissaice du PIB est une signe de developpement d’economie, nous avons trouvé les données depuis 1950 juste apres la creation de la Chine (RPC) jusqu’au aujourd’hui "
            },
            {
              title:"CROISSANCE DE PIB2",
              img:"https://www.dailyjeju.co.kr/static/img/banner-img.jpg",
              text:"La Croissaice du PIB est une signe de developpement d’economie, nous avons trouvé les données depuis 1950 juste apres la creation de la Chine (RPC) jusqu’au aujourd’hui "
            },
            {
              title:"CROISSANCE DE PIB3",
              img:"https://www.dailyjeju.co.kr/static/img/banner-img.jpg",
              text:"La Croissaice du PIB est une signe de developpement d’economie, nous avons trouvé les données depuis 1950 juste apres la creation de la Chine (RPC) jusqu’au aujourd’hui "
            },
          ]
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSearch = this.handleSearch.bind(this);
      this.renderContent = this.renderContent.bind(this);
      this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    handleChange(e){
       /* event-handler first parameter e : event object */
       let keywordStr = e.target.value;
       this.setState({keyword: keywordStr, search: false });
     }
     handleSearch=()=>{
         this.setState({
           search: true
       })
     }
     renderContent= () => {
       const content = this.state.data.map((content,i)=>{
         return <DataList
           title={content.title}
           text={content.text}
           img={content.img}
           key={i}
         />
        })
         return content
       }
     handleKeyPress = (e) => {
         if (e.charCode === 13) {
           this.setState({
             search: true
           });
         }
         if (e.keyCode === 13) {
           this.setState({
             search: true
           });
         }
      }
    render() {
      const mapToComponents = (data) => {
         data = data.filter((contact) => {
           return contact.title.toLowerCase().indexOf(this.state.keyword) > -1;
           /* 0, 1 */
         });
         return data.map((content,i) => {
              return <DataList
                title={content.title}
                text={content.text}
                img={content.img}
                key={i}
              />
          });
      };
        return(
          <div className={cx('dateWrapper')}>
            <Navigate/>
              <HeadUtil
                util={this.state.date.util}
                catemenu={this.state.date.catemenu}
                title={this.state.date.title}
                day={this.state.date.day}
                news={this.state.date.news}
              />
              <div className={cx('dataList')}>
                <div className={cx('search')}>
                <div className={cx('searchInput')}>
                  <input
                    name="keyword"
                    value={this.state.keyword}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                    placeholder="search" />
                </div>
                <button className={cx('searchBtn')} onClick={this.handleSearch}><img src="/assets/btn-search_black.svg" alt="btn"/></button>
                </div>
                <ul className={cx('listContainer')}>
                  {this.state.search ?  mapToComponents(this.state.data) : this.renderContent()}
                </ul>
              </div>
          </div>
        );
    }
}

export default DataPage;
