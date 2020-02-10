import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from 'About';
import Home from 'Home';
import Profile from './Profile';

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
                    <Link to="/profile/areum">areum profile</Link>
                </li>
                <li>
                    <Link to="/profile/hyunbin">hyunbin profile</Link>
                </li>
            </ul>
            <hr/>
            <Route path="/" component={Home} exact={true} />
            <Route path={['/about', '/info']} component={About} />
            <Route path="/profile/:username" component={Profile} />
        </div>
    );
};

export default App;
