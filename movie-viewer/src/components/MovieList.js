import React from 'react';
import styled from 'styled-components';
import MovieItem from './MovieItem';

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
    return (
        <MovieListBox>
            <MovieItem movie={sampleMovie} />
            <MovieItem movie={sampleMovie} />
            <MovieItem movie={sampleMovie} />
            <MovieItem movie={sampleMovie} />
        </MovieListBox>
    )
};

export default MovieList;
