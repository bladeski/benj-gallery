import React from 'react';
import { Modal } from 'react-bootstrap';
import Tag from './Tag';

const ImageModal = (props) => {
    return (
        props.image && (
            <Modal
                className='image-modal'
                show={props.show}
                onHide={props.Close}
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title>{props.image.name} <span className="image-date">{props.image.date}</span></Modal.Title>
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
                <Modal.Footer>
                    <div className='description'>{props.image.description}</div>
                    <div className='tags'>
                        <img className="tag-icon" alt="tag" src="icons/tag.svg"/>
                        {props.filter
                            .filter((tag) =>
                                props.image.tags.includes(tag.tagName)
                            )
                            .map((tag, index) => (
                                <Tag
                                    key={index}
                                    tag={tag}
                                    onClickTag={props.handleTagClick}
                                ></Tag>
                            ))}
                    </div>
                </Modal.Footer>
            </Modal>
        )
    );
};

export default ImageModal;
