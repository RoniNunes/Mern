import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';


import { BrowserRouter as Router, Route } from 'react-router-dom';

import Login from './Login';
import HomePanel from './components/HomePanel';
import Cpanel from './components/PanelLogin/Cpanel';


//ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={HomePanel} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/accounts" component={Cpanel} />

        </div>
    </Router>
    , document.getElementById('root')
);


registerServiceWorker();
