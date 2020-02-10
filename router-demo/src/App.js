import React from 'react';
import { Route, Link } from 'react-router-dom';
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
            <Route path="/" component={Home} exact={true} />
            <Route path={['/about', '/info']} component={About} />
            <Route path="/profiles" component={Profiles} />
            <Route path="/history" component={History} />
        </div>
    );
};

export default App;
