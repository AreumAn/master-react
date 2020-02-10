import React from 'react';
import { withRouter } from 'react-router-dom';

const WithRouter = ({ location, match, history }) => {
    return (
        <div>
            <h4>Location</h4>
            <textarea
                value={JSON.stringify(location, null, 2)}
                row={7}
                readOnly={true}/>
            <h4>match</h4>
            <textarea
                value={JSON.stringify(match, null, 2)}
                row={7}
                readOnly={true}/>
            <button onClick={() => history.push('/')}>Go Home</button>
        </div>
    );
}

export default withRouter(WithRouter);
