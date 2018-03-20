import React, {Component} from 'react';
import styles from './HeadList.scss';
import classNames from 'classnames/bind';
import { HeadThumb } from '../../Atoms';
import HorizontalScroll from 'react-scroll-horizontal'

const cx = classNames.bind(styles);

class HeadList extends Component{
  constructor(props){
    super(props);
    this.renderHead = this.renderHead.bind(this);
  }
  renderHead = () => {
    const headThumb = this.props.headList.map((content,i)=>{
      return <div className={cx('headThumb')} key={i}>
        <HeadThumb
        img={content.img}
        url={content.url}
      />
  </div>
    })
    return headThumb
  }
  render(){
  return (
    <div className={this.props.toggle? cx('headList','transform','on') : cx('headList','transform') }>
      <div className={cx('headWrapper')}>
        <ul className={cx('headContainer')}>
            <HorizontalScroll>
              {this.renderHead()}
            </HorizontalScroll>
        </ul>
      </div>
    </div>
    )
  }
}
export default HeadList;
