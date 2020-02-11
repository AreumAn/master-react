import React from 'react';
import styled from 'styled-components';

const genres = [
    {
        "name": "Action"
    },
    {
        "name": "Adventure"
    },
    {
        "name": "Animation"
    },
    {
        "name": "Comedy"
    },
    {
        "name": "Crime"
    },
    {
        "name": "Documentary"
    },
    {
        "name": "Drama"
    }
]

const GenresBox = styled.div`
    display: flex;
    padding: 1rem;
    width: 768px;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
        width: 100%;
        overflow-x: auto;
    }
`;

const Genre = styled.div`
    font-size: 1.125rem;
    cursor: pointer;
    white-space: pre;
    text-decoration: none;
    color: inherit;
    padding-bottom: 0.25rem;

    &:hover {
        color: #495057;
    }

    &.active {
        font-weight: 600;
        border-bottom: 2px solid #22b8cf;
        color: #22b8cf;
        &:hover {
        color: #3bc9db;
        }
    }

    & + & {
        margin-left: 1rem;
    }
`;

const Genres = () => {
    return (
        <GenresBox>
            {genres.map((genre, idx) => (
                <Genre key={idx}>{genre.name}</Genre>
            ))}
        </GenresBox>
    );
}

export default Genres;
