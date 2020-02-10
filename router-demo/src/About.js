import React from 'react';
import qs from 'qs';

const About = ({ location }) => {
    const query = qs.parse(location.search, {
        // Ignore ? from url query
        ignoreQueryPrefix: true
    });
    const showDetail = query.detail === 'true';
    return (
        <div>
            <h1>About</h1>
            <p>This is About</p>
            {showDetail && <p>detail is true.</p>}
        </div>
    );
};

export default About;
