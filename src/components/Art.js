import React from 'react';
import ImageModal from './ImageModal';

import images from '../data/images.json';
import Image from './Image';
import Filter from './Filter';

class Art extends React.Component {
    /**
     * @inheritdoc
     */
    constructor(props) {
        super(props);

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

        this.state = {
            images: images.map((image) => {
                return {
                    ...image,
                    imagePath: 'https://benjaminsart.azureedge.net/images/',
                };
            }),
            filter: filter,
            displayModal: false,
            selectedImage: null,
        };
    }

    render() {
        return (
            <div className='Art'>
                <Filter
                    filter={this.state.filter}
                    handleTagClick={this.handleTagClick.bind(this)}
                ></Filter>
                {this.state.images
                    .map((image, index) => (
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
