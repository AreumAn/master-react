import React from 'react';
import { NavLink, Route } from 'react-router-dom';
import Profile from 'Profile';

const Profiles = () => {
    const activeStyle = {
        background: 'black',
        color: 'white'
    };
    return (
        <div>
            <h3>User List:</h3>
            <ul>
                <li>
                    <NavLink activeStyle={activeStyle} to="/profiles/areum">
                        areum
                    </NavLink>
                </li>
                <li>
                    <NavLink activeStyle={activeStyle} to="/profiles/hyunbin">
                        hyunbin
                    </NavLink>
                </li>
            </ul>

            <Route path="/profiles" exact render={() => <div>Select User</div>}/>
            <Route path="/profiles/:username" component={Profile}/>
        </div>
    );
};

export default Profiles;
