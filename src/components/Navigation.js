import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const Navigation = (props) => {
	return (
		<Navbar collapseOnSelect expand="sm">
			<Navbar.Brand>
				<strong>Benjamin's Gallery</strong>
			</Navbar.Brand>

			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="ml-auto">
                    <Nav.Link onClick={props.onOpenAbout}>About</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	)
}

export default Navigation;