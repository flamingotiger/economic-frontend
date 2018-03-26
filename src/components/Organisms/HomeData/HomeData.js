import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './HomeData.scss';
import { HomeTitle } from '../../Atoms';
import {Line} from 'react-chartjs-2';

const cx = classNames.bind(styles);

class HomeData extends Component {
  constructor(props){
    super(props);
    this.state={
      keyword:'',
      content : {
        homeTitle:"Touver des données economique qui vous interessent",
      },
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
                borderColor:'rgba(255,0,0,0.7)',
                lineTension:0,
                pointHoverBorderColor:'rgba(255,0,0,1)',
                pointHoverBackgroundColor:'rgba(255,0,0,1)',
                pointBackgroundColor:'rgba(255,0,0,0.7)',
              }
            ]
          }
    }
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange = (e) => {
    this.setState({
      keyword:e.target.value
    })
  }
  handleKeyPress = (e) => {
    if(e.which === 13 || e.keyCode === 13){
      window.location.href = `/data:${this.state.keyword}`

    }
  }
    render() {
      const options={
        legend:{
          display:false,
        },
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: 'SOURCE:OECD',
              },
            }
          ],
          yAxes: [
            {
              scaleLabel: {
                display: true,
                labelString: '(M $)',
              },
            }
          ],
        }
      }
        return(
          <div className={cx('homeData')}>
            <HomeTitle homeTitle={this.state.content.homeTitle}/>
            <div className={cx('homeDataWrapper')}>
              <div className={cx('search')}>
                <div className={cx('searchInput')}>
                  <input
                    name="keyword"
                    value={this.state.keyword}
                    placeholder="search"
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress}
                    autoComplete="off"
                    />
                </div>
              </div>
              <div className={cx('chartContainer')}>
                <Line
                  data={this.state.chartData}
                  options={options}
                  />
              </div>
            </div>
          </div>
        );
    }
}
export default HomeData;
