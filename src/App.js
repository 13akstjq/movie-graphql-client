import React ,{Component}from 'react';
import {HashRouter as Router,Route} from 'react-router-dom';
import {ApolloProvider} from 'react-apollo';
import client from './apolloClient';
import Home from './Home';
import Detail from './Detail';
import styled from 'styled-components';

const Container = styled.div`
  display : flex;
  flex-direction : row;
  flex-wrap : wrap;
  justify-content: space-around;
  padding : 60px;
`


class App extends Component {
  render(){
    return (
      <ApolloProvider client={client}>
        <Router>
          <Container >
            <Route exact={true}  path = {'/'} component={Home}></Route>
            <Route path = {'/details/:movieId'} component={Detail}></Route>
          </Container>
        </Router>
        {/* <div className="App"/> */}
      </ApolloProvider>
    );
  }
}



export default App;
