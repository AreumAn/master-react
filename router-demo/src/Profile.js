import React from 'react';
import WithRouter from './WithRouter';
import { withRouter } from 'react-router-dom';

const data = {
    areum: {
        name: 'areum an',
        description: 'She is Korean'
    },
    hyunbin: {
        name: 'Lee',
        description: 'actor'
    }
};

const Profile = ({ match }) => {
    const { username } = match.params;
    const profile = data[username];
    
    if(!profile) {
        return <div>No user</div>;
    }

    return (
        <div>
            <h3>{username}({profile.name})</h3>
            <p>{profile.description}</p>
            <WithRouter />
        </div>
    );
}

export default withRouter(Profile);
