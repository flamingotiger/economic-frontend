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
        date : {
            util:"11111MAG 119 ",
            catemenu:"« REVUE ECONOMIQUE »",
            title:"DONNEES",
            day:"Publication on 2017. 11. 30 ",
            news:""
          },
          data: [
            {
              title:"CROISSANCE DE PIB1",
              img:"http://www.spiritconsulting.co.uk/h2osolutions/img/revslider/clean-water-banner.jpg",
              text:"La Croissaice du PIB est une signe de developpement d’economie, nous avons trouvé les données depuis 1950 juste apres la creation de la Chine (RPC) jusqu’au aujourd’hui ",
              chartData:{
                labels:[
                  '1998','1999','2000','2001','2002','2003','2004','2005','2006','2007',
                  '2008','2009','2010','2011','2012','2013','2014','2015','2016','2017',
                ],
                datasets:[
                  {
                    label:'(M$)',
                    data:[
                      20000000,
                      21000000,
                      22000000,
                      23000000,
                      24000000,
                      25000000,
                      26000000,
                      28000000,
                      32000000,
                      33000000,
                      34000000,
                      30000000,
                      32000000,
                      31000000,
                      33000000,
                      34000000,
                      35000000,
                      36000000,
                      37000000,
                      38000000,
                    ],
                    backgroundColor:'rgba(255,255,255,0)',
                    borderColor:'rgba(132,132,132,1)',
                    lineTension:0,
                    pointHoverBorderColor:'rgba(255,0,0,1)',
                    pointHoverBackgroundColor:'rgba(255,0,0,1)',
                    pointBackgroundColor:'rgba(132,132,132,1)',
                  }
                ]
              }
            },
            {
              title:"CROISSANCE DE PIB2",
              img:"https://www.dailyjeju.co.kr/static/img/banner-img.jpg",
              text:"La Croissaice du PIB est une signe de developpement d’economie, nous avons trouvé les données depuis 1950 juste apres la creation de la Chine (RPC) jusqu’au aujourd’hui ",
              chartData:{
                labels:[
                  '1998','1999','2000','2001','2002','2003','2004','2005','2006','2007',
                  '2008','2009','2010','2011','2012','2013','2014','2015','2016','2017',
                ],
                datasets:[
                  {
                    label:'(M$)',
                    data:[
                      20000000,
                      21000000,
                      22000000,
                      23000000,
                      24000000,
                      25000000,
                      26000000,
                      28000000,
                      32000000,
                      33000000,
                      34000000,
                      30000000,
                      32000000,
                      31000000,
                      33000000,
                      34000000,
                      35000000,
                      36000000,
                      37000000,
                      38000000,
                    ],
                    backgroundColor:'rgba(255,255,255,0)',
                    borderColor:'rgba(132,132,132,1)',
                    lineTension:0,
                    pointHoverBorderColor:'rgba(255,0,0,1)',
                    pointHoverBackgroundColor:'rgba(255,0,0,1)',
                    pointBackgroundColor:'rgba(132,132,132,1)',
                  }
                ]
              }
            },
            {
              title:"CROISSANCE DE PIB3",
              img:"https://www.dailyjeju.co.kr/static/img/banner-img.jpg",
              text:"La Croissaice du PIB est une signe de developpement d’economie, nous avons trouvé les données depuis 1950 juste apres la creation de la Chine (RPC) jusqu’au aujourd’hui ",
              chartData:{
                labels:[
                  '1998','1999','2000','2001','2002','2003','2004','2005','2006','2007',
                  '2008','2009','2010','2011','2012','2013','2014','2015','2016','2017',
                ],
                datasets:[
                  {
                    label:'(M$)',
                    data:[
                      20000000,
                      21000000,
                      22000000,
                      23000000,
                      24000000,
                      25000000,
                      26000000,
                      28000000,
                      32000000,
                      33000000,
                      34000000,
                      30000000,
                      32000000,
                      31000000,
                      33000000,
                      34000000,
                      35000000,
                      36000000,
                      37000000,
                      38000000,
                    ],
                    backgroundColor:'rgba(255,255,255,0)',
                    borderColor:'rgba(132,132,132,1)',
                    lineTension:0,
                    pointHoverBorderColor:'rgba(255,0,0,1)',
                    pointHoverBackgroundColor:'rgba(255,0,0,1)',
                    pointBackgroundColor:'rgba(132,132,132,1)',
                  }
                ]
              }
            },
            {
              title:"CROISSANCE DE PIB4",
              img:"https://www.dailyjeju.co.kr/static/img/banner-img.jpg",
              text:"La Croissaice du PIB est une signe de developpement d’economie, nous avons trouvé les données depuis 1950 juste apres la creation de la Chine (RPC) jusqu’au aujourd’hui ",
              chartData:{
                labels:[
                  '1998','1999','2000','2001','2002','2003','2004','2005','2006','2007',
                  '2008','2009','2010','2011','2012','2013','2014','2015','2016','2017',
                ],
                datasets:[
                  {
                    label:'(M$)',
                    data:[
                      20000000,
                      21000000,
                      22000000,
                      23000000,
                      24000000,
                      25000000,
                      26000000,
                      28000000,
                      32000000,
                      33000000,
                      34000000,
                      30000000,
                      32000000,
                      31000000,
                      33000000,
                      34000000,
                      35000000,
                      36000000,
                      37000000,
                      38000000,
                    ],
                    backgroundColor:'rgba(255,255,255,0)',
                    borderColor:'rgba(132,132,132,1)',
                    lineTension:0,
                    pointHoverBorderColor:'rgba(255,0,0,1)',
                    pointHoverBackgroundColor:'rgba(255,0,0,1)',
                    pointBackgroundColor:'rgba(132,132,132,1)',
                  }
                ]
              }
            },
            {
              title:"CROISSANCE DE PIB5",
              img:"https://www.dailyjeju.co.kr/static/img/banner-img.jpg",
              text:"La Croissaice du PIB est une signe de developpement d’economie, nous avons trouvé les données depuis 1950 juste apres la creation de la Chine (RPC) jusqu’au aujourd’hui ",
              chartData:{
                labels:[
                  '1998','1999','2000','2001','2002','2003','2004','2005','2006','2007',
                  '2008','2009','2010','2011','2012','2013','2014','2015','2016','2017',
                ],
                datasets:[
                  {
                    label:'(M$)',
                    data:[
                      20000000,
                      21000000,
                      22000000,
                      23000000,
                      24000000,
                      25000000,
                      26000000,
                      28000000,
                      32000000,
                      33000000,
                      34000000,
                      30000000,
                      32000000,
                      31000000,
                      33000000,
                      34000000,
                      35000000,
                      36000000,
                      37000000,
                      38000000,
                    ],
                    backgroundColor:'rgba(255,255,255,0)',
                    borderColor:'rgba(132,132,132,1)',
                    lineTension:0,
                    pointHoverBorderColor:'rgba(255,0,0,1)',
                    pointHoverBackgroundColor:'rgba(255,0,0,1)',
                    pointBackgroundColor:'rgba(132,132,132,1)',
                  }
                ]
              }
            },
          ]
      }
      this.handleChange = this.handleChange.bind(this);
    }
    handleChange(e){
       /* event-handler first parameter e : event object */
       let keywordStr = e.target.value;
       this.setState({keyword: keywordStr, search: false });
     }
     componentWillMount(){
       if(this.props.match.params.search){
         this.setState({
           keyword:this.props.match.params.search.slice(1)
         })
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
                chartData={content.chartData}
                key={i}
              />
          });
      };
        return(
          <div className={cx('dateWrapper')}>
            <Navigate idx={4}/>
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
                    placeholder="search" autoComplete="off"/>
                </div>
                </div>
                <ul className={cx('listContainer')}>
                  {mapToComponents(this.state.data)}
                </ul>
              </div>
          </div>
        );
    }
}

export default DataPage;
