import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
    const [data, setData] = useState(null);
    const onClick = async() => {
        try {
            const response = await axios.get(
                'https://api.themoviedb.org/3/movie/550?api_key=94abad8b6e42cfebed4f0232a57158d4',
            );
            setData(response.data);
        } catch(e) {
            console.log(e);
        }
    };

    return (
        <div>
            <div>
                <button onClick={onClick}>Get Data</button>
            </div>
            { data && <textarea rows={7} value={JSON.stringify(data, null, 2)}/> }
        </div>
    );
}

export default App;
