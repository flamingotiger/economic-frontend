import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './NewsPage.scss';
import { HeadUtil, NewsPost } from '../../Atoms';
import { Navigate } from '../../Molecules';
import { NewsApi } from '../../../api';

const cx = classNames.bind(styles);

class NewsPage extends Component {
  constructor(props){
    super(props);
    this.state={
      keyword: '',
      loading:false,
      img:[],
      date : {
          util:"MAG 119 ",
          catemenu:"« REVUE ECONOMIQUE »",
          title:"ACTUALITES",
          day:undefined,
          news:"ACTUALITE DE CE MOIS-CI"
        }
    }

  }

  handleChange = (e) => {
     /* event-handler first parameter e : event object */
     let keywordStr = e.target.value;
     this.setState({keyword: keywordStr, search: false });
   }

 handleSearch = () => {
     this.setState({ search: true })
 }

 componentDidMount(){
   NewsApi.listNews("?sort=-date").then(res => {
     this.setState({ newses:res.data.newses })
     this.dateList(res.data.newses)
   })
 }

 dateList = (apiData) => {
   let dateArr = []
   apiData.map((content) => dateArr.push(content.date.substring(0,7)) )
   let prevValue = ""
   let month = dateArr.filter(
     value => {
       //저장된값이 없을때
       if(prevValue === ""){
         prevValue = value;
         return true
       //값이 전값과 중복일때
       }else if(value === prevValue){
         return false
       //그이외 값이 중복이 아닌값들
       }else{
         prevValue = value;
         return true
       }
     }
   )

   let url = month.map(content => content.replace(/-/,""))
   let prevImage = ""
   let imageArr = []
   apiData.map((content) => imageArr.push(content) )
   let imageId = apiData.filter(
     value => {
       //저장된값이 없을때
       if(prevImage === ""){
         prevImage = value.date.substring(0,7);
         return true
       //값이 전값과 중복일때
     }else if(value.date.substring(0,7) === prevImage){
         return false
       //그이외 값이 중복이 아닌값들
       }else{
         prevImage = value.date.substring(0,7);
         return true
       }
     }
   )

   let content = []
   url.map(ss => content.push({ url:ss }) )
   month.map((aa,i) => content[i].month = aa)
   imageId.map((bb,i) => content[i].img = bb.images[0])

   this.setState({ content:content, loading:true })
 }

    render() {
      const { loading } = this.state;

      if(!loading) return null;

      const mapToComponents = (content) => {
         content = content.filter((contact) => {
           return contact.month.toLowerCase().indexOf(this.state.keyword) > -1;
           /* 0, 1 */
         });
         return content.map((content,i) => {
              return <NewsPost
                img={content.img}
                date={content.month}
                url={content.url}
                key={i}/>
          });
      };
        return(
          <div className={cx('newsListWrapper')}>
            <Navigate idx={1}/>
              <HeadUtil
                util={this.state.date.util}
                catemenu={this.state.date.catemenu}
                title={this.state.date.title}
                day={this.state.date.day}
                news={this.state.date.news}
              />
            <div className={cx('newsList')}>
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
                {mapToComponents(this.state.content)}
              </ul>
            </div>
          </div>
        );
    }
}

export default NewsPage;
