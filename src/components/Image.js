import React from 'react';
import { Tag as TagIcon } from 'react-feather';
import Tag from './Tag';

class Image extends React.Component {
    render() {
        const showImage =
            this.props.filter.filter((tag) => tag.selected).length === 0 ||
            this.props.filter
                .filter((tag) => tag.selected === true)
                .map((tag) => tag.tagName)
                .every((tagName) => this.props.image.tags.includes(tagName));
        
        return (
            <article className={`Image-Container ${!showImage ? 'hide' : ''}`}>
                <button onClick={this.onClickImage.bind(this)}>
                    <picture>
                        <source
                            type='image/webp'
                            srcSet={`${this.props.image.imagePath}${this.props.image.filename}.webp`}
                        ></source>
                        <img
                            className='gallery-image'
                            src={`${this.props.image.imagePath}${this.props.image.filename}.jpg`}
                            alt={this.props.image.description}
                        />
                    </picture>
                </button>
                <div className='tag-container'>
                    <div className='tags'>
                        <TagIcon className='tag-icon'></TagIcon>
                        {this.props.filter
                            .filter((tag) =>
                                this.props.image.tags.includes(tag.tagName)
                            )
                            .map((tag, index) => (
                                <Tag
                                    key={index}
                                    tag={tag}
                                    onClickTag={this.props.handleTagClick}
                                ></Tag>
                            ))}
                    </div>
                </div>
            </article>
        );
    }

    onClickImage() {
        this.props.onClickImage(this.props.image);
    }

    onClickTag(e) {
        const tag = e.currentTarget.dataset.tagName;
        tag && this.props.handleTagClick(tag);
    }
}

export default Image;
