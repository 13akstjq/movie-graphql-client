import React , {Component} from 'react';
import styled from 'styled-components';



const Card = styled.div`
    background-image : ${props => `url(${props.img})`};
    width : 200px;
    width : 30%;
    margin-bottom : 50px;
    

`

const Title = styled.div`
    background-color : white;
    color : black;
`

class Movie extends Component {

    render(){
        const {title,rating,img} = this.props;
        console.log(title,rating,img);
        return (
            
            <Card img>
                <Title>{title} / {rating}⭐️</Title>
            </Card>
        );
    }
}


export default Movie; 