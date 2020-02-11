import React, { useState, useCallback } from 'react';
import MovieList from 'components/MovieList';
import Genres from './components/Genres';

const App = () => {
    const [genreId, setGenre] = useState('');
    const onSelect = useCallback(genreId => setGenre(genreId),[]);

    return (
        <>
        <Genres genreId={genreId} onSelect={onSelect}/>
        <MovieList genreId={genreId} />
        </>
    );
}

export default App;
