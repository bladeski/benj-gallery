import React from 'react';

class Image extends React.Component {
    render() {
        return (
            <article className='Image-Container'>
                <button onClick={this.onClickImage.bind(this)}>
                    <picture>
                        <source
                            type='image/webp'
                            srcSet={`${this.props.image.imagePath}${this.props.image.filename}.webp`}
                        ></source>
                        <img
                            src={`${this.props.image.imagePath}${this.props.image.filename}.jpg`}
                            alt={this.props.image.description}
                        />
                    </picture>
                </button>
            </article>
        );
    }

    onClickImage() {
        this.props.onClickImage(this.props.image);
    }
}

export default Image;
