import React from 'react';
import {Query} from 'react-apollo';
import {HOME_PAGE} from './queries';
import Movie from './Movie';
import styled from 'styled-components';

const Loading = styled.span`
    font-size : 40px;
    font-weight : 600;
`

const Error = styled.span`
    font-size : 40px;
    font-weight : 600;
    color : red;
`

const Home = () => <Query query={HOME_PAGE}>{({loading, data, error}) => {
    if(loading) return  <Loading>loading...</Loading>
    if(error) return <Error>Error!!!</Error>
    return data.movies.map(movie => <Movie key= {movie.id} title={movie.title} img={movie.medium_cover_image} rating={movie.rating}></Movie>
);
}}</Query>;
export default Home;