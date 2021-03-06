import React from "react";
import {Button, Navbar, Card, CardImg} from 'reactstrap';
import {Route, Link} from 'react-router-dom';
import Order from './Order'


const App = () => {
  return (
    <>
    <Navbar color='info'>
    <h1 style={{ color: 'white' }}>Lambda Eats</h1>
    <Link to='/'>
    <Button color='info'>
     Home
    </Button>
    </Link>
    </Navbar>

    <Route exact path = '/'>
    <Card>
      <CardImg src={require('./Pizza.jpg')}/>
      <Link to = {'/pizza'}>
        <Button color='info' style={{position: 'absolute', left: '50%', top: '50%'}}>
        Pizza!
        </Button>
      </Link>
      </Card>
    </Route>

    <Route path = '/pizza'>
      <Order/>
    </Route>

    </>
  );
};
export default App;
