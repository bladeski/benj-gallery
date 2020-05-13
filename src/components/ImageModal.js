import React from 'react';
import { Modal } from 'react-bootstrap';

const ImageModal = (props) => {
    return (
        props.image && (
            <Modal show={props.show} onHide={props.Close} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{props.image.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <picture>
                        <source
                            type='image/webp'
                            srcSet={`${props.image.imagePath}${props.image.filename}.webp`}
                        ></source>
                        <img
                            src={`${props.image.imagePath}${props.image.filename}.jpg`}
                            alt={props.image.description}
                        />
                    </picture>
                </Modal.Body>
                <Modal.Footer>{props.image.description}</Modal.Footer>
            </Modal>
        )
    );
};

export default ImageModal;
