import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './HomeStartUpPostList.scss';
import { HomeStartUpPost } from '../../Atoms';

const cx = classNames.bind(styles);

class HomeStartUpPostList extends Component {
  constructor(props){
    super(props);
    this.state={
        post :[
          {
            img:'/assets/dummy-main-3.png',
            subTitle:'L’élection surprise de Donald Trump provoque une nouvelle onde de choc',
            text:
            `Once the printer ink runs dry it has to be replaced with another inkjet cartridge.
            There are many reputed companies like Canon, Epson, Dell, and Lexmark that provide
            the necessary cartridges to replace the empty cartridges. Replacing inkjet cartridge
            can add to a very big cost. It could be worse if you have to replace the empty cartridges
            frequently every month. Nowadays many buyers are making use of compatible Inkjet Cartridges
            as they are less expensive and are easily available online. These compatible inkjet cartridges
            are available from the third party at a much lower price. These cartridges can be replaced by
            the printer ink of similar brand. Compatible Inkjet Cartridge will help you to make extra-ordinary
            savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins
            to dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out
            condition. Always remember to refill the cartridge as early as possible.
            `
          },
          {
            img:'/assets/dummy-main-4.png',
            subTitle:'L’élection surprise de Donald Trump provoque une nouvelle onde de choc',
            text:
            `Once the printer ink runs dry it has to be replaced with another inkjet cartridge.
            There are many reputed companies like Canon, Epson, Dell, and Lexmark that provide
            the necessary cartridges to replace the empty cartridges. Replacing inkjet cartridge
            can add to a very big cost. It could be worse if you have to replace the empty cartridges
            frequently every month. Nowadays many buyers are making use of compatible Inkjet Cartridges
            as they are less expensive and are easily available online. These compatible inkjet cartridges
            are available from the third party at a much lower price. These cartridges can be replaced by
            the printer ink of similar brand. Compatible Inkjet Cartridge will help you to make extra-ordinary
            savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins
            to dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out
            condition. Always remember to refill the cartridge as early as possible.
            `
          },
          {
            img:'/assets/dummy-main-5.png',
            subTitle:'L’élection surprise de Donald Trump provoque une nouvelle onde de choc',
            text:
            `Once the printer ink runs dry it has to be replaced with another inkjet cartridge.
            There are many reputed companies like Canon, Epson, Dell, and Lexmark that provide
            the necessary cartridges to replace the empty cartridges. Replacing inkjet cartridge
            can add to a very big cost. It could be worse if you have to replace the empty cartridges
            frequently every month. Nowadays many buyers are making use of compatible Inkjet Cartridges
            as they are less expensive and are easily available online. These compatible inkjet cartridges
            are available from the third party at a much lower price. These cartridges can be replaced by
            the printer ink of similar brand. Compatible Inkjet Cartridge will help you to make extra-ordinary
            savings with money back guarantee. As soon as the cartridge gets empty the ink that it contains begins
            to dry and finally clogs the nozzle. You can refill the cartridge once it reaches its wear out
            condition. Always remember to refill the cartridge as early as possible.
            `
          }
        ]
    }
    this._renderPost = this._renderPost.bind(this);
}
_renderPost = () => {
  const post = this.state.post.map((post,i) => {
    return <HomeStartUpPost
      subTitle={post.subTitle}
      text = {post.text}
      key={i}
      img = {post.img}
      />
  })
  return post;
}

    render() {
        return(
          <ul className={cx('postList')}>
            {this._renderPost()}
          </ul>
        );
    }
}
export default HomeStartUpPostList;
