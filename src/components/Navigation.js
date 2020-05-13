import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import About from './About';

class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayModal: false,
        };
    }

    render() {
        return (
            <Navbar collapseOnSelect expand='sm'>
                <Navbar.Brand>
                    <strong>Benjamin's Gallery</strong>
                </Navbar.Brand>

                <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                <Navbar.Collapse id='responsive-navbar-nav'>
                    <Nav className='ml-auto'>
                        <Nav.Link onClick={this.handleAboutClick.bind(this)}>
                            About
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <About
                    show={this.state.displayModal}
                    Close={this.onCloseModal.bind(this)}
                ></About>
            </Navbar>
        );
    }

    handleAboutClick() {
        this.setState({
            displayModal: true,
        });
    }

    onCloseModal() {
        this.setState({
            displayModal: false,
        });
    }
}

export default Navigation;
