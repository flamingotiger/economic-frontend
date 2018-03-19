import React, { Component } from 'react';
import { HomeWrapper } from '../../components/Templates';
import { HomeNews, HomeDiscussion, HomeStartUp } from '../../components/Organisms';


class HomeContainer extends Component {
    render() {
        return(
          <HomeWrapper>
              <HomeNews HomeNews={this.props.HomeNews}/>
              <HomeDiscussion HomeDiscussion={this.props.HomeDiscussion}/>
              <HomeStartUp HomeStartUp={this.props.HomeStartUp}/>
          </HomeWrapper>
        );
    }
}

export default HomeContainer;
