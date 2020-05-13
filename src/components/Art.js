import React from 'react';
import { Container } from 'react-bootstrap';
import ImageModal from './ImageModal';

import images from '../data/images.json';
import Image from './Image';

class Art extends React.Component {
    /**
     * @inheritdoc
     */
    constructor(props) {
        super(props);

        this.state = {
            images: images.map(image => {
                return {
                    ...image,
                    imagePath: 'images/'
                }
            }),
            displayModal: false,
            selectedImage: null
        };
    }

    render() {
        return (
            <div className='Art'>
                <Container fluid>
                    {this.state.images.map((image, index) => (
                        <Image key={index} image={image} onClickImage={this.handleImageClick.bind(this)}></Image>
                    ))}
                    <ImageModal
                        image={this.state.selectedImage}
                        show={this.state.displayModal}
                        Close={this.onCloseModal.bind(this)}
                    />
                </Container>
            </div>
        );
    }

    handleImageClick(image) {
        this.setState({
            displayModal: true,
            selectedImage: image
        });
    }

    onCloseModal() {
        this.setState({
            displayModal: false,
        });
    }
}

export default Art;
