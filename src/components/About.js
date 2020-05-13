import React from 'react';
import { Modal } from 'react-bootstrap';

const About = (props) => {
    return (
        <Modal show={props.show} onHide={props.Close} centered>
            <Modal.Header closeButton>
                <h1>About</h1>
            </Modal.Header>
            <Modal.Body>
                <p>This is Benjamin's gallery.</p>
            </Modal.Body>
        </Modal>
    );
};

export default About;
