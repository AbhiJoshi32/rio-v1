import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../assets/img/logo.jpg';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

export default class Header extends Component {
    constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
          <style>{"\
                .navbar{\
                  background-color:rgba(0, 0, 0, 0.6)!important;\
                }\
              "}</style>
        <Navbar color="dark" dark expand="md" fixed="top">
          <NavbarBrand href="/"><img src={logo}/></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
            <NavItem>
                <NavLink exact to="/" className="nav-link">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/gallery/" className="nav-link">Gallery</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact/" className="nav-link">Contact</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}