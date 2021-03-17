import 'bootstrap/dist/css/bootstrap.css';
import './App.sass';
import React, { Component } from "react";
import {Container} from 'reactstrap';
import Main from './app/MainContainer.js'
  
class App extends Component {
  render() {
    return (
      <Container fluid className='mainBody'>    
        <Main/>
      </Container>
    )
  }
}

export default App;
  



