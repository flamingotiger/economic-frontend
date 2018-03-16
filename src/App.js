import React, { Component } from 'react';
import { BrowserRouter as Router, Route, BrowserRouter, Switch } from 'react-router-dom';
import { DataPage, DiscussionDetailPage, DiscussionPage, DiscussionSubPage, HomePage, NewsListPage, NewsDetailPage, NewsPage, StartUpDetailPage, StartUpPage, Nomatch } from './components/pages';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Router>
          <div className="App">
            <div className="App-intro">
              <Switch>
                <Route exact path="/" component={HomePage}/>
                <Route exact path="/data" component={DataPage}/>
                <Route exact path="/discussion" component={DiscussionPage}/>
                  <Route path="/discussion/sub" component={DiscussionSubPage}/>
                  <Route path="/discussion/sub/detail" component={DiscussionDetailPage}/>
                <Route exact path="/news" component={NewsPage}/>
                  <Route path="/news/list" component={NewsListPage}/>
                  <Route path="/news/list/detail" component={NewsDetailPage}/>
                <Route exact path="/startup" component={StartUpPage}/>
                  <Route path="/startup/detail" component={StartUpDetailPage}/>
                <Route component={Nomatch}/>
              </Switch>
            </div>
          </div>
        </Router>
      </BrowserRouter>
    );
  }
}

export default App;
