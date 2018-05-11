import React, { Component } from 'react';
import styles from './NewsDetailPost.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import { SectorApi, ImageApi } from '../../../api';

const cx = classNames.bind(styles);

class NewsDetailPost extends Component{
  constructor(){
    super();
    this.state={ loading:false }
  }

  async componentDidMount(){
    await ImageApi.viewThumbnailImage(this.props.img, 256).then(res =>
        this.setState({ image: res.config.url })
      )
    await SectorApi.getSector(this.props.cate).then(res => this.setState({ cate: res.data.sector.name, loading: true}))
  }
  render(){
    const {hideText, paramsDate, url, title, content } = this.props;
    const { loading, image, cate } = this.state;

    if(!loading) return null;

    return (
      <li className={cx('post')}>
        <Link to={`/news/list/${paramsDate}/detail/${url}`}>
          <div className={cx('cate')}>{cate}</div>
          <div className={cx('img')}><img src={image} alt=""/></div>
          <div className={cx('subTitle')}>{title}</div>
          {hideText ?
            null
            :
            <div className={cx('text')}>{content}</div>
          }
        </Link>
      </li>
    )
  }
}

export default NewsDetailPost;
