import React, {Component} from 'react';
import styles from './HeadList.scss';
import classNames from 'classnames/bind';
import { HeadThumb } from '../../Atoms';

const cx = classNames.bind(styles);

class HeadList extends Component{
  constructor(props){
    super(props);
    this.state={
        content:[
          {
            img:'dummy-main-6.png'
          },
          {
            img:'dummy-main-6.png'
          },
          {
            img:'dummy-main-6.png'
          },
          {
            img:'dummy-main-6.png'
          },
          {
            img:'dummy-main-6.png'
          }
        ]
    }
    this._renderHead = this._renderHead.bind(this);
  }
  _renderHead = () => {
    const headThum = this.state.content.map((content,i)=>{
      return <HeadThumb
        img={content.img}
        key={i}
      />
    })
    return headThum
  }
  render(){
  return (
    <div className={cx('headList')}>
      <div className={cx('headContainer')}>
        <ul className={cx('thumbList')}>
          {this._renderHead()}
        </ul>
      </div>
    </div>
    )
  }
}
export default HeadList;
