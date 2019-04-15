import React from 'react';

//Your router stuff should never go in the index.js just here in the App component
import { BrowserRouter, Route }  from 'react-router-dom';

import Header from './Header'

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>Survey New</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => {
    return (
      <div>
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

export default App;