import React from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import About from 'About';
import Home from 'Home';
import Profiles from 'Profiles';
import History from './History';

const App = () => {
    return (
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/info">Info</Link>
                </li>
                <li>
                    <Link to="/profiles">Profile</Link>
                </li>
                <li>
                    <Link to="/history">History</Link>
                </li>
            </ul>
            <hr/>
            <Switch>
                <Route path="/" component={Home} exact={true} />
                <Route path={['/about', '/info']} component={About} />
                <Route path="/profiles" component={Profiles} />
                <Route path="/history" component={History} />
                <Route render={({ location }) => (
                    <div>
                        <h2>This page is not existed.</h2>
                        <p>{location.pathname}</p>
                    </div>
                )}/>
            </Switch>
            
        </div>
    );
};

export default App;
