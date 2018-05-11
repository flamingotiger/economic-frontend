import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './DiscussionPage.scss';
import { HeadUtil, DiscussionList } from '../../Atoms';
import { Navigate } from '../../Molecules';

const cx = classNames.bind(styles);

class DiscussionPage extends Component {
  constructor(props){
    super(props);
    this.state={
      keyword: '',
      loading:false,
      discontent:{},
      date : {
          util:"MAG 119 ",
          catemenu:"« REVUE ECONOMIQUE »",
          title:"DEBAT",
          day:"Publication on 2017. 11. 30 ",
          news:""
        },
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e){
     /* event-handler first parameter e : event object */
     let keywordStr = e.target.value;
     this.setState({keyword: keywordStr, search: false });
   }

   componentDidMount(){
     this.discontentData();
   }
   discontentData = async () => {
     const discontent = await this.callData();
     this.setState({
       discontent,
       loading:true
     })
   }
   callData = () => {
     return fetch('https://honghakbum.github.io/economic/debat.json')
     .then(response => response.json() )
     .then(json => json.debat)
     .catch(err => console.log(err))
   }

    render() {
      const mapToComponents = (discontent) => {
         discontent = discontent.filter((contact) => {
           return contact.title.toLowerCase().indexOf(this.state.keyword) > -1;
           /* 0, 1 */
         });
         return discontent.map((content,i) => {
              return <DiscussionList
                date={content.date}
                title={content.title}
                leftImg={content.leftImg}
                leftThumb={content.leftThumb}
                rightImg={content.rightImg}
                rightThumb={content.rightThumb}
                key={i}
                url={content.id}
                />
          });
      };
      const {discontent, loading} = this.state
      if(!loading){
        return null
      }
        return(
          <div className={cx('disWrapper')}>
            <Navigate idx={3}/>
              <HeadUtil
                util={this.state.date.util}
                catemenu={this.state.date.catemenu}
                title={this.state.date.title}
                day={this.state.date.day}
                news={this.state.date.news}
              />
              <div className={cx('disList')}>
                <div className={cx('search')}>
                <div className={cx('searchInput')}>
                  <input
                    name="keyword"
                    value={this.state.keyword}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                    placeholder="search"
                    autoComplete="off"
                    />
                </div>
                </div>
                <ul className={cx('listContainer')}>
                  {mapToComponents(discontent)}
                </ul>
              </div>
          </div>
        );
    }
}

export default DiscussionPage;
