import React from 'react';
import ImageModal from './ImageModal';

import Image from './Image';
import Filter from './Filter';
import CONSTANTS from '../config/Constants';

class Art extends React.Component {
    /**
     * @inheritdoc
     */
    constructor(props) {
        super(props);

        this.getImageData();

        this.state = {
            images: [],
            filter: [],
            displayModal: false,
            selectedImage: null,
        };
    }

    getImageData() {
        fetch(CONSTANTS.DATA_API_URL)
            .then((response) => response.json())
            .then((data) => this.processImageData(data))
            .then((data) => this.setState(data));
    }

    processImageData(images) {
        return new Promise((res, rej) => {
            const filter = images
                .map((image) => {
                    return [...image.tags];
                })
                .flat()
                .filter((tag, index, self) => {
                    return self.indexOf(tag) === index;
                })
                .map((tag) => {
                    return {
                        tagName: tag,
                        selected: false,
                    };
                })
                .sort((a, b) => {
                    return a.tagName > b.tagName
                        ? 1
                        : a.tagName < b.tagName
                        ? -1
                        : 0;
                });

            res({
                images: images.map((image) => {
                    return {
                        ...image,
                        imagePath: CONSTANTS.IMAGE_CDN_ENDPOINT,
                    };
                }),
                filter: filter,
            });
        });
    }

    render() {
        return (
            <div className='Art'>
                <Filter
                    filter={this.state.filter}
                    handleTagClick={this.handleTagClick.bind(this)}
                ></Filter>
                {this.state.images.map((image, index) => (
                    <Image
                        key={index}
                        image={image}
                        filter={this.state.filter}
                        onClickImage={this.handleImageClick.bind(this)}
                        handleTagClick={this.handleTagClick.bind(this)}
                    ></Image>
                ))}
                <ImageModal
                    image={this.state.selectedImage}
                    show={this.state.displayModal}
                    filter={this.state.filter}
                    handleTagClick={this.handleTagClick.bind(this)}
                    Close={this.onCloseModal.bind(this)}
                />
            </div>
        );
    }

    handleImageClick(image) {
        this.setState({
            displayModal: true,
            selectedImage: image,
        });
    }

    onCloseModal() {
        this.setState({
            displayModal: false,
        });
    }

    handleTagClick(tagName) {
        const filter = this.state.filter.map((tag) =>
            tag.tagName === tagName
                ? {
                      ...tag,
                      selected: !tag.selected,
                  }
                : tag
        );
        console.log(filter);

        this.setState({
            filter: filter,
        });
    }
}

export default Art;
