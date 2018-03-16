import React, { Component } from 'react';
import classNames from 'classnames/bind';
import styles from './HomeContainer.scss';
import { HomeWrapper } from '../../components/Templates';
import { HomeNews, HomeDiscussion, HomeStartUp } from '../../components/Organisms';

const cx = classNames.bind(styles);

class HomeContainer extends Component {
    render() {
        return(
          <HomeWrapper>
              <HomeNews/>
              <HomeDiscussion/>
              <HomeStartUp/>
          </HomeWrapper>
        );
    }
}

export default HomeContainer;
