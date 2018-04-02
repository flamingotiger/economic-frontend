import React,{Component} from 'react';
import styles from './DataList.scss';
import classNames from 'classnames/bind';
import {Line} from 'react-chartjs-2';
const cx = classNames.bind(styles);

class DataList extends Component{
  constructor(){
    super();
    this.state={
      toggle:false,
    }
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle = () => {
    this.setState({
      toggle:!this.state.toggle
    })
  }


  render(){
    const options={
      legend:{
        display:false,
      },
      // tooltips: {
      //      // Disable the on-canvas tooltip
      //      enabled: true,
      //      callbacks: {
      //           label: function(tooltipItem, data) {
      //               var label = Math.round(tooltipItem.yLabel * 100) / 100;
      //               return label;
      //           },
      //           labelColor: function(tooltipItem, chart) {
      //               return {
      //                   borderColor: 'rgb(255, 0, 0)',
      //                   backgroundColor: 'rgb(255, 0, 0)'
      //               }
      //           },
      //           labelTextColor:function(tooltipItem, chart){
      //               return 'rgb(255,0,0)';
      //           }
      //       },
      //  },

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
    return (
      <li className={cx('data')}>
        <div className={this.state.toggle ? cx('chart','on') : cx('chart')}>
          <div className={cx('chartContainer')}>
            <Line
              data={this.props.chartData}
              options={options}
              />
          </div>
        </div>
        <div className={this.state.toggle ? cx('dataContent','on') : cx('dataContent')} onClick={this.handleToggle} >
          <div className={cx('title')}>{this.props.title}</div>
          <div className={cx('text')}><span>{this.props.text}</span></div>
          <div className={cx('img')}><img src={this.props.img} alt="img"/></div>
        </div>
      </li>
    )
  }
}

export default DataList;
