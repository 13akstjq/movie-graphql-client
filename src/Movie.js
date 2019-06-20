import React , {Component} from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';


const Card = styled.div`
    background-image : ${props => `url(${props.img})`};
    width :200px;
    height : 340px;
    margin-bottom : 50px;
    display : flex;
    align-items : flex-end;
    box-shadow: 0 8px 38px hsla(0,0%,52.2%,.3), 0 5px 12px hsla(0,0%,52.2%,.22);
    border-radius: 10px;
`

const Title = styled.div`
    flex : 1;
    background-color : white;
    color : black;
    margin-bottom : 30px;
    text-align : center;
    box-shadow: 0 8px 38px hsla(0,0%,52.2%,1), 0 5px 12px hsla(0,0%,52.2%,.22);
    border-radius : 2px;

`

class Movie extends Component {

    render(){
        const {title,rating,img,id} = this.props;
        return (
            <Link to={`/details/${id}/`}>
                <Card img={img}>
                    <Title>{title} / {rating}⭐️</Title>
                </Card>
            </Link>
        );
    }
}


export default Movie; 