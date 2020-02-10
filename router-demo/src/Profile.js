import React from 'react';

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
        </div>
    );
}

export default Profile;
