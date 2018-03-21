import React,{Component} from 'react';
import styles from './DataList.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class DataList extends Component{
  constructor(){
    super();
    this.state={
      toggle:false
    }
    this.handleToggle = this.handleToggle.bind(this);
  }
  handleToggle = () => {
    this.setState({
      toggle:!this.state.toggle
    })
  }
  render(){
    return (
      <li className={cx('data')}>
        <div className={this.state.toggle ? cx('dataChart','on') : cx('dataChart')}>
          차트들어갈부분
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
