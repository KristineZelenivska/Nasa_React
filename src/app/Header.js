import './styles/header.sass'
import React from "react";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button,
  } from 'reactstrap';      
  
const Header=({getRandomPost})=> (
  <Navbar color="dark" dark className='navBar'>
    <NavbarBrand className='navQuote'><i>“Curiosity is the essence of human existence”<br/>― Gene Cernan</i></NavbarBrand> 
    <Nav className="mr-auto" navbar>
      <NavItem>
        <NavLink href="https://apod.nasa.gov/">Go to apod.nasa.gov</NavLink>
      </NavItem>
    </Nav>
    <Button color='info' className='navButton' size='lg' onClick={()=>getRandomPost()}>Show me more!</Button>
  </Navbar>
)

export default Header;