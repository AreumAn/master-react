import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { moviesApi } from 'api';

const Container = styled.div`
    height: calc(100vh - 50px);
    width: 100%;
    position: relative;
    padding: 50px;
`;


const MovieDetail = ({ pathMovieId }) => {
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);
            try {
                if(pathMovieId) {
                    const {
                        data: movieDetails
                    } = await moviesApi.movieDetail(pathMovieId);
                    setMovie(movieDetails);
                }
            } catch(e) {
                console.log(e);
            }
            setLoading(false);
        };
        fetchData();
    }, [pathMovieId]);

    if(loading) {
        return <Container>Loading...</Container>;
    }

    if(!movie) {
        return null;
    }

    return (
        <div>hey hey hye</div>
    )

}

export default MovieDetail;
