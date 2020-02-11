import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MovieItem from './MovieItem';
import axios from 'axios';

const MovieListBox = styled.div `
    box-sizing: border-box;
    padding-bottom: 3rem;
    width: 768px;
    margin: 0 auto;
    margin-top: 2rem;
    @media screen and (max-width: 768px) {
        width: 100%;
        padding-left: 1rem;
        padding-right: 1rem;
    }
`;

const sampleMovie = {
    title: 'title',
    overview: 'overview',
    poster_path: '/mMZRKb3NVo5ZeSPEIaNW9buLWQ0.jpg',
    homepage: 'https://google.com'
}

const MovieList = () => {
    const [movies, setMovies] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get(
                    'https://api.themoviedb.org/3/movie/now_playing?api_key=94abad8b6e42cfebed4f0232a57158d4',
                );
                setMovies(response.data.results);
            } catch (e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, []);

    if(loading) {
        return <MovieListBox>Loading...</MovieListBox>;
    }

    if(!movies) {
        return null;
    }
    return (
        <MovieListBox>
            {movies.map((movie) => (
                <MovieItem key={movie.id} movie={movie} />
            ))}
        </MovieListBox>
    )
};

export default MovieList;
