import React from 'react';
import { connect } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';

import * as actions from '../actions';
import Header from './Header';
import landing from './Landing';
import Dashboard from './Dashboard';
import SurveyNew from './surveys/SurveyNew';

class App extends React.Component{
  componentDidMount(){
    this.props.fetchUser();
  }

  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Route path="/" component={Header}/>
            <Route exact path="/" component={landing}/>
            <Route path="/surveys" component={Dashboard}/>
            <Route path='/survey/new' component={SurveyNew} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);