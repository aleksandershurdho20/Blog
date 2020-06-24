
import React, { Component } from 'react'
// import * as ReactBootstrap from 'react-bootstrap'
import {Navbar,Nav,NavLink,Button} from 'react-bootstrap'
export class Navigation extends Component {
    render() {
        return (
        <div>
            <>
              <Navbar bg="light" variant="light">
                <Navbar.Brand href="/Newspage">News</Navbar.Brand>
                <Nav className="mr-auto">
                  <Nav.Link href="/Newspage">Home</Nav.Link>
                  <Nav.Link href="/CreateNews">Create</Nav.Link>
                  <Nav.Link href="/DeleteNews">Delete</Nav.Link>
                </Nav>
              </Navbar>
            </>
          </div>
          
        );
    }
}

export default Navigation