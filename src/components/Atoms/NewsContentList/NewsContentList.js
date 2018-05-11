import React, { Component } from 'react';
import styles from './NewsContentList.scss';
import classNames from 'classnames/bind';
import { ImageApi, SectorApi } from '../../../api';

const cx = classNames.bind(styles);

class NewsContentList extends Component {
  constructor(props){
    super(props);
    this.state={
      loading:false
    }
  }

  componentDidMount(){
    const { image, cate } = this.props;
    ImageApi.viewThumbnailImage(image, 256).then(res =>
      this.setState({ image: res.config.url })
    )
    SectorApi.getSector(cate).then(res => this.setState({ cate: res.data.sector.name, loading: true}))
  }

  render(){
    const { image, cate, loading } = this.state;
    const { id, title, date } = this.props;

    if(!loading) return null;

    return (
      <div className={cx('list')}>
        <div className={cx('listImg')}>
          <img src={image} alt="img" onClick={this.props.getId} data-key={id}/>
        </div>
        <div className={cx('listText')}>
          <dl>
            <dt><span className={cx('listTitle')} onClick={this.props.getId} data-key={id}>{cate}</span><span>{date}</span></dt>
            <dd onClick={this.props.getId} data-key={id}>{title}</dd>
          </dl>
        </div>
      </div>
    )
  }
}

export default NewsContentList;
