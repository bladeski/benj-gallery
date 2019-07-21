import React from 'react'
import { Modal } from 'react-bootstrap'

const ImageModal = (props) => {
    return(
        <Modal show={props.show} onHide={props.Close}>
            <Modal.Header closeButton></Modal.Header>
            <Modal.Body>
                <img src={props.src}/>
            </Modal.Body>
        </Modal>
    )
}

export default ImageModal