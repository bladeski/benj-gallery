import React from 'react';

class Tag extends React.Component {
    render() {
        return (
            <button className={`tag ${this.props.tag.selected ? 'selected' : ''}`} onClick={this.onClickTag.bind(this)}>
                {this.props.tag.tagName}
            </button>
        );
    }
    onClickTag() {
        this.props.onClickTag(this.props.tag.tagName);
    }
}

export default Tag;
