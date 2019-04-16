import React, { Component } from 'react';

//Your router stuff should never go in the index.js just here in the App component
import { BrowserRouter, Route }  from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header'

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>Survey New</h2>;
const Landing = () => <h2>Landing</h2>;

class App extends Component { 

  componentDidMount() {
    this.props.fetchUser();
  }

  render () {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header></Header>
            <Route exact path="/" component={Landing}/>
            <Route exact path="/surveys" component={Dashboard}/>
            <Route exact path="/surveys/new" component={SurveyNew}/>
            <Route />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

// The first arg to connect is the mapsStateToProps second arg is action creators
export default connect(null, actions)(App);