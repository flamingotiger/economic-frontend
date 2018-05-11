import React, { Component } from 'react';
import styles from './NewsPost.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { ImageApi } from '../../../api';

const cx = classNames.bind(styles);

class NewsPost extends Component{
  constructor(props){
    super(props);
    this.state={
      loading:false
    }
  }

  componentDidMount(){
    ImageApi.viewThumbnailImage(this.props.img, 1024).then(res =>
      this.setState({ img: res.config.url, loading: true})
    )
  }

  render(){
    const { img } = this.state;
    const { date, url } = this.props;

    return (
      <Link to={`/news/list/${url}`}>
      <li className={cx('thumbPost')}>
        <div className={cx('img')}><img src={img} alt=""/></div>
        <div className={cx('date')}>{date}</div>
      </li>
      </Link>
    )
  }
}

export default NewsPost;
